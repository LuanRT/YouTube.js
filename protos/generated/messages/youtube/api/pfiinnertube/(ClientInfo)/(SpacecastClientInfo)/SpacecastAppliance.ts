import {
  Type as OperationalStatus,
  name2num,
  num2name,
} from "./(SpacecastAppliance)/OperationalStatus.js";
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo {
  export type SpacecastAppliance = {
    contentProfileToken?: Uint8Array;
    status?: OperationalStatus;
    hostname?: string;
    active?: boolean;
    deviceId?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance {
  return {
    contentProfileToken: undefined,
    status: undefined,
    hostname: undefined,
    active: undefined,
    deviceId: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance>): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance): unknown {
  const result: any = {};
  if (value.contentProfileToken !== undefined) result.contentProfileToken = tsValueToJsonValueFns.bytes(value.contentProfileToken);
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.enum(value.status);
  if (value.hostname !== undefined) result.hostname = tsValueToJsonValueFns.string(value.hostname);
  if (value.active !== undefined) result.active = tsValueToJsonValueFns.bool(value.active);
  if (value.deviceId !== undefined) result.deviceId = tsValueToJsonValueFns.string(value.deviceId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance {
  const result = getDefaultValue();
  if (value.contentProfileToken !== undefined) result.contentProfileToken = jsonValueToTsValueFns.bytes(value.contentProfileToken);
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.enum(value.status) as OperationalStatus;
  if (value.hostname !== undefined) result.hostname = jsonValueToTsValueFns.string(value.hostname);
  if (value.active !== undefined) result.active = jsonValueToTsValueFns.bool(value.active);
  if (value.deviceId !== undefined) result.deviceId = jsonValueToTsValueFns.string(value.deviceId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance): Uint8Array {
  const result: WireMessage = [];
  if (value.contentProfileToken !== undefined) {
    const tsValue = value.contentProfileToken;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.hostname !== undefined) {
    const tsValue = value.hostname;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.active !== undefined) {
    const tsValue = value.active;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.deviceId !== undefined) {
    const tsValue = value.deviceId;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo.SpacecastAppliance {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.contentProfileToken = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hostname = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.active = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceId = value;
  }
  return result;
}
