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

export declare namespace $.youtube.api.pfiinnertube.RequestInfo {
  export type SessionInfo = {
    token?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.RequestInfo.SessionInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.RequestInfo.SessionInfo {
  return {
    token: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.RequestInfo.SessionInfo>): $.youtube.api.pfiinnertube.RequestInfo.SessionInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.RequestInfo.SessionInfo): unknown {
  const result: any = {};
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.string(value.token);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.RequestInfo.SessionInfo {
  const result = getDefaultValue();
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.string(value.token);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.RequestInfo.SessionInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.token !== undefined) {
    const tsValue = value.token;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.RequestInfo.SessionInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token = value;
  }
  return result;
}
