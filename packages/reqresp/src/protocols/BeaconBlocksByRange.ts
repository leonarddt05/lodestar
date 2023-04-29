import {MAX_REQUEST_BLOCKS} from "@lodestar/params";
import {allForks, phase0, ssz} from "@lodestar/types";
import {ContextBytesType, Encoding, MixedProtocol, ProtocolGenerator} from "../types.js";

/* eslint-disable @typescript-eslint/naming-convention */
const BeaconBlocksByRangeCommon: Pick<
  MixedProtocol<phase0.BeaconBlocksByRangeRequest, allForks.SignedBeaconBlock>,
  "method" | "encoding" | "requestEncoder" | "renderRequestBody" | "inboundRateLimits"
> = {
  method: "beacon_blocks_by_range",
  encoding: Encoding.SSZ_SNAPPY,
  requestEncoder: () => ssz.phase0.BeaconBlocksByRangeRequest,
  renderRequestBody: (req) => `${req.startSlot},${req.step},${req.count}`,
  inboundRateLimits: {
    // Rationale: https://github.com/sigp/lighthouse/blob/bf533c8e42cc73c35730e285c21df8add0195369/beacon_node/lighthouse_network/src/rpc/mod.rs#L118-L130
    byPeer: {quota: MAX_REQUEST_BLOCKS, quotaTimeMs: 10_000},
    getRequestCount: (req) => req.count,
  },
};

export const BeaconBlocksByRange: ProtocolGenerator<phase0.BeaconBlocksByRangeRequest, allForks.SignedBeaconBlock> = (
  _modules,
  handler,
  payloadType
) => {
  return {
    ...BeaconBlocksByRangeCommon,
    version: 1,
    handler,
    payloadType,
    responseEncoder: () => ssz.phase0.SignedBeaconBlock,
    contextBytes: {type: ContextBytesType.Empty},
  };
};

export const BeaconBlocksByRangeV2: ProtocolGenerator<phase0.BeaconBlocksByRangeRequest, allForks.SignedBeaconBlock> = (
  modules,
  handler,
  payloadType
) => {
  return {
    ...BeaconBlocksByRangeCommon,
    version: 2,
    handler,
    payloadType,
    responseEncoder: (forkName) => ssz[forkName].SignedBeaconBlock,
    contextBytes: {
      type: ContextBytesType.ForkDigest,
      forkDigestContext: modules.config,
      forkFromResponse: (block) => modules.config.getForkName(block.message.slot),
    },
  };
};
