import {
  Type as ContentPlaybackContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(PlaybackContext)/ContentPlaybackContext.js";
import {
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type PlaybackContext = {
    contentPlaybackContext?: ContentPlaybackContext;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlaybackContext;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlaybackContext {
  return {
    contentPlaybackContext: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlaybackContext>): $.youtube.api.pfiinnertube.PlaybackContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlaybackContext): unknown {
  const result: any = {};
  if (value.contentPlaybackContext !== undefined) result.contentPlaybackContext = encodeJson_1(value.contentPlaybackContext);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlaybackContext {
  const result = getDefaultValue();
  if (value.contentPlaybackContext !== undefined) result.contentPlaybackContext = decodeJson_1(value.contentPlaybackContext);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlaybackContext): Uint8Array {
  const result: WireMessage = [];
  if (value.contentPlaybackContext !== undefined) {
    const tsValue = value.contentPlaybackContext;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlaybackContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentPlaybackContext = value;
  }
  return result;
}
