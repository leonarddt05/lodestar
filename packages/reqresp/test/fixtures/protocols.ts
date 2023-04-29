import {ContainerType, UintNumberType, ListBasicType, ValueOf} from "@chainsafe/ssz";
import {
  ContextBytesType,
  DialOnlyProtocol,
  EncodedPayload,
  PayloadType,
  Encoding,
  MixedProtocolGenerator,
  ProtocolHandler,
} from "../../src/types.js";

// eslint-disable-next-line @typescript-eslint/naming-convention
const NumToStrReq = new ContainerType(
  {
    value: new UintNumberType(4),
  },
  {typeName: "NumberToStringReq", jsonCase: "eth2"}
);

export type NumToStrReqType = ValueOf<typeof NumToStrReq>;

// eslint-disable-next-line @typescript-eslint/naming-convention
const NumToStrResp = new ContainerType(
  {
    value: new ListBasicType(new UintNumberType(1), 4),
  },
  {typeName: "NumberToStringResp", jsonCase: "eth2"}
);
export type NumToStrRespType = ValueOf<typeof NumToStrResp>;

export const numberToStringProtocol: MixedProtocolGenerator<NumToStrReqType, NumToStrRespType> = ((
  _modules,
  handler
) => {
  const dialProtocol: DialOnlyProtocol<NumToStrReqType, NumToStrRespType> = {
    method: "number_to_string",
    version: 1,
    encoding: Encoding.SSZ_SNAPPY,
    requestType: () => NumToStrReq,
    responseType: () => NumToStrResp,
    contextBytes: {type: ContextBytesType.Empty},
  };

  if (!handler) return dialProtocol;

  return {
    ...dialProtocol,
    handler,
    inboundRateLimits: {
      // Rationale: https://github.com/sigp/lighthouse/blob/bf533c8e42cc73c35730e285c21df8add0195369/beacon_node/lighthouse_network/src/rpc/mod.rs#L118-L130
      byPeer: {quota: 5, quotaTimeMs: 15_000},
    },
  };
}) as MixedProtocolGenerator<NumToStrReqType, NumToStrRespType>;

export const numberToStringProtocolHandler: ProtocolHandler<NumToStrReqType, NumToStrRespType> =
  async function* numberToStringProtocolHandler(req: NumToStrReqType): AsyncIterable<EncodedPayload<NumToStrRespType>> {
    yield {
      type: PayloadType.ssz,
      data: {value: [...Buffer.from(req.value.toString(), "utf-8")]},
    };
  };
