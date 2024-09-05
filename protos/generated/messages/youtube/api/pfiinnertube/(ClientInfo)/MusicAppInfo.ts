import {
  Type as MusicPlayBackMode,
  name2num,
  num2name,
} from "./(MusicAppInfo)/MusicPlayBackMode.js";
import {
  Type as MusicLocationMasterSwitch,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(MusicAppInfo)/MusicLocationMasterSwitch.js";
import {
  Type as MusicActivityMasterSwitch,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(MusicAppInfo)/MusicActivityMasterSwitch.js";
import {
  Type as IosBackgroundRefreshStatus,
  name2num as name2num_3,
  num2name as num2name_3,
} from "./(MusicAppInfo)/IosBackgroundRefreshStatus.js";
import {
  Type as PwaInstallabilityStatus,
  name2num as name2num_4,
  num2name as num2name_4,
} from "./(MusicAppInfo)/PwaInstallabilityStatus.js";
import {
  Type as WebDisplayMode,
  name2num as name2num_5,
  num2name as num2name_5,
} from "./(MusicAppInfo)/WebDisplayMode.js";
import {
  Type as MusicTier,
  name2num as name2num_6,
  num2name as num2name_6,
} from "./(MusicAppInfo)/MusicTier.js";
import {
  Type as StoreDigitalGoodsApiSupportStatus,
  name2num as name2num_7,
  num2name as num2name_7,
} from "./(MusicAppInfo)/StoreDigitalGoodsApiSupportStatus.js";
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
  export type MusicAppInfo = {
    playBackMode?: MusicPlayBackMode;
    musicLocationMasterSwitch?: MusicLocationMasterSwitch;
    musicActivityMasterSwitch?: MusicActivityMasterSwitch;
    offlineMixtapeEnabled?: boolean;
    autoOfflineEnabled?: boolean;
    iosBackgroundRefreshStatus?: IosBackgroundRefreshStatus;
    smartDownloadsSongLimit?: number;
    transitionedFromMixtapeToSmartDownloads?: boolean;
    pwaInstallabilityStatus?: PwaInstallabilityStatus;
    webDisplayMode?: WebDisplayMode;
    musicTier?: MusicTier;
    storeDigitalGoodsApiSupportStatus?: StoreDigitalGoodsApiSupportStatus;
    smartDownloadsTimeSinceLastOptOutSec?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo {
  return {
    playBackMode: undefined,
    musicLocationMasterSwitch: undefined,
    musicActivityMasterSwitch: undefined,
    offlineMixtapeEnabled: undefined,
    autoOfflineEnabled: undefined,
    iosBackgroundRefreshStatus: undefined,
    smartDownloadsSongLimit: undefined,
    transitionedFromMixtapeToSmartDownloads: undefined,
    pwaInstallabilityStatus: undefined,
    webDisplayMode: undefined,
    musicTier: undefined,
    storeDigitalGoodsApiSupportStatus: undefined,
    smartDownloadsTimeSinceLastOptOutSec: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo>): $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo): unknown {
  const result: any = {};
  if (value.playBackMode !== undefined) result.playBackMode = tsValueToJsonValueFns.enum(value.playBackMode);
  if (value.musicLocationMasterSwitch !== undefined) result.musicLocationMasterSwitch = tsValueToJsonValueFns.enum(value.musicLocationMasterSwitch);
  if (value.musicActivityMasterSwitch !== undefined) result.musicActivityMasterSwitch = tsValueToJsonValueFns.enum(value.musicActivityMasterSwitch);
  if (value.offlineMixtapeEnabled !== undefined) result.offlineMixtapeEnabled = tsValueToJsonValueFns.bool(value.offlineMixtapeEnabled);
  if (value.autoOfflineEnabled !== undefined) result.autoOfflineEnabled = tsValueToJsonValueFns.bool(value.autoOfflineEnabled);
  if (value.iosBackgroundRefreshStatus !== undefined) result.iosBackgroundRefreshStatus = tsValueToJsonValueFns.enum(value.iosBackgroundRefreshStatus);
  if (value.smartDownloadsSongLimit !== undefined) result.smartDownloadsSongLimit = tsValueToJsonValueFns.int32(value.smartDownloadsSongLimit);
  if (value.transitionedFromMixtapeToSmartDownloads !== undefined) result.transitionedFromMixtapeToSmartDownloads = tsValueToJsonValueFns.bool(value.transitionedFromMixtapeToSmartDownloads);
  if (value.pwaInstallabilityStatus !== undefined) result.pwaInstallabilityStatus = tsValueToJsonValueFns.enum(value.pwaInstallabilityStatus);
  if (value.webDisplayMode !== undefined) result.webDisplayMode = tsValueToJsonValueFns.enum(value.webDisplayMode);
  if (value.musicTier !== undefined) result.musicTier = tsValueToJsonValueFns.enum(value.musicTier);
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) result.storeDigitalGoodsApiSupportStatus = tsValueToJsonValueFns.enum(value.storeDigitalGoodsApiSupportStatus);
  if (value.smartDownloadsTimeSinceLastOptOutSec !== undefined) result.smartDownloadsTimeSinceLastOptOutSec = tsValueToJsonValueFns.int64(value.smartDownloadsTimeSinceLastOptOutSec);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo {
  const result = getDefaultValue();
  if (value.playBackMode !== undefined) result.playBackMode = jsonValueToTsValueFns.enum(value.playBackMode) as MusicPlayBackMode;
  if (value.musicLocationMasterSwitch !== undefined) result.musicLocationMasterSwitch = jsonValueToTsValueFns.enum(value.musicLocationMasterSwitch) as MusicLocationMasterSwitch;
  if (value.musicActivityMasterSwitch !== undefined) result.musicActivityMasterSwitch = jsonValueToTsValueFns.enum(value.musicActivityMasterSwitch) as MusicActivityMasterSwitch;
  if (value.offlineMixtapeEnabled !== undefined) result.offlineMixtapeEnabled = jsonValueToTsValueFns.bool(value.offlineMixtapeEnabled);
  if (value.autoOfflineEnabled !== undefined) result.autoOfflineEnabled = jsonValueToTsValueFns.bool(value.autoOfflineEnabled);
  if (value.iosBackgroundRefreshStatus !== undefined) result.iosBackgroundRefreshStatus = jsonValueToTsValueFns.enum(value.iosBackgroundRefreshStatus) as IosBackgroundRefreshStatus;
  if (value.smartDownloadsSongLimit !== undefined) result.smartDownloadsSongLimit = jsonValueToTsValueFns.int32(value.smartDownloadsSongLimit);
  if (value.transitionedFromMixtapeToSmartDownloads !== undefined) result.transitionedFromMixtapeToSmartDownloads = jsonValueToTsValueFns.bool(value.transitionedFromMixtapeToSmartDownloads);
  if (value.pwaInstallabilityStatus !== undefined) result.pwaInstallabilityStatus = jsonValueToTsValueFns.enum(value.pwaInstallabilityStatus) as PwaInstallabilityStatus;
  if (value.webDisplayMode !== undefined) result.webDisplayMode = jsonValueToTsValueFns.enum(value.webDisplayMode) as WebDisplayMode;
  if (value.musicTier !== undefined) result.musicTier = jsonValueToTsValueFns.enum(value.musicTier) as MusicTier;
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) result.storeDigitalGoodsApiSupportStatus = jsonValueToTsValueFns.enum(value.storeDigitalGoodsApiSupportStatus) as StoreDigitalGoodsApiSupportStatus;
  if (value.smartDownloadsTimeSinceLastOptOutSec !== undefined) result.smartDownloadsTimeSinceLastOptOutSec = jsonValueToTsValueFns.int64(value.smartDownloadsTimeSinceLastOptOutSec);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.playBackMode !== undefined) {
    const tsValue = value.playBackMode;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.musicLocationMasterSwitch !== undefined) {
    const tsValue = value.musicLocationMasterSwitch;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.musicActivityMasterSwitch !== undefined) {
    const tsValue = value.musicActivityMasterSwitch;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.offlineMixtapeEnabled !== undefined) {
    const tsValue = value.offlineMixtapeEnabled;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.autoOfflineEnabled !== undefined) {
    const tsValue = value.autoOfflineEnabled;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.iosBackgroundRefreshStatus !== undefined) {
    const tsValue = value.iosBackgroundRefreshStatus;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num_3[tsValue as keyof typeof name2num_3]) }],
    );
  }
  if (value.smartDownloadsSongLimit !== undefined) {
    const tsValue = value.smartDownloadsSongLimit;
    result.push(
      [7, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.transitionedFromMixtapeToSmartDownloads !== undefined) {
    const tsValue = value.transitionedFromMixtapeToSmartDownloads;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.pwaInstallabilityStatus !== undefined) {
    const tsValue = value.pwaInstallabilityStatus;
    result.push(
      [9, { type: WireType.Varint as const, value: new Long(name2num_4[tsValue as keyof typeof name2num_4]) }],
    );
  }
  if (value.webDisplayMode !== undefined) {
    const tsValue = value.webDisplayMode;
    result.push(
      [10, { type: WireType.Varint as const, value: new Long(name2num_5[tsValue as keyof typeof name2num_5]) }],
    );
  }
  if (value.musicTier !== undefined) {
    const tsValue = value.musicTier;
    result.push(
      [11, { type: WireType.Varint as const, value: new Long(name2num_6[tsValue as keyof typeof name2num_6]) }],
    );
  }
  if (value.storeDigitalGoodsApiSupportStatus !== undefined) {
    const tsValue = value.storeDigitalGoodsApiSupportStatus;
    result.push(
      [12, { type: WireType.Varint as const, value: new Long(name2num_7[tsValue as keyof typeof name2num_7]) }],
    );
  }
  if (value.smartDownloadsTimeSinceLastOptOutSec !== undefined) {
    const tsValue = value.smartDownloadsTimeSinceLastOptOutSec;
    result.push(
      [13, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.MusicAppInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.playBackMode = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.musicLocationMasterSwitch = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.musicActivityMasterSwitch = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.offlineMixtapeEnabled = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.autoOfflineEnabled = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_3[wireValue.value[0] as keyof typeof num2name_3] : undefined;
    if (value === undefined) break field;
    result.iosBackgroundRefreshStatus = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.smartDownloadsSongLimit = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.transitionedFromMixtapeToSmartDownloads = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_4[wireValue.value[0] as keyof typeof num2name_4] : undefined;
    if (value === undefined) break field;
    result.pwaInstallabilityStatus = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_5[wireValue.value[0] as keyof typeof num2name_5] : undefined;
    if (value === undefined) break field;
    result.webDisplayMode = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_6[wireValue.value[0] as keyof typeof num2name_6] : undefined;
    if (value === undefined) break field;
    result.musicTier = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_7[wireValue.value[0] as keyof typeof num2name_7] : undefined;
    if (value === undefined) break field;
    result.storeDigitalGoodsApiSupportStatus = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.smartDownloadsTimeSinceLastOptOutSec = value;
  }
  return result;
}
