import {
  Type as PlaybackCookie,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PlaybackCookie.js";
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
  export type NextRequestPolicy = {
    targetAudioReadaheadMs: number;
    targetVideoReadaheadMs: number;
    backoffTimeMs?: number;
    playbackCookie?: PlaybackCookie;
    videoId?: string;
  }
}

export type Type = $.youtube.NextRequestPolicy;

export function getDefaultValue(): $.youtube.NextRequestPolicy {
  return {
    targetAudioReadaheadMs: 0,
    targetVideoReadaheadMs: 0,
    backoffTimeMs: undefined,
    playbackCookie: undefined,
    videoId: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.NextRequestPolicy>): $.youtube.NextRequestPolicy {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.NextRequestPolicy): unknown {
  const result: any = {};
  if (value.targetAudioReadaheadMs !== undefined) result.targetAudioReadaheadMs = tsValueToJsonValueFns.int32(value.targetAudioReadaheadMs);
  if (value.targetVideoReadaheadMs !== undefined) result.targetVideoReadaheadMs = tsValueToJsonValueFns.int32(value.targetVideoReadaheadMs);
  if (value.backoffTimeMs !== undefined) result.backoffTimeMs = tsValueToJsonValueFns.int32(value.backoffTimeMs);
  if (value.playbackCookie !== undefined) result.playbackCookie = encodeJson_1(value.playbackCookie);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  return result;
}

export function decodeJson(value: any): $.youtube.NextRequestPolicy {
  const result = getDefaultValue();
  if (value.targetAudioReadaheadMs !== undefined) result.targetAudioReadaheadMs = jsonValueToTsValueFns.int32(value.targetAudioReadaheadMs);
  if (value.targetVideoReadaheadMs !== undefined) result.targetVideoReadaheadMs = jsonValueToTsValueFns.int32(value.targetVideoReadaheadMs);
  if (value.backoffTimeMs !== undefined) result.backoffTimeMs = jsonValueToTsValueFns.int32(value.backoffTimeMs);
  if (value.playbackCookie !== undefined) result.playbackCookie = decodeJson_1(value.playbackCookie);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  return result;
}

export function encodeBinary(value: $.youtube.NextRequestPolicy): Uint8Array {
  const result: WireMessage = [];
  if (value.targetAudioReadaheadMs !== undefined) {
    const tsValue = value.targetAudioReadaheadMs;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.targetVideoReadaheadMs !== undefined) {
    const tsValue = value.targetVideoReadaheadMs;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.backoffTimeMs !== undefined) {
    const tsValue = value.backoffTimeMs;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.playbackCookie !== undefined) {
    const tsValue = value.playbackCookie;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.NextRequestPolicy {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.targetAudioReadaheadMs = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.targetVideoReadaheadMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.backoffTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.playbackCookie = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  return result;
}
