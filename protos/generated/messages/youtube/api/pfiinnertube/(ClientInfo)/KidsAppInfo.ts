import {
  Type as KidsContentSettings,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(KidsAppInfo)/KidsContentSettings.js";
import {
  Type as KidsParentCurationMode,
  name2num,
  num2name,
} from "./(KidsAppInfo)/KidsParentCurationMode.js";
import {
  Type as KidsCategorySettings,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(KidsAppInfo)/KidsCategorySettings.js";
import {
  Type as KidsUserEducationSettings,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(KidsAppInfo)/KidsUserEducationSettings.js";
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
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type KidsAppInfo = {
    contentSettings?: KidsContentSettings;
    parentCurationMode?: KidsParentCurationMode;
    categorySettings?: KidsCategorySettings;
    userEducationSettings?: KidsUserEducationSettings;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  return {
    contentSettings: undefined,
    parentCurationMode: undefined,
    categorySettings: undefined,
    userEducationSettings: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo>): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo): unknown {
  const result: any = {};
  if (value.contentSettings !== undefined) result.contentSettings = encodeJson_1(value.contentSettings);
  if (value.parentCurationMode !== undefined) result.parentCurationMode = tsValueToJsonValueFns.enum(value.parentCurationMode);
  if (value.categorySettings !== undefined) result.categorySettings = encodeJson_2(value.categorySettings);
  if (value.userEducationSettings !== undefined) result.userEducationSettings = encodeJson_3(value.userEducationSettings);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  const result = getDefaultValue();
  if (value.contentSettings !== undefined) result.contentSettings = decodeJson_1(value.contentSettings);
  if (value.parentCurationMode !== undefined) result.parentCurationMode = jsonValueToTsValueFns.enum(value.parentCurationMode) as KidsParentCurationMode;
  if (value.categorySettings !== undefined) result.categorySettings = decodeJson_2(value.categorySettings);
  if (value.userEducationSettings !== undefined) result.userEducationSettings = decodeJson_3(value.userEducationSettings);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.contentSettings !== undefined) {
    const tsValue = value.contentSettings;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.parentCurationMode !== undefined) {
    const tsValue = value.parentCurationMode;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.categorySettings !== undefined) {
    const tsValue = value.categorySettings;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.userEducationSettings !== undefined) {
    const tsValue = value.userEducationSettings;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contentSettings = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.parentCurationMode = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.categorySettings = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.userEducationSettings = value;
  }
  return result;
}
