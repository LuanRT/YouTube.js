import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ReelSequence)/Params.ts";
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
  export type ReelSequence = {
    shortId: string;
    params?: Params;
    feature2: number;
    feature3: number;
  }
}

export type Type = $.youtube.ReelSequence;

export function getDefaultValue(): $.youtube.ReelSequence {
  return {
    shortId: "",
    params: undefined,
    feature2: 0,
    feature3: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.ReelSequence>): $.youtube.ReelSequence {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ReelSequence): unknown {
  const result: any = {};
  if (value.shortId !== undefined) result.shortId = tsValueToJsonValueFns.string(value.shortId);
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  if (value.feature2 !== undefined) result.feature2 = tsValueToJsonValueFns.int32(value.feature2);
  if (value.feature3 !== undefined) result.feature3 = tsValueToJsonValueFns.int32(value.feature3);
  return result;
}

export function decodeJson(value: any): $.youtube.ReelSequence {
  const result = getDefaultValue();
  if (value.shortId !== undefined) result.shortId = jsonValueToTsValueFns.string(value.shortId);
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  if (value.feature2 !== undefined) result.feature2 = jsonValueToTsValueFns.int32(value.feature2);
  if (value.feature3 !== undefined) result.feature3 = jsonValueToTsValueFns.int32(value.feature3);
  return result;
}

export function encodeBinary(value: $.youtube.ReelSequence): Uint8Array {
  const result: WireMessage = [];
  if (value.shortId !== undefined) {
    const tsValue = value.shortId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.feature2 !== undefined) {
    const tsValue = value.feature2;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.feature3 !== undefined) {
    const tsValue = value.feature3;
    result.push(
      [13, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ReelSequence {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.shortId = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.feature2 = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.feature3 = value;
  }
  return result;
}
