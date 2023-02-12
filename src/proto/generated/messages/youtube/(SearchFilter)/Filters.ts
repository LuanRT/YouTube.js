import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.youtube.SearchFilter {
  export type Filters = {
    uploadDate?: number;
    type?: number;
    duration?: number;
    featuresHd?: number;
    featuresSubtitles?: number;
    featuresCreativeCommons?: number;
    features3d?: number;
    featuresLive?: number;
    featuresPurchased?: number;
    features4k?: number;
    features360?: number;
    featuresLocation?: number;
    featuresHdr?: number;
    featuresVr180?: number;
  }
}

export type Type = $.youtube.SearchFilter.Filters;

export function getDefaultValue(): $.youtube.SearchFilter.Filters {
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
    featuresLocation: undefined,
    featuresHdr: undefined,
    featuresVr180: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.SearchFilter.Filters>): $.youtube.SearchFilter.Filters {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SearchFilter.Filters): unknown {
  const result: any = {};
  if (value.uploadDate !== undefined) result.uploadDate = tsValueToJsonValueFns.int32(value.uploadDate);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  if (value.duration !== undefined) result.duration = tsValueToJsonValueFns.int32(value.duration);
  if (value.featuresHd !== undefined) result.featuresHd = tsValueToJsonValueFns.int32(value.featuresHd);
  if (value.featuresSubtitles !== undefined) result.featuresSubtitles = tsValueToJsonValueFns.int32(value.featuresSubtitles);
  if (value.featuresCreativeCommons !== undefined) result.featuresCreativeCommons = tsValueToJsonValueFns.int32(value.featuresCreativeCommons);
  if (value.features3d !== undefined) result.features3d = tsValueToJsonValueFns.int32(value.features3d);
  if (value.featuresLive !== undefined) result.featuresLive = tsValueToJsonValueFns.int32(value.featuresLive);
  if (value.featuresPurchased !== undefined) result.featuresPurchased = tsValueToJsonValueFns.int32(value.featuresPurchased);
  if (value.features4k !== undefined) result.features4k = tsValueToJsonValueFns.int32(value.features4k);
  if (value.features360 !== undefined) result.features360 = tsValueToJsonValueFns.int32(value.features360);
  if (value.featuresLocation !== undefined) result.featuresLocation = tsValueToJsonValueFns.int32(value.featuresLocation);
  if (value.featuresHdr !== undefined) result.featuresHdr = tsValueToJsonValueFns.int32(value.featuresHdr);
  if (value.featuresVr180 !== undefined) result.featuresVr180 = tsValueToJsonValueFns.int32(value.featuresVr180);
  return result;
}

export function decodeJson(value: any): $.youtube.SearchFilter.Filters {
  const result = getDefaultValue();
  if (value.uploadDate !== undefined) result.uploadDate = jsonValueToTsValueFns.int32(value.uploadDate);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  if (value.duration !== undefined) result.duration = jsonValueToTsValueFns.int32(value.duration);
  if (value.featuresHd !== undefined) result.featuresHd = jsonValueToTsValueFns.int32(value.featuresHd);
  if (value.featuresSubtitles !== undefined) result.featuresSubtitles = jsonValueToTsValueFns.int32(value.featuresSubtitles);
  if (value.featuresCreativeCommons !== undefined) result.featuresCreativeCommons = jsonValueToTsValueFns.int32(value.featuresCreativeCommons);
  if (value.features3d !== undefined) result.features3d = jsonValueToTsValueFns.int32(value.features3d);
  if (value.featuresLive !== undefined) result.featuresLive = jsonValueToTsValueFns.int32(value.featuresLive);
  if (value.featuresPurchased !== undefined) result.featuresPurchased = jsonValueToTsValueFns.int32(value.featuresPurchased);
  if (value.features4k !== undefined) result.features4k = jsonValueToTsValueFns.int32(value.features4k);
  if (value.features360 !== undefined) result.features360 = jsonValueToTsValueFns.int32(value.features360);
  if (value.featuresLocation !== undefined) result.featuresLocation = jsonValueToTsValueFns.int32(value.featuresLocation);
  if (value.featuresHdr !== undefined) result.featuresHdr = jsonValueToTsValueFns.int32(value.featuresHdr);
  if (value.featuresVr180 !== undefined) result.featuresVr180 = jsonValueToTsValueFns.int32(value.featuresVr180);
  return result;
}

export function encodeBinary(value: $.youtube.SearchFilter.Filters): Uint8Array {
  const result: WireMessage = [];
  if (value.uploadDate !== undefined) {
    const tsValue = value.uploadDate;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.duration !== undefined) {
    const tsValue = value.duration;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresHd !== undefined) {
    const tsValue = value.featuresHd;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresSubtitles !== undefined) {
    const tsValue = value.featuresSubtitles;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresCreativeCommons !== undefined) {
    const tsValue = value.featuresCreativeCommons;
    result.push(
      [6, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.features3d !== undefined) {
    const tsValue = value.features3d;
    result.push(
      [7, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresLive !== undefined) {
    const tsValue = value.featuresLive;
    result.push(
      [8, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresPurchased !== undefined) {
    const tsValue = value.featuresPurchased;
    result.push(
      [9, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.features4k !== undefined) {
    const tsValue = value.features4k;
    result.push(
      [14, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.features360 !== undefined) {
    const tsValue = value.features360;
    result.push(
      [15, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresLocation !== undefined) {
    const tsValue = value.featuresLocation;
    result.push(
      [23, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresHdr !== undefined) {
    const tsValue = value.featuresHdr;
    result.push(
      [25, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.featuresVr180 !== undefined) {
    const tsValue = value.featuresVr180;
    result.push(
      [26, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SearchFilter.Filters {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.uploadDate = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.duration = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresHd = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresSubtitles = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresCreativeCommons = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.features3d = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresLive = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresPurchased = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.features4k = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.features360 = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresLocation = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresHdr = value;
  }
  field: {
    const wireValue = wireFields.get(26);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.featuresVr180 = value;
  }
  return result;
}
