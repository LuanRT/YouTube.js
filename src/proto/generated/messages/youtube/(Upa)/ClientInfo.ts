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

export declare namespace $.youtube.Upa {
  export type ClientInfo = {
    deviceMake?: string;
    deviceModel?: string;
    clientName?: number;
    clientVersion?: string;
    osName?: string;
    osVersion?: string;
  }
}

export type Type = $.youtube.Upa.ClientInfo;

export function getDefaultValue(): $.youtube.Upa.ClientInfo {
  return {
    deviceMake: undefined,
    deviceModel: undefined,
    clientName: undefined,
    clientVersion: undefined,
    osName: undefined,
    osVersion: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.Upa.ClientInfo>): $.youtube.Upa.ClientInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Upa.ClientInfo): unknown {
  const result: any = {};
  if (value.deviceMake !== undefined) result.deviceMake = tsValueToJsonValueFns.string(value.deviceMake);
  if (value.deviceModel !== undefined) result.deviceModel = tsValueToJsonValueFns.string(value.deviceModel);
  if (value.clientName !== undefined) result.clientName = tsValueToJsonValueFns.int32(value.clientName);
  if (value.clientVersion !== undefined) result.clientVersion = tsValueToJsonValueFns.string(value.clientVersion);
  if (value.osName !== undefined) result.osName = tsValueToJsonValueFns.string(value.osName);
  if (value.osVersion !== undefined) result.osVersion = tsValueToJsonValueFns.string(value.osVersion);
  return result;
}

export function decodeJson(value: any): $.youtube.Upa.ClientInfo {
  const result = getDefaultValue();
  if (value.deviceMake !== undefined) result.deviceMake = jsonValueToTsValueFns.string(value.deviceMake);
  if (value.deviceModel !== undefined) result.deviceModel = jsonValueToTsValueFns.string(value.deviceModel);
  if (value.clientName !== undefined) result.clientName = jsonValueToTsValueFns.int32(value.clientName);
  if (value.clientVersion !== undefined) result.clientVersion = jsonValueToTsValueFns.string(value.clientVersion);
  if (value.osName !== undefined) result.osName = jsonValueToTsValueFns.string(value.osName);
  if (value.osVersion !== undefined) result.osVersion = jsonValueToTsValueFns.string(value.osVersion);
  return result;
}

export function encodeBinary(value: $.youtube.Upa.ClientInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.deviceMake !== undefined) {
    const tsValue = value.deviceMake;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.deviceModel !== undefined) {
    const tsValue = value.deviceModel;
    result.push(
      [13, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientName !== undefined) {
    const tsValue = value.clientName;
    result.push(
      [16, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.clientVersion !== undefined) {
    const tsValue = value.clientVersion;
    result.push(
      [17, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.osName !== undefined) {
    const tsValue = value.osName;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.osVersion !== undefined) {
    const tsValue = value.osVersion;
    result.push(
      [19, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Upa.ClientInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceMake = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceModel = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.clientName = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientVersion = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.osName = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.osVersion = value;
  }
  return result;
}
