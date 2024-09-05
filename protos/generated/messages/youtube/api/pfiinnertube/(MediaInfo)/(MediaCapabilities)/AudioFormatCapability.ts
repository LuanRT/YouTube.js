import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities {
  export type AudioFormatCapability = {
    audioCodec?: number;
    numChannels?: number;
    maxBitrateBps?: number;
    spatialCapabilityBitmask?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability {
  return {
    audioCodec: undefined,
    numChannels: undefined,
    maxBitrateBps: undefined,
    spatialCapabilityBitmask: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability>): $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability): unknown {
  const result: any = {};
  if (value.audioCodec !== undefined) result.audioCodec = tsValueToJsonValueFns.int32(value.audioCodec);
  if (value.numChannels !== undefined) result.numChannels = tsValueToJsonValueFns.int32(value.numChannels);
  if (value.maxBitrateBps !== undefined) result.maxBitrateBps = tsValueToJsonValueFns.int32(value.maxBitrateBps);
  if (value.spatialCapabilityBitmask !== undefined) result.spatialCapabilityBitmask = tsValueToJsonValueFns.int32(value.spatialCapabilityBitmask);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability {
  const result = getDefaultValue();
  if (value.audioCodec !== undefined) result.audioCodec = jsonValueToTsValueFns.int32(value.audioCodec);
  if (value.numChannels !== undefined) result.numChannels = jsonValueToTsValueFns.int32(value.numChannels);
  if (value.maxBitrateBps !== undefined) result.maxBitrateBps = jsonValueToTsValueFns.int32(value.maxBitrateBps);
  if (value.spatialCapabilityBitmask !== undefined) result.spatialCapabilityBitmask = jsonValueToTsValueFns.int32(value.spatialCapabilityBitmask);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability): Uint8Array {
  const result: WireMessage = [];
  if (value.audioCodec !== undefined) {
    const tsValue = value.audioCodec;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.numChannels !== undefined) {
    const tsValue = value.numChannels;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.maxBitrateBps !== undefined) {
    const tsValue = value.maxBitrateBps;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.spatialCapabilityBitmask !== undefined) {
    const tsValue = value.spatialCapabilityBitmask;
    result.push(
      [6, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MediaInfo.MediaCapabilities.AudioFormatCapability {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.audioCodec = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.numChannels = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.maxBitrateBps = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.spatialCapabilityBitmask = value;
  }
  return result;
}
