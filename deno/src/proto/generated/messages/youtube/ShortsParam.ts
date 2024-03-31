import {
  Type as Field1,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ShortsParam)/Field1.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type ShortsParam = {
    f1?: Field1;
    p59: number;
  }
}

export type Type = $.youtube.ShortsParam;

export function getDefaultValue(): $.youtube.ShortsParam {
  return {
    f1: undefined,
    p59: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.ShortsParam>): $.youtube.ShortsParam {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ShortsParam): unknown {
  const result: any = {};
  if (value.f1 !== undefined) result.f1 = encodeJson_1(value.f1);
  if (value.p59 !== undefined) result.p59 = tsValueToJsonValueFns.int32(value.p59);
  return result;
}

export function decodeJson(value: any): $.youtube.ShortsParam {
  const result = getDefaultValue();
  if (value.f1 !== undefined) result.f1 = decodeJson_1(value.f1);
  if (value.p59 !== undefined) result.p59 = jsonValueToTsValueFns.int32(value.p59);
  return result;
}

export function encodeBinary(value: $.youtube.ShortsParam): Uint8Array {
  const result: WireMessage = [];
  if (value.f1 !== undefined) {
    const tsValue = value.f1;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.p59 !== undefined) {
    const tsValue = value.p59;
    result.push(
      [59, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ShortsParam {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.f1 = value;
  }
  field: {
    const wireValue = wireFields.get(59);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.p59 = value;
  }
  return result;
}
