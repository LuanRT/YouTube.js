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

export declare namespace $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  export type CustomThumbnailImage = {
    rawBytes?: Uint8Array;
    dataUri?: string;
    frameTimestampUs?: string;
    isVertical?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage {
  return {
    rawBytes: undefined,
    dataUri: undefined,
    frameTimestampUs: undefined,
    isVertical: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage): unknown {
  const result: any = {};
  if (value.rawBytes !== undefined) result.rawBytes = tsValueToJsonValueFns.bytes(value.rawBytes);
  if (value.dataUri !== undefined) result.dataUri = tsValueToJsonValueFns.string(value.dataUri);
  if (value.frameTimestampUs !== undefined) result.frameTimestampUs = tsValueToJsonValueFns.int64(value.frameTimestampUs);
  if (value.isVertical !== undefined) result.isVertical = tsValueToJsonValueFns.bool(value.isVertical);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage {
  const result = getDefaultValue();
  if (value.rawBytes !== undefined) result.rawBytes = jsonValueToTsValueFns.bytes(value.rawBytes);
  if (value.dataUri !== undefined) result.dataUri = jsonValueToTsValueFns.string(value.dataUri);
  if (value.frameTimestampUs !== undefined) result.frameTimestampUs = jsonValueToTsValueFns.int64(value.frameTimestampUs);
  if (value.isVertical !== undefined) result.isVertical = jsonValueToTsValueFns.bool(value.isVertical);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage): Uint8Array {
  const result: WireMessage = [];
  if (value.rawBytes !== undefined) {
    const tsValue = value.rawBytes;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.dataUri !== undefined) {
    const tsValue = value.dataUri;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.frameTimestampUs !== undefined) {
    const tsValue = value.frameTimestampUs;
    result.push(
      [4, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.isVertical !== undefined) {
    const tsValue = value.isVertical;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.CustomThumbnailImage {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.rawBytes = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.dataUri = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.frameTimestampUs = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isVertical = value;
  }
  return result;
}
