import {
  Type as Compression,
  name2num,
  num2name,
} from "./(MediaHeader)/Compression.js";
import {
  Type as FormatId,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FormatId.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type MediaHeader = {
    headerId?: number;
    videoId?: string;
    itag?: number;
    lmt?: string;
    xtags?: string;
    startDataRange?: number;
    compression?: Compression;
    isInitSeg?: boolean;
    sequenceNumber?: string;
    field10?: string;
    startMs?: number;
    durationMs?: number;
    formatId?: FormatId;
    contentLength?: string;
    timeRange?: TimeRange;
  }
}

export type Type = $.youtube.MediaHeader;

export function getDefaultValue(): $.youtube.MediaHeader {
  return {
    headerId: undefined,
    videoId: undefined,
    itag: undefined,
    lmt: undefined,
    xtags: undefined,
    startDataRange: undefined,
    compression: undefined,
    isInitSeg: undefined,
    sequenceNumber: undefined,
    field10: undefined,
    startMs: undefined,
    durationMs: undefined,
    formatId: undefined,
    contentLength: undefined,
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
  if (value.headerId !== undefined) result.headerId = tsValueToJsonValueFns.int32(value.headerId);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.itag !== undefined) result.itag = tsValueToJsonValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = tsValueToJsonValueFns.uint64(value.lmt);
  if (value.xtags !== undefined) result.xtags = tsValueToJsonValueFns.string(value.xtags);
  if (value.startDataRange !== undefined) result.startDataRange = tsValueToJsonValueFns.int32(value.startDataRange);
  if (value.compression !== undefined) result.compression = tsValueToJsonValueFns.enum(value.compression);
  if (value.isInitSeg !== undefined) result.isInitSeg = tsValueToJsonValueFns.bool(value.isInitSeg);
  if (value.sequenceNumber !== undefined) result.sequenceNumber = tsValueToJsonValueFns.int64(value.sequenceNumber);
  if (value.field10 !== undefined) result.field10 = tsValueToJsonValueFns.int64(value.field10);
  if (value.startMs !== undefined) result.startMs = tsValueToJsonValueFns.int32(value.startMs);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.int32(value.durationMs);
  if (value.formatId !== undefined) result.formatId = encodeJson_1(value.formatId);
  if (value.contentLength !== undefined) result.contentLength = tsValueToJsonValueFns.int64(value.contentLength);
  if (value.timeRange !== undefined) result.timeRange = encodeJson_2(value.timeRange);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaHeader {
  const result = getDefaultValue();
  if (value.headerId !== undefined) result.headerId = jsonValueToTsValueFns.int32(value.headerId);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.itag !== undefined) result.itag = jsonValueToTsValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = jsonValueToTsValueFns.uint64(value.lmt);
  if (value.xtags !== undefined) result.xtags = jsonValueToTsValueFns.string(value.xtags);
  if (value.startDataRange !== undefined) result.startDataRange = jsonValueToTsValueFns.int32(value.startDataRange);
  if (value.compression !== undefined) result.compression = jsonValueToTsValueFns.enum(value.compression) as Compression;
  if (value.isInitSeg !== undefined) result.isInitSeg = jsonValueToTsValueFns.bool(value.isInitSeg);
  if (value.sequenceNumber !== undefined) result.sequenceNumber = jsonValueToTsValueFns.int64(value.sequenceNumber);
  if (value.field10 !== undefined) result.field10 = jsonValueToTsValueFns.int64(value.field10);
  if (value.startMs !== undefined) result.startMs = jsonValueToTsValueFns.int32(value.startMs);
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.int32(value.durationMs);
  if (value.formatId !== undefined) result.formatId = decodeJson_1(value.formatId);
  if (value.contentLength !== undefined) result.contentLength = jsonValueToTsValueFns.int64(value.contentLength);
  if (value.timeRange !== undefined) result.timeRange = decodeJson_2(value.timeRange);
  return result;
}

export function encodeBinary(value: $.youtube.MediaHeader): Uint8Array {
  const result: WireMessage = [];
  if (value.headerId !== undefined) {
    const tsValue = value.headerId;
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
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.xtags !== undefined) {
    const tsValue = value.xtags;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.startDataRange !== undefined) {
    const tsValue = value.startDataRange;
    result.push(
      [6, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.compression !== undefined) {
    const tsValue = value.compression;
    result.push(
      [7, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.isInitSeg !== undefined) {
    const tsValue = value.isInitSeg;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.sequenceNumber !== undefined) {
    const tsValue = value.sequenceNumber;
    result.push(
      [9, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.field10 !== undefined) {
    const tsValue = value.field10;
    result.push(
      [10, tsValueToWireValueFns.int64(tsValue)],
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
  if (value.formatId !== undefined) {
    const tsValue = value.formatId;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.contentLength !== undefined) {
    const tsValue = value.contentLength;
    result.push(
      [14, tsValueToWireValueFns.int64(tsValue)],
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
    result.headerId = value;
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
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.lmt = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.xtags = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.startDataRange = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.compression = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isInitSeg = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.sequenceNumber = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
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
    result.formatId = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
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
