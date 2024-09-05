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
  export type HttpHeader = {
    name?: string;
    value?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.HttpHeader;

export function getDefaultValue(): $.youtube.api.pfiinnertube.HttpHeader {
  return {
    name: undefined,
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.HttpHeader>): $.youtube.api.pfiinnertube.HttpHeader {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.HttpHeader): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.string(value.value);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.HttpHeader {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.string(value.value);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.HttpHeader): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
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

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.HttpHeader {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
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
