import {
  Type as VideoFormatCapability,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(MediaCapabilities)/VideoFormatCapability.js";
import {
  Type as AudioFormatCapability,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(MediaCapabilities)/AudioFormatCapability.js";
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

export declare namespace $.youtube.MediaInfo {
  export type MediaCapabilities = {
    videoFormatCapabilities: VideoFormatCapability[];
    audioFormatCapabilities: AudioFormatCapability[];
    hdrModeBitmask?: number;
  }
}

export type Type = $.youtube.MediaInfo.MediaCapabilities;

export function getDefaultValue(): $.youtube.MediaInfo.MediaCapabilities {
  return {
    videoFormatCapabilities: [],
    audioFormatCapabilities: [],
    hdrModeBitmask: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.MediaInfo.MediaCapabilities>): $.youtube.MediaInfo.MediaCapabilities {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MediaInfo.MediaCapabilities): unknown {
  const result: any = {};
  result.videoFormatCapabilities = value.videoFormatCapabilities.map(value => encodeJson_1(value));
  result.audioFormatCapabilities = value.audioFormatCapabilities.map(value => encodeJson_2(value));
  if (value.hdrModeBitmask !== undefined) result.hdrModeBitmask = tsValueToJsonValueFns.int32(value.hdrModeBitmask);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaInfo.MediaCapabilities {
  const result = getDefaultValue();
  result.videoFormatCapabilities = value.videoFormatCapabilities?.map((value: any) => decodeJson_1(value)) ?? [];
  result.audioFormatCapabilities = value.audioFormatCapabilities?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.hdrModeBitmask !== undefined) result.hdrModeBitmask = jsonValueToTsValueFns.int32(value.hdrModeBitmask);
  return result;
}

export function encodeBinary(value: $.youtube.MediaInfo.MediaCapabilities): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.videoFormatCapabilities) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.audioFormatCapabilities) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.hdrModeBitmask !== undefined) {
    const tsValue = value.hdrModeBitmask;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.MediaInfo.MediaCapabilities {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.videoFormatCapabilities = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.audioFormatCapabilities = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.hdrModeBitmask = value;
  }
  return result;
}
