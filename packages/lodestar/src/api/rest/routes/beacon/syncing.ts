import fastify from "fastify";
import {LodestarRestApiEndpoint} from "../../interface";
import {Json} from "@chainsafe/ssz";
import {SyncingStatus} from "@chainsafe/lodestar-types";

export const registerSyncingEndpoint: LodestarRestApiEndpoint = (server, {config, api}): void => {
  server.get<fastify.DefaultQuery, {}, unknown>(
    "/syncing",
    {},
    async (request, reply) => {
      const responseValue = await api.beacon.getSyncingStatus();
      let response: Json;
      if(responseValue === true) {
        response = config.types.Boolean.toJson(responseValue);
      } else {
        response = config.types.SyncingStatus.toJson(responseValue as SyncingStatus);
      }
      reply
        .code(200)
        .type("application/json")
        .send(
          response
        );
    });
};