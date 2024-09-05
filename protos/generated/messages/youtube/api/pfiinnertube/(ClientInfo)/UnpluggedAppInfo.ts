import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type UnpluggedAppInfo = {
    enableFilterMode?: boolean;
    iosNotificationPermission?: boolean;
    forceEnableEpg3?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo {
  return {
    enableFilterMode: undefined,
    iosNotificationPermission: undefined,
    forceEnableEpg3: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo>): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo): unknown {
  const result: any = {};
  if (value.enableFilterMode !== undefined) result.enableFilterMode = tsValueToJsonValueFns.bool(value.enableFilterMode);
  if (value.iosNotificationPermission !== undefined) result.iosNotificationPermission = tsValueToJsonValueFns.bool(value.iosNotificationPermission);
  if (value.forceEnableEpg3 !== undefined) result.forceEnableEpg3 = tsValueToJsonValueFns.bool(value.forceEnableEpg3);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo {
  const result = getDefaultValue();
  if (value.enableFilterMode !== undefined) result.enableFilterMode = jsonValueToTsValueFns.bool(value.enableFilterMode);
  if (value.iosNotificationPermission !== undefined) result.iosNotificationPermission = jsonValueToTsValueFns.bool(value.iosNotificationPermission);
  if (value.forceEnableEpg3 !== undefined) result.forceEnableEpg3 = jsonValueToTsValueFns.bool(value.forceEnableEpg3);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.enableFilterMode !== undefined) {
    const tsValue = value.enableFilterMode;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.iosNotificationPermission !== undefined) {
    const tsValue = value.iosNotificationPermission;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.forceEnableEpg3 !== undefined) {
    const tsValue = value.forceEnableEpg3;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedAppInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enableFilterMode = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.iosNotificationPermission = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.forceEnableEpg3 = value;
  }
  return result;
}
