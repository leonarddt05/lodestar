import {ssz, allForks} from "@lodestar/types";
import {isForkLightClient} from "@lodestar/params";
import {DialOnlyProtocol, Encoding, MixedProtocolGenerator} from "../types.js";
import {getContextBytesLightclient} from "./utils.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const LightClientFinalityUpdate: MixedProtocolGenerator<null, allForks.LightClientFinalityUpdate> = ((
  modules,
  handler
) => {
  const dialProtocol: DialOnlyProtocol<null, allForks.LightClientFinalityUpdate> = {
    method: "light_client_finality_update",
    version: 1,
    encoding: Encoding.SSZ_SNAPPY,
    requestEncoder: () => null,
    responseEncoder: (forkName) =>
      isForkLightClient(forkName)
        ? ssz.allForksLightClient[forkName].LightClientFinalityUpdate
        : ssz.altair.LightClientFinalityUpdate,
    contextBytes: getContextBytesLightclient((update) => modules.config.getForkName(update.signatureSlot), modules),
  };

  if (!handler) return dialProtocol;

  return {
    ...dialProtocol,
    handler,
    inboundRateLimits: {
      // Finality updates should not be requested more than once per epoch.
      // Allow 2 per slot and a very safe bound until there's more testing of real usage.
      byPeer: {quota: 2, quotaTimeMs: 12_000},
    },
  };
}) as MixedProtocolGenerator<null, allForks.LightClientFinalityUpdate>;
