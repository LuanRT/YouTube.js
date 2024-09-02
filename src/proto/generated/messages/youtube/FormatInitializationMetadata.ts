import {
  Type as FormatId,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FormatId.js";
import {
  Type as InitRange,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./InitRange.js";
import {
  Type as IndexRange,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./IndexRange.js";
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
  export type FormatInitializationMetadata = {
    videoId?: string;
    formatId?: FormatId;
    endTimeMs?: number;
    field4?: number;
    mimeType?: string;
    initRange?: InitRange;
    indexRange?: IndexRange;
    field8?: number;
    durationMs?: number;
    field10?: number;
  }
}

export type Type = $.youtube.FormatInitializationMetadata;

export function getDefaultValue(): $.youtube.FormatInitializationMetadata {
  return {
    videoId: undefined,
    formatId: undefined,
    endTimeMs: undefined,
    field4: undefined,
    mimeType: undefined,
    initRange: undefined,
    indexRange: undefined,
    field8: undefined,
    durationMs: undefined,
    field10: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.FormatInitializationMetadata>): $.youtube.FormatInitializationMetadata {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.FormatInitializationMetadata): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.formatId !== undefined) result.formatId = encodeJson_1(value.formatId);
  if (value.endTimeMs !== undefined) result.endTimeMs = tsValueToJsonValueFns.int32(value.endTimeMs);
  if (value.field4 !== undefined) result.field4 = tsValueToJsonValueFns.int32(value.field4);
  if (value.mimeType !== undefined) result.mimeType = tsValueToJsonValueFns.string(value.mimeType);
  if (value.initRange !== undefined) result.initRange = encodeJson_2(value.initRange);
  if (value.indexRange !== undefined) result.indexRange = encodeJson_3(value.indexRange);
  if (value.field8 !== undefined) result.field8 = tsValueToJsonValueFns.int32(value.field8);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.int32(value.durationMs);
  if (value.field10 !== undefined) result.field10 = tsValueToJsonValueFns.int32(value.field10);
  return result;
}

export function decodeJson(value: any): $.youtube.FormatInitializationMetadata {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.formatId !== undefined) result.formatId = decodeJson_1(value.formatId);
  if (value.endTimeMs !== undefined) result.endTimeMs = jsonValueToTsValueFns.int32(value.endTimeMs);
  if (value.field4 !== undefined) result.field4 = jsonValueToTsValueFns.int32(value.field4);
  if (value.mimeType !== undefined) result.mimeType = jsonValueToTsValueFns.string(value.mimeType);
  if (value.initRange !== undefined) result.initRange = decodeJson_2(value.initRange);
  if (value.indexRange !== undefined) result.indexRange = decodeJson_3(value.indexRange);
  if (value.field8 !== undefined) result.field8 = jsonValueToTsValueFns.int32(value.field8);
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.int32(value.durationMs);
  if (value.field10 !== undefined) result.field10 = jsonValueToTsValueFns.int32(value.field10);
  return result;
}

export function encodeBinary(value: $.youtube.FormatInitializationMetadata): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.formatId !== undefined) {
    const tsValue = value.formatId;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.endTimeMs !== undefined) {
    const tsValue = value.endTimeMs;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field4 !== undefined) {
    const tsValue = value.field4;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.mimeType !== undefined) {
    const tsValue = value.mimeType;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.initRange !== undefined) {
    const tsValue = value.initRange;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.indexRange !== undefined) {
    const tsValue = value.indexRange;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.field8 !== undefined) {
    const tsValue = value.field8;
    result.push(
      [8, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.durationMs !== undefined) {
    const tsValue = value.durationMs;
    result.push(
      [9, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field10 !== undefined) {
    const tsValue = value.field10;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.FormatInitializationMetadata {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.formatId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.endTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field4 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mimeType = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.initRange = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.indexRange = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field8 = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.durationMs = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field10 = value;
  }
  return result;
}
