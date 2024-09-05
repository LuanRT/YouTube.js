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

export declare namespace $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo {
  export type KidsCategorySettings = {
    enabledCategories?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings {
  return {
    enabledCategories: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings>): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings): unknown {
  const result: any = {};
  if (value.enabledCategories !== undefined) result.enabledCategories = tsValueToJsonValueFns.string(value.enabledCategories);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings {
  const result = getDefaultValue();
  if (value.enabledCategories !== undefined) result.enabledCategories = jsonValueToTsValueFns.string(value.enabledCategories);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings): Uint8Array {
  const result: WireMessage = [];
  if (value.enabledCategories !== undefined) {
    const tsValue = value.enabledCategories;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsCategorySettings {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.enabledCategories = value;
  }
  return result;
}
