import {
  Type as UploadDate,
  name2num,
  num2name,
} from "./(Filters)/UploadDate.js";
import {
  Type as SearchType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(Filters)/SearchType.js";
import {
  Type as Duration,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(Filters)/Duration.js";
import {
  Type as MusicSearchType,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Filters)/MusicSearchType.js";
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
  default as Long,
} from "../../../../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.SearchFilter {
  export type Filters = {
    uploadDate?: UploadDate;
    type?: SearchType;
    duration?: Duration;
    featuresHd?: boolean;
    featuresSubtitles?: boolean;
    featuresCreativeCommons?: boolean;
    features3d?: boolean;
    featuresLive?: boolean;
    featuresPurchased?: boolean;
    features4k?: boolean;
    features360?: boolean;
    musicSearchType?: MusicSearchType;
    featuresLocation?: boolean;
    featuresHdr?: boolean;
    featuresVr180?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.Filters;

export function getDefaultValue(): $.youtube.api.pfiinnertube.SearchFilter.Filters {
  return {
    uploadDate: undefined,
    type: undefined,
    duration: undefined,
    featuresHd: undefined,
    featuresSubtitles: undefined,
    featuresCreativeCommons: undefined,
    features3d: undefined,
    featuresLive: undefined,
    featuresPurchased: undefined,
    features4k: undefined,
    features360: undefined,
    musicSearchType: undefined,
    featuresLocation: undefined,
    featuresHdr: undefined,
    featuresVr180: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.SearchFilter.Filters>): $.youtube.api.pfiinnertube.SearchFilter.Filters {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.SearchFilter.Filters): unknown {
  const result: any = {};
  if (value.uploadDate !== undefined) result.uploadDate = tsValueToJsonValueFns.enum(value.uploadDate);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.duration !== undefined) result.duration = tsValueToJsonValueFns.enum(value.duration);
  if (value.featuresHd !== undefined) result.featuresHd = tsValueToJsonValueFns.bool(value.featuresHd);
  if (value.featuresSubtitles !== undefined) result.featuresSubtitles = tsValueToJsonValueFns.bool(value.featuresSubtitles);
  if (value.featuresCreativeCommons !== undefined) result.featuresCreativeCommons = tsValueToJsonValueFns.bool(value.featuresCreativeCommons);
  if (value.features3d !== undefined) result.features3d = tsValueToJsonValueFns.bool(value.features3d);
  if (value.featuresLive !== undefined) result.featuresLive = tsValueToJsonValueFns.bool(value.featuresLive);
  if (value.featuresPurchased !== undefined) result.featuresPurchased = tsValueToJsonValueFns.bool(value.featuresPurchased);
  if (value.features4k !== undefined) result.features4k = tsValueToJsonValueFns.bool(value.features4k);
  if (value.features360 !== undefined) result.features360 = tsValueToJsonValueFns.bool(value.features360);
  if (value.musicSearchType !== undefined) result.musicSearchType = encodeJson_1(value.musicSearchType);
  if (value.featuresLocation !== undefined) result.featuresLocation = tsValueToJsonValueFns.bool(value.featuresLocation);
  if (value.featuresHdr !== undefined) result.featuresHdr = tsValueToJsonValueFns.bool(value.featuresHdr);
  if (value.featuresVr180 !== undefined) result.featuresVr180 = tsValueToJsonValueFns.bool(value.featuresVr180);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.SearchFilter.Filters {
  const result = getDefaultValue();
  if (value.uploadDate !== undefined) result.uploadDate = jsonValueToTsValueFns.enum(value.uploadDate) as UploadDate;
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as SearchType;
  if (value.duration !== undefined) result.duration = jsonValueToTsValueFns.enum(value.duration) as Duration;
  if (value.featuresHd !== undefined) result.featuresHd = jsonValueToTsValueFns.bool(value.featuresHd);
  if (value.featuresSubtitles !== undefined) result.featuresSubtitles = jsonValueToTsValueFns.bool(value.featuresSubtitles);
  if (value.featuresCreativeCommons !== undefined) result.featuresCreativeCommons = jsonValueToTsValueFns.bool(value.featuresCreativeCommons);
  if (value.features3d !== undefined) result.features3d = jsonValueToTsValueFns.bool(value.features3d);
  if (value.featuresLive !== undefined) result.featuresLive = jsonValueToTsValueFns.bool(value.featuresLive);
  if (value.featuresPurchased !== undefined) result.featuresPurchased = jsonValueToTsValueFns.bool(value.featuresPurchased);
  if (value.features4k !== undefined) result.features4k = jsonValueToTsValueFns.bool(value.features4k);
  if (value.features360 !== undefined) result.features360 = jsonValueToTsValueFns.bool(value.features360);
  if (value.musicSearchType !== undefined) result.musicSearchType = decodeJson_1(value.musicSearchType);
  if (value.featuresLocation !== undefined) result.featuresLocation = jsonValueToTsValueFns.bool(value.featuresLocation);
  if (value.featuresHdr !== undefined) result.featuresHdr = jsonValueToTsValueFns.bool(value.featuresHdr);
  if (value.featuresVr180 !== undefined) result.featuresVr180 = jsonValueToTsValueFns.bool(value.featuresVr180);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.SearchFilter.Filters): Uint8Array {
  const result: WireMessage = [];
  if (value.uploadDate !== undefined) {
    const tsValue = value.uploadDate;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.duration !== undefined) {
    const tsValue = value.duration;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.featuresHd !== undefined) {
    const tsValue = value.featuresHd;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresSubtitles !== undefined) {
    const tsValue = value.featuresSubtitles;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresCreativeCommons !== undefined) {
    const tsValue = value.featuresCreativeCommons;
    result.push(
      [6, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.features3d !== undefined) {
    const tsValue = value.features3d;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresLive !== undefined) {
    const tsValue = value.featuresLive;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresPurchased !== undefined) {
    const tsValue = value.featuresPurchased;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.features4k !== undefined) {
    const tsValue = value.features4k;
    result.push(
      [14, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.features360 !== undefined) {
    const tsValue = value.features360;
    result.push(
      [15, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.musicSearchType !== undefined) {
    const tsValue = value.musicSearchType;
    result.push(
      [17, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.featuresLocation !== undefined) {
    const tsValue = value.featuresLocation;
    result.push(
      [23, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresHdr !== undefined) {
    const tsValue = value.featuresHdr;
    result.push(
      [25, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.featuresVr180 !== undefined) {
    const tsValue = value.featuresVr180;
    result.push(
      [26, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.SearchFilter.Filters {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.uploadDate = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.duration = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresHd = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresSubtitles = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresCreativeCommons = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.features3d = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresLive = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresPurchased = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.features4k = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.features360 = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.musicSearchType = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresLocation = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresHdr = value;
  }
  field: {
    const wireValue = wireFields.get(26);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.featuresVr180 = value;
  }
  return result;
}
