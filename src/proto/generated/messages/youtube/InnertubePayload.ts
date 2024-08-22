import {
  Type as Context,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(InnertubePayload)/Context.js";
import {
  Type as Title,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(InnertubePayload)/Title.js";
import {
  Type as Description,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(InnertubePayload)/Description.js";
import {
  Type as Tags,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(InnertubePayload)/Tags.js";
import {
  Type as Category,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(InnertubePayload)/Category.js";
import {
  Type as License,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./(InnertubePayload)/License.js";
import {
  Type as VideoThumbnail,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./(InnertubePayload)/VideoThumbnail.js";
import {
  Type as Privacy,
  encodeJson as encodeJson_8,
  decodeJson as decodeJson_8,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
} from "./(InnertubePayload)/Privacy.js";
import {
  Type as MadeForKids,
  encodeJson as encodeJson_9,
  decodeJson as decodeJson_9,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
} from "./(InnertubePayload)/MadeForKids.js";
import {
  Type as AgeRestricted,
  encodeJson as encodeJson_10,
  decodeJson as decodeJson_10,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
} from "./(InnertubePayload)/AgeRestricted.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type InnertubePayload = {
    context?: Context;
    videoId?: string;
    title?: Title;
    description?: Description;
    tags?: Tags;
    category?: Category;
    license?: License;
    videoThumbnail?: VideoThumbnail;
    poToken?: Uint8Array;
    privacy?: Privacy;
    madeForKids?: MadeForKids;
    ageRestricted?: AgeRestricted;
  }
}

export type Type = $.youtube.InnertubePayload;

export function getDefaultValue(): $.youtube.InnertubePayload {
  return {
    context: undefined,
    videoId: undefined,
    title: undefined,
    description: undefined,
    tags: undefined,
    category: undefined,
    license: undefined,
    videoThumbnail: undefined,
    poToken: undefined,
    privacy: undefined,
    madeForKids: undefined,
    ageRestricted: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload>): $.youtube.InnertubePayload {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.title !== undefined) result.title = encodeJson_2(value.title);
  if (value.description !== undefined) result.description = encodeJson_3(value.description);
  if (value.tags !== undefined) result.tags = encodeJson_4(value.tags);
  if (value.category !== undefined) result.category = encodeJson_5(value.category);
  if (value.license !== undefined) result.license = encodeJson_6(value.license);
  if (value.videoThumbnail !== undefined) result.videoThumbnail = encodeJson_7(value.videoThumbnail);
  if (value.poToken !== undefined) result.poToken = tsValueToJsonValueFns.bytes(value.poToken);
  if (value.privacy !== undefined) result.privacy = encodeJson_8(value.privacy);
  if (value.madeForKids !== undefined) result.madeForKids = encodeJson_9(value.madeForKids);
  if (value.ageRestricted !== undefined) result.ageRestricted = encodeJson_10(value.ageRestricted);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.title !== undefined) result.title = decodeJson_2(value.title);
  if (value.description !== undefined) result.description = decodeJson_3(value.description);
  if (value.tags !== undefined) result.tags = decodeJson_4(value.tags);
  if (value.category !== undefined) result.category = decodeJson_5(value.category);
  if (value.license !== undefined) result.license = decodeJson_6(value.license);
  if (value.videoThumbnail !== undefined) result.videoThumbnail = decodeJson_7(value.videoThumbnail);
  if (value.poToken !== undefined) result.poToken = jsonValueToTsValueFns.bytes(value.poToken);
  if (value.privacy !== undefined) result.privacy = decodeJson_8(value.privacy);
  if (value.madeForKids !== undefined) result.madeForKids = decodeJson_9(value.madeForKids);
  if (value.ageRestricted !== undefined) result.ageRestricted = decodeJson_10(value.ageRestricted);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
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
  if (value.tags !== undefined) {
    const tsValue = value.tags;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.category !== undefined) {
    const tsValue = value.category;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.license !== undefined) {
    const tsValue = value.license;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  if (value.videoThumbnail !== undefined) {
    const tsValue = value.videoThumbnail;
    result.push(
      [20, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  if (value.poToken !== undefined) {
    const tsValue = value.poToken;
    result.push(
      [27, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.privacy !== undefined) {
    const tsValue = value.privacy;
    result.push(
      [38, { type: WireType.LengthDelimited as const, value: encodeBinary_8(tsValue) }],
    );
  }
  if (value.madeForKids !== undefined) {
    const tsValue = value.madeForKids;
    result.push(
      [68, { type: WireType.LengthDelimited as const, value: encodeBinary_9(tsValue) }],
    );
  }
  if (value.ageRestricted !== undefined) {
    const tsValue = value.ageRestricted;
    result.push(
      [69, { type: WireType.LengthDelimited as const, value: encodeBinary_10(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload {
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
    result.videoId = value;
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
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.tags = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.category = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.license = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.videoThumbnail = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.poToken = value;
  }
  field: {
    const wireValue = wireFields.get(38);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_8(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.privacy = value;
  }
  field: {
    const wireValue = wireFields.get(68);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_9(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.madeForKids = value;
  }
  field: {
    const wireValue = wireFields.get(69);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_10(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.ageRestricted = value;
  }
  return result;
}
