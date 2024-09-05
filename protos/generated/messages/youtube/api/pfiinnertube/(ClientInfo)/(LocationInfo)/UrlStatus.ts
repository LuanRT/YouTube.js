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

export declare namespace $.youtube.api.pfiinnertube.ClientInfo.LocationInfo {
  export type UrlStatus = {
    reportingEnabledSetting?: number;
    historyEnabledSetting?: number;
    isAllowed?: boolean;
    isActive?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus {
  return {
    reportingEnabledSetting: undefined,
    historyEnabledSetting: undefined,
    isAllowed: undefined,
    isActive: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus>): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus): unknown {
  const result: any = {};
  if (value.reportingEnabledSetting !== undefined) result.reportingEnabledSetting = tsValueToJsonValueFns.int32(value.reportingEnabledSetting);
  if (value.historyEnabledSetting !== undefined) result.historyEnabledSetting = tsValueToJsonValueFns.int32(value.historyEnabledSetting);
  if (value.isAllowed !== undefined) result.isAllowed = tsValueToJsonValueFns.bool(value.isAllowed);
  if (value.isActive !== undefined) result.isActive = tsValueToJsonValueFns.bool(value.isActive);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus {
  const result = getDefaultValue();
  if (value.reportingEnabledSetting !== undefined) result.reportingEnabledSetting = jsonValueToTsValueFns.int32(value.reportingEnabledSetting);
  if (value.historyEnabledSetting !== undefined) result.historyEnabledSetting = jsonValueToTsValueFns.int32(value.historyEnabledSetting);
  if (value.isAllowed !== undefined) result.isAllowed = jsonValueToTsValueFns.bool(value.isAllowed);
  if (value.isActive !== undefined) result.isActive = jsonValueToTsValueFns.bool(value.isActive);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus): Uint8Array {
  const result: WireMessage = [];
  if (value.reportingEnabledSetting !== undefined) {
    const tsValue = value.reportingEnabledSetting;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.historyEnabledSetting !== undefined) {
    const tsValue = value.historyEnabledSetting;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.isAllowed !== undefined) {
    const tsValue = value.isAllowed;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isActive !== undefined) {
    const tsValue = value.isActive;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo.UrlStatus {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.reportingEnabledSetting = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.historyEnabledSetting = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isAllowed = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isActive = value;
  }
  return result;
}
