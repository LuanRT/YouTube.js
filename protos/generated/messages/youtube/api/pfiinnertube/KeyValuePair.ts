import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type KeyValuePair = {
    key?: string;
    value?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.KeyValuePair;

export function getDefaultValue(): $.youtube.api.pfiinnertube.KeyValuePair {
  return {
    key: undefined,
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.KeyValuePair>): $.youtube.api.pfiinnertube.KeyValuePair {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.KeyValuePair): unknown {
  const result: any = {};
  if (value.key !== undefined) result.key = tsValueToJsonValueFns.string(value.key);
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.string(value.value);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.KeyValuePair {
  const result = getDefaultValue();
  if (value.key !== undefined) result.key = jsonValueToTsValueFns.string(value.key);
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.string(value.value);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.KeyValuePair): Uint8Array {
  const result: WireMessage = [];
  if (value.key !== undefined) {
    const tsValue = value.key;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.KeyValuePair {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.key = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
