import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.MediaHeader {
  export type Field15 = {
    field1: number;
    field2: number;
    field3: number;
  }
}

export type Type = $.youtube.MediaHeader.Field15;

export function getDefaultValue(): $.youtube.MediaHeader.Field15 {
  return {
    field1: 0,
    field2: 0,
    field3: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.MediaHeader.Field15>): $.youtube.MediaHeader.Field15 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MediaHeader.Field15): unknown {
  const result: any = {};
  if (value.field1 !== undefined) result.field1 = tsValueToJsonValueFns.int32(value.field1);
  if (value.field2 !== undefined) result.field2 = tsValueToJsonValueFns.int32(value.field2);
  if (value.field3 !== undefined) result.field3 = tsValueToJsonValueFns.int32(value.field3);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaHeader.Field15 {
  const result = getDefaultValue();
  if (value.field1 !== undefined) result.field1 = jsonValueToTsValueFns.int32(value.field1);
  if (value.field2 !== undefined) result.field2 = jsonValueToTsValueFns.int32(value.field2);
  if (value.field3 !== undefined) result.field3 = jsonValueToTsValueFns.int32(value.field3);
  return result;
}

export function encodeBinary(value: $.youtube.MediaHeader.Field15): Uint8Array {
  const result: WireMessage = [];
  if (value.field1 !== undefined) {
    const tsValue = value.field1;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field2 !== undefined) {
    const tsValue = value.field2;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field3 !== undefined) {
    const tsValue = value.field3;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.MediaHeader.Field15 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field1 = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field2 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field3 = value;
  }
  return result;
}
