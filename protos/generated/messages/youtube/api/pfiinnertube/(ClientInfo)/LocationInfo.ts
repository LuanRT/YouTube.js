import {
  Type as UrlStatus,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(LocationInfo)/UrlStatus.js";
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type LocationInfo = {
    locationInfoStatus?: number;
    ulrStatus?: UrlStatus;
    latitudeE7?: string;
    longitudeE7?: string;
    horizontalAccuracyMeters?: string;
    locationFreshnessMs?: string;
    locationPermissionAuthorizationStatus?: number;
    locationOverrideToken?: string;
    forceLocationPlayabilityTokenRefresh?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.LocationInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo {
  return {
    locationInfoStatus: undefined,
    ulrStatus: undefined,
    latitudeE7: undefined,
    longitudeE7: undefined,
    horizontalAccuracyMeters: undefined,
    locationFreshnessMs: undefined,
    locationPermissionAuthorizationStatus: undefined,
    locationOverrideToken: undefined,
    forceLocationPlayabilityTokenRefresh: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.LocationInfo>): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.LocationInfo): unknown {
  const result: any = {};
  if (value.locationInfoStatus !== undefined) result.locationInfoStatus = tsValueToJsonValueFns.int32(value.locationInfoStatus);
  if (value.ulrStatus !== undefined) result.ulrStatus = encodeJson_1(value.ulrStatus);
  if (value.latitudeE7 !== undefined) result.latitudeE7 = tsValueToJsonValueFns.string(value.latitudeE7);
  if (value.longitudeE7 !== undefined) result.longitudeE7 = tsValueToJsonValueFns.string(value.longitudeE7);
  if (value.horizontalAccuracyMeters !== undefined) result.horizontalAccuracyMeters = tsValueToJsonValueFns.string(value.horizontalAccuracyMeters);
  if (value.locationFreshnessMs !== undefined) result.locationFreshnessMs = tsValueToJsonValueFns.string(value.locationFreshnessMs);
  if (value.locationPermissionAuthorizationStatus !== undefined) result.locationPermissionAuthorizationStatus = tsValueToJsonValueFns.int32(value.locationPermissionAuthorizationStatus);
  if (value.locationOverrideToken !== undefined) result.locationOverrideToken = tsValueToJsonValueFns.string(value.locationOverrideToken);
  if (value.forceLocationPlayabilityTokenRefresh !== undefined) result.forceLocationPlayabilityTokenRefresh = tsValueToJsonValueFns.bool(value.forceLocationPlayabilityTokenRefresh);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo {
  const result = getDefaultValue();
  if (value.locationInfoStatus !== undefined) result.locationInfoStatus = jsonValueToTsValueFns.int32(value.locationInfoStatus);
  if (value.ulrStatus !== undefined) result.ulrStatus = decodeJson_1(value.ulrStatus);
  if (value.latitudeE7 !== undefined) result.latitudeE7 = jsonValueToTsValueFns.string(value.latitudeE7);
  if (value.longitudeE7 !== undefined) result.longitudeE7 = jsonValueToTsValueFns.string(value.longitudeE7);
  if (value.horizontalAccuracyMeters !== undefined) result.horizontalAccuracyMeters = jsonValueToTsValueFns.string(value.horizontalAccuracyMeters);
  if (value.locationFreshnessMs !== undefined) result.locationFreshnessMs = jsonValueToTsValueFns.string(value.locationFreshnessMs);
  if (value.locationPermissionAuthorizationStatus !== undefined) result.locationPermissionAuthorizationStatus = jsonValueToTsValueFns.int32(value.locationPermissionAuthorizationStatus);
  if (value.locationOverrideToken !== undefined) result.locationOverrideToken = jsonValueToTsValueFns.string(value.locationOverrideToken);
  if (value.forceLocationPlayabilityTokenRefresh !== undefined) result.forceLocationPlayabilityTokenRefresh = jsonValueToTsValueFns.bool(value.forceLocationPlayabilityTokenRefresh);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.LocationInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.locationInfoStatus !== undefined) {
    const tsValue = value.locationInfoStatus;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.ulrStatus !== undefined) {
    const tsValue = value.ulrStatus;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.latitudeE7 !== undefined) {
    const tsValue = value.latitudeE7;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.longitudeE7 !== undefined) {
    const tsValue = value.longitudeE7;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.horizontalAccuracyMeters !== undefined) {
    const tsValue = value.horizontalAccuracyMeters;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.locationFreshnessMs !== undefined) {
    const tsValue = value.locationFreshnessMs;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.locationPermissionAuthorizationStatus !== undefined) {
    const tsValue = value.locationPermissionAuthorizationStatus;
    result.push(
      [7, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.locationOverrideToken !== undefined) {
    const tsValue = value.locationOverrideToken;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.forceLocationPlayabilityTokenRefresh !== undefined) {
    const tsValue = value.forceLocationPlayabilityTokenRefresh;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.LocationInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.locationInfoStatus = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.ulrStatus = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.latitudeE7 = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.longitudeE7 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.horizontalAccuracyMeters = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.locationFreshnessMs = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.locationPermissionAuthorizationStatus = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.locationOverrideToken = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.forceLocationPlayabilityTokenRefresh = value;
  }
  return result;
}
