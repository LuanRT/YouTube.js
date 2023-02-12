import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.InnertubePayload.VideoThumbnail {
  export type Thumbnail = {
    imageData: Uint8Array;
  }
}

export type Type = $.youtube.InnertubePayload.VideoThumbnail.Thumbnail;

export function getDefaultValue(): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail {
  return {
    imageData: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.VideoThumbnail.Thumbnail>): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.VideoThumbnail.Thumbnail): unknown {
  const result: any = {};
  if (value.imageData !== undefined) result.imageData = tsValueToJsonValueFns.bytes(value.imageData);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail {
  const result = getDefaultValue();
  if (value.imageData !== undefined) result.imageData = jsonValueToTsValueFns.bytes(value.imageData);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.VideoThumbnail.Thumbnail): Uint8Array {
  const result: WireMessage = [];
  if (value.imageData !== undefined) {
    const tsValue = value.imageData;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.VideoThumbnail.Thumbnail {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.imageData = value;
  }
  return result;
}
