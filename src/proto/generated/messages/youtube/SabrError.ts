import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type SabrError = {
    type: string;
    code: number;
  }
}

export type Type = $.youtube.SabrError;

export function getDefaultValue(): $.youtube.SabrError {
  return {
    type: "",
    code: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.SabrError>): $.youtube.SabrError {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SabrError): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.code !== undefined) result.code = tsValueToJsonValueFns.int32(value.code);
  return result;
}

export function decodeJson(value: any): $.youtube.SabrError {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.code !== undefined) result.code = jsonValueToTsValueFns.int32(value.code);
  return result;
}

export function encodeBinary(value: $.youtube.SabrError): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.code !== undefined) {
    const tsValue = value.code;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SabrError {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.code = value;
  }
  return result;
}
