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

export declare namespace $.youtube.MediaInfo.MediaCapabilities {
  export type VideoFormatCapability = {
    videoCodec: number;
    maxHeight: number;
    maxWidth: number;
    maxFramerate: number;
    maxBitrateBps: number;
    is10BitSupported: boolean;
  }
}

export type Type = $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability;

export function getDefaultValue(): $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability {
  return {
    videoCodec: 0,
    maxHeight: 0,
    maxWidth: 0,
    maxFramerate: 0,
    maxBitrateBps: 0,
    is10BitSupported: false,
  };
}

export function createValue(partialValue: Partial<$.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability>): $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability): unknown {
  const result: any = {};
  if (value.videoCodec !== undefined) result.videoCodec = tsValueToJsonValueFns.int32(value.videoCodec);
  if (value.maxHeight !== undefined) result.maxHeight = tsValueToJsonValueFns.int32(value.maxHeight);
  if (value.maxWidth !== undefined) result.maxWidth = tsValueToJsonValueFns.int32(value.maxWidth);
  if (value.maxFramerate !== undefined) result.maxFramerate = tsValueToJsonValueFns.int32(value.maxFramerate);
  if (value.maxBitrateBps !== undefined) result.maxBitrateBps = tsValueToJsonValueFns.int32(value.maxBitrateBps);
  if (value.is10BitSupported !== undefined) result.is10BitSupported = tsValueToJsonValueFns.bool(value.is10BitSupported);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability {
  const result = getDefaultValue();
  if (value.videoCodec !== undefined) result.videoCodec = jsonValueToTsValueFns.int32(value.videoCodec);
  if (value.maxHeight !== undefined) result.maxHeight = jsonValueToTsValueFns.int32(value.maxHeight);
  if (value.maxWidth !== undefined) result.maxWidth = jsonValueToTsValueFns.int32(value.maxWidth);
  if (value.maxFramerate !== undefined) result.maxFramerate = jsonValueToTsValueFns.int32(value.maxFramerate);
  if (value.maxBitrateBps !== undefined) result.maxBitrateBps = jsonValueToTsValueFns.int32(value.maxBitrateBps);
  if (value.is10BitSupported !== undefined) result.is10BitSupported = jsonValueToTsValueFns.bool(value.is10BitSupported);
  return result;
}

export function encodeBinary(value: $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability): Uint8Array {
  const result: WireMessage = [];
  if (value.videoCodec !== undefined) {
    const tsValue = value.videoCodec;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.maxHeight !== undefined) {
    const tsValue = value.maxHeight;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.maxWidth !== undefined) {
    const tsValue = value.maxWidth;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.maxFramerate !== undefined) {
    const tsValue = value.maxFramerate;
    result.push(
      [11, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.maxBitrateBps !== undefined) {
    const tsValue = value.maxBitrateBps;
    result.push(
      [12, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.is10BitSupported !== undefined) {
    const tsValue = value.is10BitSupported;
    result.push(
      [15, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.MediaInfo.MediaCapabilities.VideoFormatCapability {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.videoCodec = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.maxHeight = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.maxWidth = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.maxFramerate = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.maxBitrateBps = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.is10BitSupported = value;
  }
  return result;
}
