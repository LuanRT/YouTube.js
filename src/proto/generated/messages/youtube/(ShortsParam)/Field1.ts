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

export declare namespace $.youtube.ShortsParam {
  export type Field1 = {
    p1: number;
  }
}

export type Type = $.youtube.ShortsParam.Field1;

export function getDefaultValue(): $.youtube.ShortsParam.Field1 {
  return {
    p1: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.ShortsParam.Field1>): $.youtube.ShortsParam.Field1 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ShortsParam.Field1): unknown {
  const result: any = {};
  if (value.p1 !== undefined) result.p1 = tsValueToJsonValueFns.int32(value.p1);
  return result;
}

export function decodeJson(value: any): $.youtube.ShortsParam.Field1 {
  const result = getDefaultValue();
  if (value.p1 !== undefined) result.p1 = jsonValueToTsValueFns.int32(value.p1);
  return result;
}

export function encodeBinary(value: $.youtube.ShortsParam.Field1): Uint8Array {
  const result: WireMessage = [];
  if (value.p1 !== undefined) {
    const tsValue = value.p1;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ShortsParam.Field1 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.p1 = value;
  }
  return result;
}
