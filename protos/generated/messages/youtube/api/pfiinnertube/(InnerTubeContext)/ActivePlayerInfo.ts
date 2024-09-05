import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.InnerTubeContext {
  export type ActivePlayerInfo = {
    playerContextParams?: Uint8Array;
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo {
  return {
    playerContextParams: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo>): $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo): unknown {
  const result: any = {};
  if (value.playerContextParams !== undefined) result.playerContextParams = tsValueToJsonValueFns.bytes(value.playerContextParams);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo {
  const result = getDefaultValue();
  if (value.playerContextParams !== undefined) result.playerContextParams = jsonValueToTsValueFns.bytes(value.playerContextParams);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.playerContextParams !== undefined) {
    const tsValue = value.playerContextParams;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeContext.ActivePlayerInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.playerContextParams = value;
  }
  return result;
}
