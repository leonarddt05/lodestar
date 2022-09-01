/* eslint-disable @typescript-eslint/naming-convention */
import {fromHexString as b} from "@chainsafe/ssz";
import {PresetName} from "@lodestar/params";
import {IChainConfig} from "../types.js";
import {chainConfig as mainnet} from "../presets/mainnet.js";

/* eslint-disable max-len */

export const gnosisChainConfig: IChainConfig = {
  ...mainnet,

  // NOTE: Only add diff values
  PRESET_BASE: PresetName.gnosis,
  CONFIG_NAME: "gnosis",

  SECONDS_PER_SLOT: 5,
  SECONDS_PER_ETH1_BLOCK: 6,
  ETH1_FOLLOW_DISTANCE: 1024,
  CHURN_LIMIT_QUOTIENT: 4096,

  // Ethereum Goerli testnet
  DEPOSIT_CHAIN_ID: 100,
  DEPOSIT_NETWORK_ID: 100,
  DEPOSIT_CONTRACT_ADDRESS: b("0x0b98057ea310f4d31f2a452b414647007d1645d9"),

  // Dec 8, 2021, 13:00 UTC
  MIN_GENESIS_TIME: 1638968400,
  MIN_GENESIS_ACTIVE_VALIDATOR_COUNT: 4096,
  GENESIS_FORK_VERSION: b("0x00000064"),
  GENESIS_DELAY: 6000,

  // Forking
  ALTAIR_FORK_VERSION: b("0x01000064"),
  ALTAIR_FORK_EPOCH: 512,
  // Bellatrix
  BELLATRIX_FORK_VERSION: b("0x02000064"),
  BELLATRIX_FORK_EPOCH: Infinity,
  // Sharding
  SHARDING_FORK_VERSION: b("0x03000064"),
  SHARDING_FORK_EPOCH: Infinity,
};
