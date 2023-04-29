import {Root, ssz, allForks} from "@lodestar/types";
import {isForkLightClient} from "@lodestar/params";
import {toHex} from "@lodestar/utils";
import {DialOnlyProtocol, Encoding, MixedProtocolGenerator} from "../types.js";
import {getContextBytesLightclient} from "./utils.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LightClientBootstrap: MixedProtocolGenerator<Root, allForks.LightClientBootstrap> = ((
  modules,
  handler,
  payloadType
) => {
  const dialProtocol: DialOnlyProtocol<Root, allForks.LightClientBootstrap> = {
    method: "light_client_bootstrap",
    version: 1,
    encoding: Encoding.SSZ_SNAPPY,
    requestEncoder: () => ssz.Root,
    responseEncoder: (forkName) =>
      isForkLightClient(forkName)
        ? ssz.allForksLightClient[forkName].LightClientBootstrap
        : ssz.altair.LightClientBootstrap,
    contextBytes: getContextBytesLightclient(
      (bootstrap) => modules.config.getForkName(bootstrap.header.beacon.slot),
      modules
    ),
  };

  if (!handler) return dialProtocol;

  return {
    ...dialProtocol,
    handler,
    payloadType,
    renderRequestBody: (req) => toHex(req),
    inboundRateLimits: {
      // As similar in the nature of `Status` protocol so we use the same rate limits.
      byPeer: {quota: 5, quotaTimeMs: 15_000},
    },
  };
}) as MixedProtocolGenerator<Root, allForks.LightClientBootstrap>;
