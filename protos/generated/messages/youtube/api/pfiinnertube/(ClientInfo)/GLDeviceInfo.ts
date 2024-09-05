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
  export type GLDeviceInfo = {
    glRenderer?: string;
    glEsVersionMajor?: number;
    glEsVersionMinor?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo {
  return {
    glRenderer: undefined,
    glEsVersionMajor: undefined,
    glEsVersionMinor: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo>): $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo): unknown {
  const result: any = {};
  if (value.glRenderer !== undefined) result.glRenderer = tsValueToJsonValueFns.string(value.glRenderer);
  if (value.glEsVersionMajor !== undefined) result.glEsVersionMajor = tsValueToJsonValueFns.int32(value.glEsVersionMajor);
  if (value.glEsVersionMinor !== undefined) result.glEsVersionMinor = tsValueToJsonValueFns.int32(value.glEsVersionMinor);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo {
  const result = getDefaultValue();
  if (value.glRenderer !== undefined) result.glRenderer = jsonValueToTsValueFns.string(value.glRenderer);
  if (value.glEsVersionMajor !== undefined) result.glEsVersionMajor = jsonValueToTsValueFns.int32(value.glEsVersionMajor);
  if (value.glEsVersionMinor !== undefined) result.glEsVersionMinor = jsonValueToTsValueFns.int32(value.glEsVersionMinor);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.glRenderer !== undefined) {
    const tsValue = value.glRenderer;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.glEsVersionMajor !== undefined) {
    const tsValue = value.glEsVersionMajor;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.glEsVersionMinor !== undefined) {
    const tsValue = value.glEsVersionMinor;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.GLDeviceInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.glRenderer = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.glEsVersionMajor = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.glEsVersionMinor = value;
  }
  return result;
}
