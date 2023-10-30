import fs from "node:fs";
import path from "node:path";
import {removeFile, writeIfNotExist, ensureDir, readAllFileNames, Logger} from "@lodestar/utils";
import {CachedBeaconStateAllForks} from "@lodestar/state-transition";
import {CheckpointKey} from "../types.js";
import {CPStatePersistentApis, PersistentKey} from "./types.js";

/**
 * Implementation of CPStatePersistentApis using file system, this is beneficial for debugging.
 */
export class FilePersistentApis implements CPStatePersistentApis {
  constructor(
    private readonly folderPath: string,
    private logger: Logger
  ) {}

  /**
   * Writing to file name with `${cp.rootHex}_${cp.epoch}` helps debugging.
   * This is slow code as it do state serialization which takes 600ms to 900ms on holesky.
   */
  async write(checkpointKey: CheckpointKey, state: CachedBeaconStateAllForks): Promise<PersistentKey> {
    const stateBytes = state.serialize();
    const persistentKey = this.toPersistentKey(checkpointKey);
    await writeIfNotExist(persistentKey, stateBytes);
    return persistentKey;
  }

  async remove(persistentKey: PersistentKey): Promise<boolean> {
    return removeFile(persistentKey);
  }

  async read(persistentKey: PersistentKey): Promise<Uint8Array | null> {
    try {
      const stateBytes = await fs.promises.readFile(persistentKey);
      return stateBytes;
    } catch (_) {
      return null;
    }
  }

  async init(): Promise<void> {
    try {
      let start = Date.now();
      await ensureDir(this.folderPath);
      this.logger.info("@@@ FilePersistentApis ensureDir", {time: Date.now() - start});
      start = Date.now();
      const fileNames = await readAllFileNames(this.folderPath);
      this.logger.info("@@@ FilePersistentApis readAllFileNames", {
        time: Date.now() - start,
        numFiles: fileNames.length,
      });
      start = Date.now();
      for (const fileName of fileNames) {
        await removeFile(path.join(this.folderPath, fileName));
      }
      this.logger.info("@@@ FilePersistentApis removeFiles", {time: Date.now() - start, numFiles: fileNames.length});
    } catch (_) {
      // do nothing
    }
  }

  private toPersistentKey(checkpointKey: CheckpointKey): PersistentKey {
    return path.join(this.folderPath, checkpointKey);
  }
}
