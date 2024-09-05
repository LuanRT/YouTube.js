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
  export type UnpluggedLocationInfo = {
    latitudeE7?: number;
    longitudeE7?: number;
    localTimestampMs?: string;
    ipAddress?: string;
    timezone?: string;
    prefer24HourTime?: boolean;
    locationRadiusMeters?: number;
    isInitialLoad?: boolean;
    browserPermissionGranted?: boolean;
    clientPermissionState?: number;
    locationOverrideToken?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo {
  return {
    latitudeE7: undefined,
    longitudeE7: undefined,
    localTimestampMs: undefined,
    ipAddress: undefined,
    timezone: undefined,
    prefer24HourTime: undefined,
    locationRadiusMeters: undefined,
    isInitialLoad: undefined,
    browserPermissionGranted: undefined,
    clientPermissionState: undefined,
    locationOverrideToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo>): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo): unknown {
  const result: any = {};
  if (value.latitudeE7 !== undefined) result.latitudeE7 = tsValueToJsonValueFns.int32(value.latitudeE7);
  if (value.longitudeE7 !== undefined) result.longitudeE7 = tsValueToJsonValueFns.int32(value.longitudeE7);
  if (value.localTimestampMs !== undefined) result.localTimestampMs = tsValueToJsonValueFns.int64(value.localTimestampMs);
  if (value.ipAddress !== undefined) result.ipAddress = tsValueToJsonValueFns.string(value.ipAddress);
  if (value.timezone !== undefined) result.timezone = tsValueToJsonValueFns.string(value.timezone);
  if (value.prefer24HourTime !== undefined) result.prefer24HourTime = tsValueToJsonValueFns.bool(value.prefer24HourTime);
  if (value.locationRadiusMeters !== undefined) result.locationRadiusMeters = tsValueToJsonValueFns.int32(value.locationRadiusMeters);
  if (value.isInitialLoad !== undefined) result.isInitialLoad = tsValueToJsonValueFns.bool(value.isInitialLoad);
  if (value.browserPermissionGranted !== undefined) result.browserPermissionGranted = tsValueToJsonValueFns.bool(value.browserPermissionGranted);
  if (value.clientPermissionState !== undefined) result.clientPermissionState = tsValueToJsonValueFns.int32(value.clientPermissionState);
  if (value.locationOverrideToken !== undefined) result.locationOverrideToken = tsValueToJsonValueFns.string(value.locationOverrideToken);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo {
  const result = getDefaultValue();
  if (value.latitudeE7 !== undefined) result.latitudeE7 = jsonValueToTsValueFns.int32(value.latitudeE7);
  if (value.longitudeE7 !== undefined) result.longitudeE7 = jsonValueToTsValueFns.int32(value.longitudeE7);
  if (value.localTimestampMs !== undefined) result.localTimestampMs = jsonValueToTsValueFns.int64(value.localTimestampMs);
  if (value.ipAddress !== undefined) result.ipAddress = jsonValueToTsValueFns.string(value.ipAddress);
  if (value.timezone !== undefined) result.timezone = jsonValueToTsValueFns.string(value.timezone);
  if (value.prefer24HourTime !== undefined) result.prefer24HourTime = jsonValueToTsValueFns.bool(value.prefer24HourTime);
  if (value.locationRadiusMeters !== undefined) result.locationRadiusMeters = jsonValueToTsValueFns.int32(value.locationRadiusMeters);
  if (value.isInitialLoad !== undefined) result.isInitialLoad = jsonValueToTsValueFns.bool(value.isInitialLoad);
  if (value.browserPermissionGranted !== undefined) result.browserPermissionGranted = jsonValueToTsValueFns.bool(value.browserPermissionGranted);
  if (value.clientPermissionState !== undefined) result.clientPermissionState = jsonValueToTsValueFns.int32(value.clientPermissionState);
  if (value.locationOverrideToken !== undefined) result.locationOverrideToken = jsonValueToTsValueFns.string(value.locationOverrideToken);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.latitudeE7 !== undefined) {
    const tsValue = value.latitudeE7;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.longitudeE7 !== undefined) {
    const tsValue = value.longitudeE7;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.localTimestampMs !== undefined) {
    const tsValue = value.localTimestampMs;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.ipAddress !== undefined) {
    const tsValue = value.ipAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timezone !== undefined) {
    const tsValue = value.timezone;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.prefer24HourTime !== undefined) {
    const tsValue = value.prefer24HourTime;
    result.push(
      [6, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.locationRadiusMeters !== undefined) {
    const tsValue = value.locationRadiusMeters;
    result.push(
      [7, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.isInitialLoad !== undefined) {
    const tsValue = value.isInitialLoad;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.browserPermissionGranted !== undefined) {
    const tsValue = value.browserPermissionGranted;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.clientPermissionState !== undefined) {
    const tsValue = value.clientPermissionState;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.locationOverrideToken !== undefined) {
    const tsValue = value.locationOverrideToken;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.UnpluggedLocationInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.latitudeE7 = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.longitudeE7 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.localTimestampMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ipAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.timezone = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.prefer24HourTime = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.locationRadiusMeters = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isInitialLoad = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.browserPermissionGranted = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.clientPermissionState = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.locationOverrideToken = value;
  }
  return result;
}
