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
  export type ConfigGroupsClientInfo = {
    coldConfigData?: string;
    coldHashData?: string;
    hotHashData?: string;
    appInstallData?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo {
  return {
    coldConfigData: undefined,
    coldHashData: undefined,
    hotHashData: undefined,
    appInstallData: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo>): $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo): unknown {
  const result: any = {};
  if (value.coldConfigData !== undefined) result.coldConfigData = tsValueToJsonValueFns.string(value.coldConfigData);
  if (value.coldHashData !== undefined) result.coldHashData = tsValueToJsonValueFns.string(value.coldHashData);
  if (value.hotHashData !== undefined) result.hotHashData = tsValueToJsonValueFns.string(value.hotHashData);
  if (value.appInstallData !== undefined) result.appInstallData = tsValueToJsonValueFns.string(value.appInstallData);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo {
  const result = getDefaultValue();
  if (value.coldConfigData !== undefined) result.coldConfigData = jsonValueToTsValueFns.string(value.coldConfigData);
  if (value.coldHashData !== undefined) result.coldHashData = jsonValueToTsValueFns.string(value.coldHashData);
  if (value.hotHashData !== undefined) result.hotHashData = jsonValueToTsValueFns.string(value.hotHashData);
  if (value.appInstallData !== undefined) result.appInstallData = jsonValueToTsValueFns.string(value.appInstallData);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.coldConfigData !== undefined) {
    const tsValue = value.coldConfigData;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.coldHashData !== undefined) {
    const tsValue = value.coldHashData;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.hotHashData !== undefined) {
    const tsValue = value.hotHashData;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.appInstallData !== undefined) {
    const tsValue = value.appInstallData;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.ConfigGroupsClientInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.coldConfigData = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.coldHashData = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hotHashData = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.appInstallData = value;
  }
  return result;
}
