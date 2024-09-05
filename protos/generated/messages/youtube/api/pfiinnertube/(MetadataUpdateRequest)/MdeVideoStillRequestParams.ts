import {
  Type as CustomThumbnailImage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(MdeVideoStillRequestParams)/CustomThumbnailImage.js";
import {
  Type as ThumbnailExperimentImageData,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(MdeVideoStillRequestParams)/ThumbnailExperimentImageData.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  export type MdeVideoStillRequestParams = {
    operation?: number;
    newStillId?: number;
    image?: CustomThumbnailImage;
    testImage?: CustomThumbnailImage;
    experimentImage: ThumbnailExperimentImageData[];
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  return {
    operation: undefined,
    newStillId: undefined,
    image: undefined,
    testImage: undefined,
    experimentImage: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams): unknown {
  const result: any = {};
  if (value.operation !== undefined) result.operation = tsValueToJsonValueFns.int32(value.operation);
  if (value.newStillId !== undefined) result.newStillId = tsValueToJsonValueFns.int32(value.newStillId);
  if (value.image !== undefined) result.image = encodeJson_1(value.image);
  if (value.testImage !== undefined) result.testImage = encodeJson_1(value.testImage);
  result.experimentImage = value.experimentImage.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  const result = getDefaultValue();
  if (value.operation !== undefined) result.operation = jsonValueToTsValueFns.int32(value.operation);
  if (value.newStillId !== undefined) result.newStillId = jsonValueToTsValueFns.int32(value.newStillId);
  if (value.image !== undefined) result.image = decodeJson_1(value.image);
  if (value.testImage !== undefined) result.testImage = decodeJson_1(value.testImage);
  result.experimentImage = value.experimentImage?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams): Uint8Array {
  const result: WireMessage = [];
  if (value.operation !== undefined) {
    const tsValue = value.operation;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.newStillId !== undefined) {
    const tsValue = value.newStillId;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.image !== undefined) {
    const tsValue = value.image;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.testImage !== undefined) {
    const tsValue = value.testImage;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.experimentImage) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeVideoStillRequestParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.operation = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.newStillId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.image = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.testImage = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.experimentImage = value as any;
  }
  return result;
}
