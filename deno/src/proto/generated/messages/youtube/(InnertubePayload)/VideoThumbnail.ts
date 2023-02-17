import {
  Type as Thumbnail,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(VideoThumbnail)/Thumbnail.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.InnertubePayload {
  export type VideoThumbnail = {
    type: number;
    thumbnail?: Thumbnail;
  }
}

export type Type = $.youtube.InnertubePayload.VideoThumbnail;

export function getDefaultValue(): $.youtube.InnertubePayload.VideoThumbnail {
  return {
    type: 0,
    thumbnail: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.VideoThumbnail>): $.youtube.InnertubePayload.VideoThumbnail {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.VideoThumbnail): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  if (value.thumbnail !== undefined) result.thumbnail = encodeJson_1(value.thumbnail);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.VideoThumbnail {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  if (value.thumbnail !== undefined) result.thumbnail = decodeJson_1(value.thumbnail);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.VideoThumbnail): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.thumbnail !== undefined) {
    const tsValue = value.thumbnail;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.VideoThumbnail {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.thumbnail = value;
  }
  return result;
}
