import {
  Type as YTKidsNoSearchMode,
  name2num,
  num2name,
} from "./(KidsContentSettings)/YTKidsNoSearchMode.js";
import {
  Type as YTKidsAgeUpMode,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(KidsContentSettings)/YTKidsAgeUpMode.js";
import {
  Type as KidsContentDensity,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(KidsContentSettings)/KidsContentDensity.js";
import {
  tsValueToJsonValueFns,
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
  default as Long,
} from "../../../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  export type KidsContentSettings = {
    kidsNoSearchMode?: YTKidsNoSearchMode;
    ageUpMode?: YTKidsAgeUpMode;
    contentDensity?: KidsContentDensity;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  return {
    kidsNoSearchMode: undefined,
    ageUpMode: undefined,
    contentDensity: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings>): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings): unknown {
  const result: any = {};
  if (value.kidsNoSearchMode !== undefined) result.kidsNoSearchMode = tsValueToJsonValueFns.enum(value.kidsNoSearchMode);
  if (value.ageUpMode !== undefined) result.ageUpMode = tsValueToJsonValueFns.enum(value.ageUpMode);
  if (value.contentDensity !== undefined) result.contentDensity = tsValueToJsonValueFns.enum(value.contentDensity);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  const result = getDefaultValue();
  if (value.kidsNoSearchMode !== undefined) result.kidsNoSearchMode = jsonValueToTsValueFns.enum(value.kidsNoSearchMode) as YTKidsNoSearchMode;
  if (value.ageUpMode !== undefined) result.ageUpMode = jsonValueToTsValueFns.enum(value.ageUpMode) as YTKidsAgeUpMode;
  if (value.contentDensity !== undefined) result.contentDensity = jsonValueToTsValueFns.enum(value.contentDensity) as KidsContentDensity;
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings): Uint8Array {
  const result: WireMessage = [];
  if (value.kidsNoSearchMode !== undefined) {
    const tsValue = value.kidsNoSearchMode;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.ageUpMode !== undefined) {
    const tsValue = value.ageUpMode;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.contentDensity !== undefined) {
    const tsValue = value.contentDensity;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.kidsNoSearchMode = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.ageUpMode = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.contentDensity = value;
  }
  return result;
}
