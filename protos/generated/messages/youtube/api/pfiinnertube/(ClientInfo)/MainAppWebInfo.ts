import {
  Type as PwaInstallabilityStatus,
  name2num,
  num2name,
} from "./(MainAppWebInfo)/PwaInstallabilityStatus.js";
import {
  Type as WebDisplayMode,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(MainAppWebInfo)/WebDisplayMode.js";
import {
  Type as StoreDigitalGoodsApiSupportStatus,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(MainAppWebInfo)/StoreDigitalGoodsApiSupportStatus.js";
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
  default as Long,
} from "../../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type MainAppWebInfo = {
    graftUrl?: string;
    pwaInstallabilityStatus?: PwaInstallabilityStatus;
    webDisplayMode?: WebDisplayMode;
    isWebNativeShareAvailable?: boolean;
    storeDigitalGoodsApiSupportStatus?: StoreDigitalGoodsApiSupportStatus;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo {
  return {
    graftUrl: undefined,
    pwaInstallabilityStatus: undefined,
    webDisplayMode: undefined,
    isWebNativeShareAvailable: undefined,
    storeDigitalGoodsApiSupportStatus: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo>): $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo): unknown {
  const result: any = {};
  if (value.graftUrl !== undefined) result.graftUrl = tsValueToJsonValueFns.string(value.graftUrl);
  if (value.pwaInstallabilityStatus !== undefined) result.pwaInstallabilityStatus = tsValueToJsonValueFns.enum(value.pwaInstallabilityStatus);
  if (value.webDisplayMode !== undefined) result.webDisplayMode = tsValueToJsonValueFns.enum(value.webDisplayMode);
  if (value.isWebNativeShareAvailable !== undefined) result.isWebNativeShareAvailable = tsValueToJsonValueFns.bool(value.isWebNativeShareAvailable);
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) result.storeDigitalGoodsApiSupportStatus = tsValueToJsonValueFns.enum(value.storeDigitalGoodsApiSupportStatus);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo {
  const result = getDefaultValue();
  if (value.graftUrl !== undefined) result.graftUrl = jsonValueToTsValueFns.string(value.graftUrl);
  if (value.pwaInstallabilityStatus !== undefined) result.pwaInstallabilityStatus = jsonValueToTsValueFns.enum(value.pwaInstallabilityStatus) as PwaInstallabilityStatus;
  if (value.webDisplayMode !== undefined) result.webDisplayMode = jsonValueToTsValueFns.enum(value.webDisplayMode) as WebDisplayMode;
  if (value.isWebNativeShareAvailable !== undefined) result.isWebNativeShareAvailable = jsonValueToTsValueFns.bool(value.isWebNativeShareAvailable);
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) result.storeDigitalGoodsApiSupportStatus = jsonValueToTsValueFns.enum(value.storeDigitalGoodsApiSupportStatus) as StoreDigitalGoodsApiSupportStatus;
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.graftUrl !== undefined) {
    const tsValue = value.graftUrl;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pwaInstallabilityStatus !== undefined) {
    const tsValue = value.pwaInstallabilityStatus;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.webDisplayMode !== undefined) {
    const tsValue = value.webDisplayMode;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.isWebNativeShareAvailable !== undefined) {
    const tsValue = value.isWebNativeShareAvailable;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) {
    const tsValue = value.storeDigitalGoodsApiSupportStatus;
    result.push(
      [5, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.MainAppWebInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.graftUrl = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.pwaInstallabilityStatus = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.webDisplayMode = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isWebNativeShareAvailable = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.storeDigitalGoodsApiSupportStatus = value;
  }
  return result;
}
