import {
  Type as NotificationsSetting,
  name2num,
  num2name,
} from "./(NotificationPermissionInfo)/NotificationsSetting.js";
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
  default as Long,
} from "../../../../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type NotificationPermissionInfo = {
    notificationsSetting?: NotificationsSetting;
    lastDeviceOptInChangeTimeAgoSec?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo {
  return {
    notificationsSetting: undefined,
    lastDeviceOptInChangeTimeAgoSec: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo>): $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo): unknown {
  const result: any = {};
  if (value.notificationsSetting !== undefined) result.notificationsSetting = tsValueToJsonValueFns.enum(value.notificationsSetting);
  if (value.lastDeviceOptInChangeTimeAgoSec !== undefined) result.lastDeviceOptInChangeTimeAgoSec = tsValueToJsonValueFns.int64(value.lastDeviceOptInChangeTimeAgoSec);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo {
  const result = getDefaultValue();
  if (value.notificationsSetting !== undefined) result.notificationsSetting = jsonValueToTsValueFns.enum(value.notificationsSetting) as NotificationsSetting;
  if (value.lastDeviceOptInChangeTimeAgoSec !== undefined) result.lastDeviceOptInChangeTimeAgoSec = jsonValueToTsValueFns.int64(value.lastDeviceOptInChangeTimeAgoSec);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.notificationsSetting !== undefined) {
    const tsValue = value.notificationsSetting;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.lastDeviceOptInChangeTimeAgoSec !== undefined) {
    const tsValue = value.lastDeviceOptInChangeTimeAgoSec;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.NotificationPermissionInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.notificationsSetting = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.lastDeviceOptInChangeTimeAgoSec = value;
  }
  return result;
}
