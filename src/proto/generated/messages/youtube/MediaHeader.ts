import {
  Type as ItagData,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(MediaHeader)/ItagData.js";
import {
  Type as TimeRange,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(MediaHeader)/TimeRange.js";
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
  export type MediaHeader = {
    field1: number;
    videoId: string;
    itag: number;
    lmt: string;
    startDataRange: number;
    field8: number;
    field9: number;
    field10?: number;
    startMs?: number;
    durationMs?: number;
    itagData?: ItagData;
    contentLength: number;
    timeRange?: TimeRange;
  }
}

export type Type = $.youtube.MediaHeader;

export function getDefaultValue(): $.youtube.MediaHeader {
  return {
    field1: 0,
    videoId: "",
    itag: 0,
    lmt: "0",
    startDataRange: 0,
    field8: 0,
    field9: 0,
    field10: undefined,
    startMs: undefined,
    durationMs: undefined,
    itagData: undefined,
    contentLength: 0,
    timeRange: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.MediaHeader>): $.youtube.MediaHeader {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MediaHeader): unknown {
  const result: any = {};
  if (value.field1 !== undefined) result.field1 = tsValueToJsonValueFns.int32(value.field1);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.itag !== undefined) result.itag = tsValueToJsonValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = tsValueToJsonValueFns.int64(value.lmt);
  if (value.startDataRange !== undefined) result.startDataRange = tsValueToJsonValueFns.int32(value.startDataRange);
  if (value.field8 !== undefined) result.field8 = tsValueToJsonValueFns.int32(value.field8);
  if (value.field9 !== undefined) result.field9 = tsValueToJsonValueFns.int32(value.field9);
  if (value.field10 !== undefined) result.field10 = tsValueToJsonValueFns.int32(value.field10);
  if (value.startMs !== undefined) result.startMs = tsValueToJsonValueFns.int32(value.startMs);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.int32(value.durationMs);
  if (value.itagData !== undefined) result.itagData = encodeJson_1(value.itagData);
  if (value.contentLength !== undefined) result.contentLength = tsValueToJsonValueFns.int32(value.contentLength);
  if (value.timeRange !== undefined) result.timeRange = encodeJson_2(value.timeRange);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaHeader {
  const result = getDefaultValue();
  if (value.field1 !== undefined) result.field1 = jsonValueToTsValueFns.int32(value.field1);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.itag !== undefined) result.itag = jsonValueToTsValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = jsonValueToTsValueFns.int64(value.lmt);
  if (value.startDataRange !== undefined) result.startDataRange = jsonValueToTsValueFns.int32(value.startDataRange);
  if (value.field8 !== undefined) result.field8 = jsonValueToTsValueFns.int32(value.field8);
  if (value.field9 !== undefined) result.field9 = jsonValueToTsValueFns.int32(value.field9);
  if (value.field10 !== undefined) result.field10 = jsonValueToTsValueFns.int32(value.field10);
  if (value.startMs !== undefined) result.startMs = jsonValueToTsValueFns.int32(value.startMs);
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.int32(value.durationMs);
  if (value.itagData !== undefined) result.itagData = decodeJson_1(value.itagData);
  if (value.contentLength !== undefined) result.contentLength = jsonValueToTsValueFns.int32(value.contentLength);
  if (value.timeRange !== undefined) result.timeRange = decodeJson_2(value.timeRange);
  return result;
}

export function encodeBinary(value: $.youtube.MediaHeader): Uint8Array {
  const result: WireMessage = [];
  if (value.field1 !== undefined) {
    const tsValue = value.field1;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.itag !== undefined) {
    const tsValue = value.itag;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.lmt !== undefined) {
    const tsValue = value.lmt;
    result.push(
      [4, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.startDataRange !== undefined) {
    const tsValue = value.startDataRange;
    result.push(
      [6, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field8 !== undefined) {
    const tsValue = value.field8;
    result.push(
      [8, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field9 !== undefined) {
    const tsValue = value.field9;
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
  if (value.startMs !== undefined) {
    const tsValue = value.startMs;
    result.push(
      [11, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.durationMs !== undefined) {
    const tsValue = value.durationMs;
    result.push(
      [12, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.itagData !== undefined) {
    const tsValue = value.itagData;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.contentLength !== undefined) {
    const tsValue = value.contentLength;
    result.push(
      [14, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.timeRange !== undefined) {
    const tsValue = value.timeRange;
    result.push(
      [15, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.MediaHeader {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.itag = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.lmt = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.startDataRange = value;
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
    result.field9 = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field10 = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.startMs = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.durationMs = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.itagData = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.contentLength = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timeRange = value;
  }
  return result;
}
