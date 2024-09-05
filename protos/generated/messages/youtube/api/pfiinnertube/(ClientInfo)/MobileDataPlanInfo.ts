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
  export type MobileDataPlanInfo = {
    cpid?: string;
    serializedDataPlanStatus?: string;
    dataSavingQualityPickerEnabled?: boolean;
    mccmnc?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo {
  return {
    cpid: undefined,
    serializedDataPlanStatus: undefined,
    dataSavingQualityPickerEnabled: undefined,
    mccmnc: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo>): $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo): unknown {
  const result: any = {};
  if (value.cpid !== undefined) result.cpid = tsValueToJsonValueFns.string(value.cpid);
  if (value.serializedDataPlanStatus !== undefined) result.serializedDataPlanStatus = tsValueToJsonValueFns.string(value.serializedDataPlanStatus);
  if (value.dataSavingQualityPickerEnabled !== undefined) result.dataSavingQualityPickerEnabled = tsValueToJsonValueFns.bool(value.dataSavingQualityPickerEnabled);
  if (value.mccmnc !== undefined) result.mccmnc = tsValueToJsonValueFns.string(value.mccmnc);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo {
  const result = getDefaultValue();
  if (value.cpid !== undefined) result.cpid = jsonValueToTsValueFns.string(value.cpid);
  if (value.serializedDataPlanStatus !== undefined) result.serializedDataPlanStatus = jsonValueToTsValueFns.string(value.serializedDataPlanStatus);
  if (value.dataSavingQualityPickerEnabled !== undefined) result.dataSavingQualityPickerEnabled = jsonValueToTsValueFns.bool(value.dataSavingQualityPickerEnabled);
  if (value.mccmnc !== undefined) result.mccmnc = jsonValueToTsValueFns.string(value.mccmnc);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.cpid !== undefined) {
    const tsValue = value.cpid;
    result.push(
      [49, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.serializedDataPlanStatus !== undefined) {
    const tsValue = value.serializedDataPlanStatus;
    result.push(
      [50, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.dataSavingQualityPickerEnabled !== undefined) {
    const tsValue = value.dataSavingQualityPickerEnabled;
    result.push(
      [52, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.mccmnc !== undefined) {
    const tsValue = value.mccmnc;
    result.push(
      [53, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.MobileDataPlanInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(49);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.cpid = value;
  }
  field: {
    const wireValue = wireFields.get(50);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.serializedDataPlanStatus = value;
  }
  field: {
    const wireValue = wireFields.get(52);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.dataSavingQualityPickerEnabled = value;
  }
  field: {
    const wireValue = wireFields.get(53);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mccmnc = value;
  }
  return result;
}
