import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import {Keystore} from "@chainsafe/bls-keystore";
import {
  YargsError,
  stripOffNewlines,
  sleep,
  recursivelyFind,
  isVotingKeystore,
  isPassphraseFile,
  writeValidatorPassphrase,
  ICliCommand,
} from "../../../../util";
import {VOTING_KEYSTORE_FILE, getValidatorDirPath} from "../../../../validatorDir/paths";
import {IAccountValidatorArgs} from "./options";
import {getAccountPaths} from "../../paths";
import {IGlobalArgs} from "../../../../options";

/* eslint-disable no-console */

interface IValidatorImportArgs {
  keystore?: string;
  directory?: string;
}

export const importCmd: ICliCommand<IValidatorImportArgs, IAccountValidatorArgs & IGlobalArgs> = {
  command: "import",

  describe:
    "Imports one or more EIP-2335 keystores into a Lodestar validator client directory, \
requesting passwords interactively. The directory flag provides a convenient \
method for importing a directory of keys generated by the eth2-deposit-cli \
Ethereum Foundation utility.",

  examples: [
    {
      command: "account validator import --network pyrmont --directory $HOME/eth2.0-deposit-cli/validator_keys",
      description: "Import validator keystores generated with the Ethereum Foundation Eth2 Launchpad",
    },
  ],

  options: {
    keystore: {
      description: "Path to a single keystore to be imported.",
      describe: "Path to a single keystore to be imported.",
      normalize: true,
      conflicts: ["directory"],
      type: "string",
    },

    directory: {
      description:
        "Path to a directory which contains zero or more keystores \
for import. This directory and all sub-directories will be \
searched and any file name which contains 'keystore' and \
has the '.json' extension will be attempted to be imported.",
      describe:
        "Path to a directory which contains zero or more keystores \
  for import. This directory and all sub-directories will be \
  searched and any file name which contains 'keystore' and \
  has the '.json' extension will be attempted to be imported.",
      normalize: true,
      conflicts: ["keystore"],
      type: "string",
    },
  },

  handler: async (args) => {
    const singleKeystorePath = args.keystore;
    const directoryPath = args.directory;
    const {keystoresDir, secretsDir} = getAccountPaths(args);

    const keystorePaths = singleKeystorePath
      ? [singleKeystorePath]
      : directoryPath
      ? recursivelyFind(directoryPath, isVotingKeystore)
      : null;
    const passphrasePaths = directoryPath ? recursivelyFind(directoryPath, isPassphraseFile) : [];

    if (!keystorePaths) {
      throw new YargsError("Must supply either keystore or directory");
    }
    if (keystorePaths.length === 0) {
      throw new YargsError("No keystores found");
    }

    // For each keystore:
    //
    // - Obtain the keystore password, if the user desires.
    // - Copy the keystore into the `validator_dir`.
    //
    // Skip keystores that already exist, but exit early if any operation fails.
    let numOfImportedValidators = 0;

    if (keystorePaths.length > 1) {
      console.log(`
  ${keystorePaths.join("\n")}

  Found ${keystorePaths.length} keystores in \t${directoryPath}
  Importing to \t\t${keystoresDir}
  `);
    }

    for (const keystorePath of keystorePaths) {
      const keystore = Keystore.parse(fs.readFileSync(keystorePath, "utf8"));
      const pubkey = keystore.pubkey;
      const uuid = keystore.uuid;
      if (!pubkey) {
        throw Error("Invalid keystore, must contain .pubkey property");
      }
      const dir = getValidatorDirPath({keystoresDir, pubkey, prefixed: true});
      if (fs.existsSync(dir) || fs.existsSync(getValidatorDirPath({keystoresDir, pubkey}))) {
        console.log(`Skipping existing validator ${pubkey}`);
        continue;
      }

      console.log(`Importing keystore ${keystorePath}
  - Public key: ${pubkey}
  - UUID: ${uuid}`);

      const passphrase = await getKeystorePassphrase(keystore, passphrasePaths);
      fs.mkdirSync(secretsDir, {recursive: true});
      fs.mkdirSync(dir, {recursive: true});
      fs.writeFileSync(path.join(dir, VOTING_KEYSTORE_FILE), keystore.stringify());
      writeValidatorPassphrase({secretsDir, pubkey, passphrase});

      console.log(`Successfully imported validator ${pubkey}`);
      numOfImportedValidators++;
    }

    if (numOfImportedValidators === 0) {
      console.log("\nAll validators are already imported");
    } else if (keystorePaths.length > 1) {
      const skippedCount = keystorePaths.length - numOfImportedValidators;
      console.log(`\nSuccessfully imported ${numOfImportedValidators} validators (${skippedCount} skipped)`);
    }

    console.log(`
  DO NOT USE THE ORIGINAL KEYSTORES TO VALIDATE WITH
  ANOTHER CLIENT, OR YOU WILL GET SLASHED.
  `);
  },
};

/**
 * Fetches the passphrase of an imported Kestore
 *
 * Paths that may contain valid passphrases
 * @param passphrasePaths ["secrets/0x12341234"]
 */
async function getKeystorePassphrase(keystore: Keystore, passphrasePaths: string[]): Promise<string> {
  // First, try to find a passphrase file in the provided directory
  const passphraseFile = passphrasePaths.find((filepath) => filepath.endsWith(keystore.pubkey));
  if (passphraseFile) {
    const passphrase = fs.readFileSync(passphraseFile, "utf8");
    try {
      await keystore.decrypt(stripOffNewlines(passphrase));
      console.log(`Imported passphrase ${passphraseFile}`);
      return passphrase;
    } catch (e) {
      console.log(`Imported passphrase ${passphraseFile}, but it's invalid: ${e.message}`);
    }
  }

  console.log(`
If you enter the password it will be stored as plain-text so that it is not \
required each time the validator client starts
`);

  const answers = await inquirer.prompt<{password: string}>([
    {
      name: "password",
      type: "password",
      message: "Enter the keystore password, or press enter to omit it",
      validate: async (input) => {
        try {
          await keystore.decrypt(stripOffNewlines(input));
          return true;
        } catch (e) {
          return `Invalid password: ${e.message}`;
        }
      },
    },
  ]);

  console.log("Password is correct");
  await sleep(1000); // For UX

  return answers.password;
}
