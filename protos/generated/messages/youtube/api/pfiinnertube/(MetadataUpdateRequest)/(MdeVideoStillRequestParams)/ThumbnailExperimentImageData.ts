import {
  Type as CustomThumbnailImage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./CustomThumbnailImage.js";
import {
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  export type ThumbnailExperimentImageData = {
    image?: CustomThumbnailImage;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData {
  return {
    image: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData): unknown {
  const result: any = {};
  if (value.image !== undefined) result.image = encodeJson_1(value.image);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData {
  const result = getDefaultValue();
  if (value.image !== undefined) result.image = decodeJson_1(value.image);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData): Uint8Array {
  const result: WireMessage = [];
  if (value.image !== undefined) {
    const tsValue = value.image;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams.ThumbnailExperimentImageData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.image = value;
  }
  return result;
}
