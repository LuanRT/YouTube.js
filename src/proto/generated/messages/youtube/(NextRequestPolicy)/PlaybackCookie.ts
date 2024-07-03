import {
  Type as ItagInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ItagInfo.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
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

export declare namespace $.youtube.NextRequestPolicy {
  export type PlaybackCookie = {
    field1: number;
    field2: number;
    videoItag?: ItagInfo;
    audioItag?: ItagInfo;
  }
}

export type Type = $.youtube.NextRequestPolicy.PlaybackCookie;

export function getDefaultValue(): $.youtube.NextRequestPolicy.PlaybackCookie {
  return {
    field1: 0,
    field2: 0,
    videoItag: undefined,
    audioItag: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.NextRequestPolicy.PlaybackCookie>): $.youtube.NextRequestPolicy.PlaybackCookie {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.NextRequestPolicy.PlaybackCookie): unknown {
  const result: any = {};
  if (value.field1 !== undefined) result.field1 = tsValueToJsonValueFns.int32(value.field1);
  if (value.field2 !== undefined) result.field2 = tsValueToJsonValueFns.int32(value.field2);
  if (value.videoItag !== undefined) result.videoItag = encodeJson_1(value.videoItag);
  if (value.audioItag !== undefined) result.audioItag = encodeJson_1(value.audioItag);
  return result;
}

export function decodeJson(value: any): $.youtube.NextRequestPolicy.PlaybackCookie {
  const result = getDefaultValue();
  if (value.field1 !== undefined) result.field1 = jsonValueToTsValueFns.int32(value.field1);
  if (value.field2 !== undefined) result.field2 = jsonValueToTsValueFns.int32(value.field2);
  if (value.videoItag !== undefined) result.videoItag = decodeJson_1(value.videoItag);
  if (value.audioItag !== undefined) result.audioItag = decodeJson_1(value.audioItag);
  return result;
}

export function encodeBinary(value: $.youtube.NextRequestPolicy.PlaybackCookie): Uint8Array {
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
  if (value.videoItag !== undefined) {
    const tsValue = value.videoItag;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.audioItag !== undefined) {
    const tsValue = value.audioItag;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.NextRequestPolicy.PlaybackCookie {
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
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.videoItag = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.audioItag = value;
  }
  return result;
}
