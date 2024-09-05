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
  export type ReauthRequestInfo = {
    encodedReauthProofToken?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo {
  return {
    encodedReauthProofToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo>): $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo): unknown {
  const result: any = {};
  if (value.encodedReauthProofToken !== undefined) result.encodedReauthProofToken = tsValueToJsonValueFns.string(value.encodedReauthProofToken);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo {
  const result = getDefaultValue();
  if (value.encodedReauthProofToken !== undefined) result.encodedReauthProofToken = jsonValueToTsValueFns.string(value.encodedReauthProofToken);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.encodedReauthProofToken !== undefined) {
    const tsValue = value.encodedReauthProofToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.RequestInfo.ReauthRequestInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.encodedReauthProofToken = value;
  }
  return result;
}
