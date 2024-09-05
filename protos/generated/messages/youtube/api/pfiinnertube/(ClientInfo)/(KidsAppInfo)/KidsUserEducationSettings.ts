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
  export type KidsUserEducationSettings = {
    hasSeenHomeChipBarUserEducation?: boolean;
    hasSeenHomePivotBarUserEducation?: boolean;
    hasSeenParentMuirUserEducation?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings {
  return {
    hasSeenHomeChipBarUserEducation: undefined,
    hasSeenHomePivotBarUserEducation: undefined,
    hasSeenParentMuirUserEducation: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings>): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings): unknown {
  const result: any = {};
  if (value.hasSeenHomeChipBarUserEducation !== undefined) result.hasSeenHomeChipBarUserEducation = tsValueToJsonValueFns.bool(value.hasSeenHomeChipBarUserEducation);
  if (value.hasSeenHomePivotBarUserEducation !== undefined) result.hasSeenHomePivotBarUserEducation = tsValueToJsonValueFns.bool(value.hasSeenHomePivotBarUserEducation);
  if (value.hasSeenParentMuirUserEducation !== undefined) result.hasSeenParentMuirUserEducation = tsValueToJsonValueFns.bool(value.hasSeenParentMuirUserEducation);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings {
  const result = getDefaultValue();
  if (value.hasSeenHomeChipBarUserEducation !== undefined) result.hasSeenHomeChipBarUserEducation = jsonValueToTsValueFns.bool(value.hasSeenHomeChipBarUserEducation);
  if (value.hasSeenHomePivotBarUserEducation !== undefined) result.hasSeenHomePivotBarUserEducation = jsonValueToTsValueFns.bool(value.hasSeenHomePivotBarUserEducation);
  if (value.hasSeenParentMuirUserEducation !== undefined) result.hasSeenParentMuirUserEducation = jsonValueToTsValueFns.bool(value.hasSeenParentMuirUserEducation);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings): Uint8Array {
  const result: WireMessage = [];
  if (value.hasSeenHomeChipBarUserEducation !== undefined) {
    const tsValue = value.hasSeenHomeChipBarUserEducation;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.hasSeenHomePivotBarUserEducation !== undefined) {
    const tsValue = value.hasSeenHomePivotBarUserEducation;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.hasSeenParentMuirUserEducation !== undefined) {
    const tsValue = value.hasSeenParentMuirUserEducation;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsUserEducationSettings {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.hasSeenHomeChipBarUserEducation = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.hasSeenHomePivotBarUserEducation = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.hasSeenParentMuirUserEducation = value;
  }
  return result;
}
