import {
  Type as FormatId,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FormatId.js";
import {
  Type as Field4,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Lo)/Field4.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
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
  export type Lo = {
    formatId?: FormatId;
    Lj?: number;
    sequenceNumber?: number;
    field4?: Field4;
    MZ?: number;
  }
}

export type Type = $.youtube.Lo;

export function getDefaultValue(): $.youtube.Lo {
  return {
    formatId: undefined,
    Lj: undefined,
    sequenceNumber: undefined,
    field4: undefined,
    MZ: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.Lo>): $.youtube.Lo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Lo): unknown {
  const result: any = {};
  if (value.formatId !== undefined) result.formatId = encodeJson_1(value.formatId);
  if (value.Lj !== undefined) result.Lj = tsValueToJsonValueFns.int32(value.Lj);
  if (value.sequenceNumber !== undefined) result.sequenceNumber = tsValueToJsonValueFns.int32(value.sequenceNumber);
  if (value.field4 !== undefined) result.field4 = encodeJson_2(value.field4);
  if (value.MZ !== undefined) result.MZ = tsValueToJsonValueFns.int32(value.MZ);
  return result;
}

export function decodeJson(value: any): $.youtube.Lo {
  const result = getDefaultValue();
  if (value.formatId !== undefined) result.formatId = decodeJson_1(value.formatId);
  if (value.Lj !== undefined) result.Lj = jsonValueToTsValueFns.int32(value.Lj);
  if (value.sequenceNumber !== undefined) result.sequenceNumber = jsonValueToTsValueFns.int32(value.sequenceNumber);
  if (value.field4 !== undefined) result.field4 = decodeJson_2(value.field4);
  if (value.MZ !== undefined) result.MZ = jsonValueToTsValueFns.int32(value.MZ);
  return result;
}

export function encodeBinary(value: $.youtube.Lo): Uint8Array {
  const result: WireMessage = [];
  if (value.formatId !== undefined) {
    const tsValue = value.formatId;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.Lj !== undefined) {
    const tsValue = value.Lj;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.sequenceNumber !== undefined) {
    const tsValue = value.sequenceNumber;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field4 !== undefined) {
    const tsValue = value.field4;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.MZ !== undefined) {
    const tsValue = value.MZ;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Lo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.formatId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Lj = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.sequenceNumber = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field4 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.MZ = value;
  }
  return result;
}
