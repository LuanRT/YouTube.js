import {
  Type as InnerTubeContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InnerTubeContext.js";
import {
  Type as MdeTitleUpdateRequest,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(MetadataUpdateRequest)/MdeTitleUpdateRequest.js";
import {
  Type as MdeDescriptionUpdateRequest,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(MetadataUpdateRequest)/MdeDescriptionUpdateRequest.js";
import {
  Type as MdePrivacyUpdateRequest,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(MetadataUpdateRequest)/MdePrivacyUpdateRequest.js";
import {
  Type as MdeTagsUpdateRequest,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(MetadataUpdateRequest)/MdeTagsUpdateRequest.js";
import {
  Type as MdeCategoryUpdateRequest,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./(MetadataUpdateRequest)/MdeCategoryUpdateRequest.js";
import {
  Type as MdeLicenseUpdateRequest,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./(MetadataUpdateRequest)/MdeLicenseUpdateRequest.js";
import {
  Type as MdeAgeRestrictionUpdateRequest,
  encodeJson as encodeJson_8,
  decodeJson as decodeJson_8,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
} from "./(MetadataUpdateRequest)/MdeAgeRestrictionUpdateRequest.js";
import {
  Type as MdeVideoStillRequestParams,
  encodeJson as encodeJson_9,
  decodeJson as decodeJson_9,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
} from "./(MetadataUpdateRequest)/MdeVideoStillRequestParams.js";
import {
  Type as MdeMadeForKidsUpdateRequestParams,
  encodeJson as encodeJson_10,
  decodeJson as decodeJson_10,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
} from "./(MetadataUpdateRequest)/MdeMadeForKidsUpdateRequestParams.js";
import {
  Type as MdeRacyRequestParams,
  encodeJson as encodeJson_11,
  decodeJson as decodeJson_11,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
} from "./(MetadataUpdateRequest)/MdeRacyRequestParams.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type MetadataUpdateRequest = {
    context?: InnerTubeContext;
    encryptedVideoId?: string;
    title?: MdeTitleUpdateRequest;
    description?: MdeDescriptionUpdateRequest;
    privacy?: MdePrivacyUpdateRequest;
    tags?: MdeTagsUpdateRequest;
    category?: MdeCategoryUpdateRequest;
    license?: MdeLicenseUpdateRequest;
    ageRestriction?: MdeAgeRestrictionUpdateRequest;
    videoStill?: MdeVideoStillRequestParams;
    madeForKids?: MdeMadeForKidsUpdateRequestParams;
    racy?: MdeRacyRequestParams;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  return {
    context: undefined,
    encryptedVideoId: undefined,
    title: undefined,
    description: undefined,
    privacy: undefined,
    tags: undefined,
    category: undefined,
    license: undefined,
    ageRestriction: undefined,
    videoStill: undefined,
    madeForKids: undefined,
    racy: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.encryptedVideoId !== undefined) result.encryptedVideoId = tsValueToJsonValueFns.string(value.encryptedVideoId);
  if (value.title !== undefined) result.title = encodeJson_2(value.title);
  if (value.description !== undefined) result.description = encodeJson_3(value.description);
  if (value.privacy !== undefined) result.privacy = encodeJson_4(value.privacy);
  if (value.tags !== undefined) result.tags = encodeJson_5(value.tags);
  if (value.category !== undefined) result.category = encodeJson_6(value.category);
  if (value.license !== undefined) result.license = encodeJson_7(value.license);
  if (value.ageRestriction !== undefined) result.ageRestriction = encodeJson_8(value.ageRestriction);
  if (value.videoStill !== undefined) result.videoStill = encodeJson_9(value.videoStill);
  if (value.madeForKids !== undefined) result.madeForKids = encodeJson_10(value.madeForKids);
  if (value.racy !== undefined) result.racy = encodeJson_11(value.racy);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.encryptedVideoId !== undefined) result.encryptedVideoId = jsonValueToTsValueFns.string(value.encryptedVideoId);
  if (value.title !== undefined) result.title = decodeJson_2(value.title);
  if (value.description !== undefined) result.description = decodeJson_3(value.description);
  if (value.privacy !== undefined) result.privacy = decodeJson_4(value.privacy);
  if (value.tags !== undefined) result.tags = decodeJson_5(value.tags);
  if (value.category !== undefined) result.category = decodeJson_6(value.category);
  if (value.license !== undefined) result.license = decodeJson_7(value.license);
  if (value.ageRestriction !== undefined) result.ageRestriction = decodeJson_8(value.ageRestriction);
  if (value.videoStill !== undefined) result.videoStill = decodeJson_9(value.videoStill);
  if (value.madeForKids !== undefined) result.madeForKids = decodeJson_10(value.madeForKids);
  if (value.racy !== undefined) result.racy = decodeJson_11(value.racy);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.encryptedVideoId !== undefined) {
    const tsValue = value.encryptedVideoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.title !== undefined) {
    const tsValue = value.title;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.privacy !== undefined) {
    const tsValue = value.privacy;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.tags !== undefined) {
    const tsValue = value.tags;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.category !== undefined) {
    const tsValue = value.category;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  if (value.license !== undefined) {
    const tsValue = value.license;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  if (value.ageRestriction !== undefined) {
    const tsValue = value.ageRestriction;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_8(tsValue) }],
    );
  }
  if (value.videoStill !== undefined) {
    const tsValue = value.videoStill;
    result.push(
      [20, { type: WireType.LengthDelimited as const, value: encodeBinary_9(tsValue) }],
    );
  }
  if (value.madeForKids !== undefined) {
    const tsValue = value.madeForKids;
    result.push(
      [68, { type: WireType.LengthDelimited as const, value: encodeBinary_10(tsValue) }],
    );
  }
  if (value.racy !== undefined) {
    const tsValue = value.racy;
    result.push(
      [69, { type: WireType.LengthDelimited as const, value: encodeBinary_11(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.encryptedVideoId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.title = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.privacy = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.tags = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.category = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.license = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_8(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.ageRestriction = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_9(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.videoStill = value;
  }
  field: {
    const wireValue = wireFields.get(68);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_10(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.madeForKids = value;
  }
  field: {
    const wireValue = wireFields.get(69);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_11(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.racy = value;
  }
  return result;
}
