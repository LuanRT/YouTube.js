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

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type HomeGroupInfo = {
    isPartOfGroup?: boolean;
    isGroup?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo {
  return {
    isPartOfGroup: undefined,
    isGroup: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo>): $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo): unknown {
  const result: any = {};
  if (value.isPartOfGroup !== undefined) result.isPartOfGroup = tsValueToJsonValueFns.bool(value.isPartOfGroup);
  if (value.isGroup !== undefined) result.isGroup = tsValueToJsonValueFns.bool(value.isGroup);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo {
  const result = getDefaultValue();
  if (value.isPartOfGroup !== undefined) result.isPartOfGroup = jsonValueToTsValueFns.bool(value.isPartOfGroup);
  if (value.isGroup !== undefined) result.isGroup = jsonValueToTsValueFns.bool(value.isGroup);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.isPartOfGroup !== undefined) {
    const tsValue = value.isPartOfGroup;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isGroup !== undefined) {
    const tsValue = value.isGroup;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.HomeGroupInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isPartOfGroup = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isGroup = value;
  }
  return result;
}
