import {
  Type as SpacecastClientInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ClientInfo)/SpacecastClientInfo.js";
import {
  Type as ClientFormFactor,
  name2num,
  num2name,
} from "./(ClientInfo)/ClientFormFactor.js";
import {
  Type as MobileDataPlanInfo,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(ClientInfo)/MobileDataPlanInfo.js";
import {
  Type as CameraType,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./(ClientInfo)/CameraType.js";
import {
  Type as ConfigGroupsClientInfo,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(ClientInfo)/ConfigGroupsClientInfo.js";
import {
  Type as UnpluggedLocationInfo,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(ClientInfo)/UnpluggedLocationInfo.js";
import {
  Type as KidsAppInfo,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(ClientInfo)/KidsAppInfo.js";
import {
  Type as MusicAppInfo,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./(ClientInfo)/MusicAppInfo.js";
import {
  Type as TvAppInfo,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./(ClientInfo)/TvAppInfo.js";
import {
  Type as UnpluggedAppInfo,
  encodeJson as encodeJson_8,
  decodeJson as decodeJson_8,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
} from "./(ClientInfo)/UnpluggedAppInfo.js";
import {
  Type as LocationInfo,
  encodeJson as encodeJson_9,
  decodeJson as decodeJson_9,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
} from "./(ClientInfo)/LocationInfo.js";
import {
  Type as UserInterfaceTheme,
  name2num as name2num_2,
  num2name as num2name_2,
} from "./(ClientInfo)/UserInterfaceTheme.js";
import {
  Type as HomeGroupInfo,
  encodeJson as encodeJson_10,
  decodeJson as decodeJson_10,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
} from "./(ClientInfo)/HomeGroupInfo.js";
import {
  Type as MainAppWebInfo,
  encodeJson as encodeJson_11,
  decodeJson as decodeJson_11,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
} from "./(ClientInfo)/MainAppWebInfo.js";
import {
  Type as NotificationPermissionInfo,
  encodeJson as encodeJson_12,
  decodeJson as decodeJson_12,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
} from "./(ClientInfo)/NotificationPermissionInfo.js";
import {
  Type as GLDeviceInfo,
  encodeJson as encodeJson_13,
  decodeJson as decodeJson_13,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
} from "./(ClientInfo)/GLDeviceInfo.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type ClientInfo = {
    hl?: string;
    gl?: string;
    remoteHost?: string;
    deviceId?: string;
    debugDeviceIdOverride?: string;
    carrierGeo?: string;
    crackedHl?: boolean;
    deviceMake?: string;
    deviceModel?: string;
    visitorData?: string;
    userAgent?: string;
    clientName?: number;
    clientVersion?: string;
    osName?: string;
    osVersion?: string;
    projectId?: string;
    acceptLanguage?: string;
    acceptRegion?: string;
    originalUrl?: string;
    rawDeviceId?: string;
    configData?: string;
    spacecastToken?: string;
    internalGeo?: string;
    screenWidthPoints?: number;
    screenHeightPoints?: number;
    screenWidthInches?: number;
    screenHeightInches?: number;
    screenPixelDensity?: number;
    platform?: number;
    spacecastClientInfo?: SpacecastClientInfo;
    clientFormFactor?: ClientFormFactor;
    forwardedFor?: string;
    mobileDataPlanInfo?: MobileDataPlanInfo;
    gmscoreVersionCode?: number;
    webpSupport?: boolean;
    cameraType?: CameraType;
    experimentsToken?: string;
    windowWidthPoints?: number;
    windowHeightPoints?: number;
    configInfo?: ConfigGroupsClientInfo;
    unpluggedLocationInfo?: UnpluggedLocationInfo;
    androidSdkVersion?: number;
    screenDensityFloat?: number;
    firstTimeSignInExperimentIds?: number;
    utcOffsetMinutes?: number;
    animatedWebpSupport?: boolean;
    kidsAppInfo?: KidsAppInfo;
    musicAppInfo?: MusicAppInfo;
    tvAppInfo?: TvAppInfo;
    internalGeoIp?: string;
    unpluggedAppInfo?: UnpluggedAppInfo;
    locationInfo?: LocationInfo;
    contentSizeCategory?: string;
    fontScale?: number;
    userInterfaceTheme?: UserInterfaceTheme;
    timeZone?: string;
    homeGroupInfo?: HomeGroupInfo;
    emlTemplateContext?: Uint8Array;
    coldAppBundleConfigData?: Uint8Array;
    browserName?: string;
    browserVersion?: string;
    locationPlayabilityToken?: string;
    chipset?: string;
    firmwareVersion?: string;
    memoryTotalKbytes?: string;
    mainAppWebInfo?: MainAppWebInfo;
    notificationPermissionInfo?: NotificationPermissionInfo;
    deviceBrand?: string;
    glDeviceInfo?: GLDeviceInfo;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo {
  return {
    hl: undefined,
    gl: undefined,
    remoteHost: undefined,
    deviceId: undefined,
    debugDeviceIdOverride: undefined,
    carrierGeo: undefined,
    crackedHl: undefined,
    deviceMake: undefined,
    deviceModel: undefined,
    visitorData: undefined,
    userAgent: undefined,
    clientName: undefined,
    clientVersion: undefined,
    osName: undefined,
    osVersion: undefined,
    projectId: undefined,
    acceptLanguage: undefined,
    acceptRegion: undefined,
    originalUrl: undefined,
    rawDeviceId: undefined,
    configData: undefined,
    spacecastToken: undefined,
    internalGeo: undefined,
    screenWidthPoints: undefined,
    screenHeightPoints: undefined,
    screenWidthInches: undefined,
    screenHeightInches: undefined,
    screenPixelDensity: undefined,
    platform: undefined,
    spacecastClientInfo: undefined,
    clientFormFactor: undefined,
    forwardedFor: undefined,
    mobileDataPlanInfo: undefined,
    gmscoreVersionCode: undefined,
    webpSupport: undefined,
    cameraType: undefined,
    experimentsToken: undefined,
    windowWidthPoints: undefined,
    windowHeightPoints: undefined,
    configInfo: undefined,
    unpluggedLocationInfo: undefined,
    androidSdkVersion: undefined,
    screenDensityFloat: undefined,
    firstTimeSignInExperimentIds: undefined,
    utcOffsetMinutes: undefined,
    animatedWebpSupport: undefined,
    kidsAppInfo: undefined,
    musicAppInfo: undefined,
    tvAppInfo: undefined,
    internalGeoIp: undefined,
    unpluggedAppInfo: undefined,
    locationInfo: undefined,
    contentSizeCategory: undefined,
    fontScale: undefined,
    userInterfaceTheme: undefined,
    timeZone: undefined,
    homeGroupInfo: undefined,
    emlTemplateContext: undefined,
    coldAppBundleConfigData: undefined,
    browserName: undefined,
    browserVersion: undefined,
    locationPlayabilityToken: undefined,
    chipset: undefined,
    firmwareVersion: undefined,
    memoryTotalKbytes: undefined,
    mainAppWebInfo: undefined,
    notificationPermissionInfo: undefined,
    deviceBrand: undefined,
    glDeviceInfo: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo>): $.youtube.api.pfiinnertube.ClientInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo): unknown {
  const result: any = {};
  if (value.hl !== undefined) result.hl = tsValueToJsonValueFns.string(value.hl);
  if (value.gl !== undefined) result.gl = tsValueToJsonValueFns.string(value.gl);
  if (value.remoteHost !== undefined) result.remoteHost = tsValueToJsonValueFns.string(value.remoteHost);
  if (value.deviceId !== undefined) result.deviceId = tsValueToJsonValueFns.string(value.deviceId);
  if (value.debugDeviceIdOverride !== undefined) result.debugDeviceIdOverride = tsValueToJsonValueFns.string(value.debugDeviceIdOverride);
  if (value.carrierGeo !== undefined) result.carrierGeo = tsValueToJsonValueFns.string(value.carrierGeo);
  if (value.crackedHl !== undefined) result.crackedHl = tsValueToJsonValueFns.bool(value.crackedHl);
  if (value.deviceMake !== undefined) result.deviceMake = tsValueToJsonValueFns.string(value.deviceMake);
  if (value.deviceModel !== undefined) result.deviceModel = tsValueToJsonValueFns.string(value.deviceModel);
  if (value.visitorData !== undefined) result.visitorData = tsValueToJsonValueFns.string(value.visitorData);
  if (value.userAgent !== undefined) result.userAgent = tsValueToJsonValueFns.string(value.userAgent);
  if (value.clientName !== undefined) result.clientName = tsValueToJsonValueFns.int32(value.clientName);
  if (value.clientVersion !== undefined) result.clientVersion = tsValueToJsonValueFns.string(value.clientVersion);
  if (value.osName !== undefined) result.osName = tsValueToJsonValueFns.string(value.osName);
  if (value.osVersion !== undefined) result.osVersion = tsValueToJsonValueFns.string(value.osVersion);
  if (value.projectId !== undefined) result.projectId = tsValueToJsonValueFns.string(value.projectId);
  if (value.acceptLanguage !== undefined) result.acceptLanguage = tsValueToJsonValueFns.string(value.acceptLanguage);
  if (value.acceptRegion !== undefined) result.acceptRegion = tsValueToJsonValueFns.string(value.acceptRegion);
  if (value.originalUrl !== undefined) result.originalUrl = tsValueToJsonValueFns.string(value.originalUrl);
  if (value.rawDeviceId !== undefined) result.rawDeviceId = tsValueToJsonValueFns.string(value.rawDeviceId);
  if (value.configData !== undefined) result.configData = tsValueToJsonValueFns.string(value.configData);
  if (value.spacecastToken !== undefined) result.spacecastToken = tsValueToJsonValueFns.string(value.spacecastToken);
  if (value.internalGeo !== undefined) result.internalGeo = tsValueToJsonValueFns.string(value.internalGeo);
  if (value.screenWidthPoints !== undefined) result.screenWidthPoints = tsValueToJsonValueFns.int32(value.screenWidthPoints);
  if (value.screenHeightPoints !== undefined) result.screenHeightPoints = tsValueToJsonValueFns.int32(value.screenHeightPoints);
  if (value.screenWidthInches !== undefined) result.screenWidthInches = tsValueToJsonValueFns.float(value.screenWidthInches);
  if (value.screenHeightInches !== undefined) result.screenHeightInches = tsValueToJsonValueFns.float(value.screenHeightInches);
  if (value.screenPixelDensity !== undefined) result.screenPixelDensity = tsValueToJsonValueFns.int32(value.screenPixelDensity);
  if (value.platform !== undefined) result.platform = tsValueToJsonValueFns.int32(value.platform);
  if (value.spacecastClientInfo !== undefined) result.spacecastClientInfo = encodeJson_1(value.spacecastClientInfo);
  if (value.clientFormFactor !== undefined) result.clientFormFactor = tsValueToJsonValueFns.enum(value.clientFormFactor);
  if (value.forwardedFor !== undefined) result.forwardedFor = tsValueToJsonValueFns.string(value.forwardedFor);
  if (value.mobileDataPlanInfo !== undefined) result.mobileDataPlanInfo = encodeJson_2(value.mobileDataPlanInfo);
  if (value.gmscoreVersionCode !== undefined) result.gmscoreVersionCode = tsValueToJsonValueFns.int32(value.gmscoreVersionCode);
  if (value.webpSupport !== undefined) result.webpSupport = tsValueToJsonValueFns.bool(value.webpSupport);
  if (value.cameraType !== undefined) result.cameraType = tsValueToJsonValueFns.enum(value.cameraType);
  if (value.experimentsToken !== undefined) result.experimentsToken = tsValueToJsonValueFns.string(value.experimentsToken);
  if (value.windowWidthPoints !== undefined) result.windowWidthPoints = tsValueToJsonValueFns.int32(value.windowWidthPoints);
  if (value.windowHeightPoints !== undefined) result.windowHeightPoints = tsValueToJsonValueFns.int32(value.windowHeightPoints);
  if (value.configInfo !== undefined) result.configInfo = encodeJson_3(value.configInfo);
  if (value.unpluggedLocationInfo !== undefined) result.unpluggedLocationInfo = encodeJson_4(value.unpluggedLocationInfo);
  if (value.androidSdkVersion !== undefined) result.androidSdkVersion = tsValueToJsonValueFns.int32(value.androidSdkVersion);
  if (value.screenDensityFloat !== undefined) result.screenDensityFloat = tsValueToJsonValueFns.float(value.screenDensityFloat);
  if (value.firstTimeSignInExperimentIds !== undefined) result.firstTimeSignInExperimentIds = tsValueToJsonValueFns.int32(value.firstTimeSignInExperimentIds);
  if (value.utcOffsetMinutes !== undefined) result.utcOffsetMinutes = tsValueToJsonValueFns.int32(value.utcOffsetMinutes);
  if (value.animatedWebpSupport !== undefined) result.animatedWebpSupport = tsValueToJsonValueFns.bool(value.animatedWebpSupport);
  if (value.kidsAppInfo !== undefined) result.kidsAppInfo = encodeJson_5(value.kidsAppInfo);
  if (value.musicAppInfo !== undefined) result.musicAppInfo = encodeJson_6(value.musicAppInfo);
  if (value.tvAppInfo !== undefined) result.tvAppInfo = encodeJson_7(value.tvAppInfo);
  if (value.internalGeoIp !== undefined) result.internalGeoIp = tsValueToJsonValueFns.string(value.internalGeoIp);
  if (value.unpluggedAppInfo !== undefined) result.unpluggedAppInfo = encodeJson_8(value.unpluggedAppInfo);
  if (value.locationInfo !== undefined) result.locationInfo = encodeJson_9(value.locationInfo);
  if (value.contentSizeCategory !== undefined) result.contentSizeCategory = tsValueToJsonValueFns.string(value.contentSizeCategory);
  if (value.fontScale !== undefined) result.fontScale = tsValueToJsonValueFns.float(value.fontScale);
  if (value.userInterfaceTheme !== undefined) result.userInterfaceTheme = tsValueToJsonValueFns.enum(value.userInterfaceTheme);
  if (value.timeZone !== undefined) result.timeZone = tsValueToJsonValueFns.string(value.timeZone);
  if (value.homeGroupInfo !== undefined) result.homeGroupInfo = encodeJson_10(value.homeGroupInfo);
  if (value.emlTemplateContext !== undefined) result.emlTemplateContext = tsValueToJsonValueFns.bytes(value.emlTemplateContext);
  if (value.coldAppBundleConfigData !== undefined) result.coldAppBundleConfigData = tsValueToJsonValueFns.bytes(value.coldAppBundleConfigData);
  if (value.browserName !== undefined) result.browserName = tsValueToJsonValueFns.string(value.browserName);
  if (value.browserVersion !== undefined) result.browserVersion = tsValueToJsonValueFns.string(value.browserVersion);
  if (value.locationPlayabilityToken !== undefined) result.locationPlayabilityToken = tsValueToJsonValueFns.string(value.locationPlayabilityToken);
  if (value.chipset !== undefined) result.chipset = tsValueToJsonValueFns.string(value.chipset);
  if (value.firmwareVersion !== undefined) result.firmwareVersion = tsValueToJsonValueFns.string(value.firmwareVersion);
  if (value.memoryTotalKbytes !== undefined) result.memoryTotalKbytes = tsValueToJsonValueFns.int64(value.memoryTotalKbytes);
  if (value.mainAppWebInfo !== undefined) result.mainAppWebInfo = encodeJson_11(value.mainAppWebInfo);
  if (value.notificationPermissionInfo !== undefined) result.notificationPermissionInfo = encodeJson_12(value.notificationPermissionInfo);
  if (value.deviceBrand !== undefined) result.deviceBrand = tsValueToJsonValueFns.string(value.deviceBrand);
  if (value.glDeviceInfo !== undefined) result.glDeviceInfo = encodeJson_13(value.glDeviceInfo);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo {
  const result = getDefaultValue();
  if (value.hl !== undefined) result.hl = jsonValueToTsValueFns.string(value.hl);
  if (value.gl !== undefined) result.gl = jsonValueToTsValueFns.string(value.gl);
  if (value.remoteHost !== undefined) result.remoteHost = jsonValueToTsValueFns.string(value.remoteHost);
  if (value.deviceId !== undefined) result.deviceId = jsonValueToTsValueFns.string(value.deviceId);
  if (value.debugDeviceIdOverride !== undefined) result.debugDeviceIdOverride = jsonValueToTsValueFns.string(value.debugDeviceIdOverride);
  if (value.carrierGeo !== undefined) result.carrierGeo = jsonValueToTsValueFns.string(value.carrierGeo);
  if (value.crackedHl !== undefined) result.crackedHl = jsonValueToTsValueFns.bool(value.crackedHl);
  if (value.deviceMake !== undefined) result.deviceMake = jsonValueToTsValueFns.string(value.deviceMake);
  if (value.deviceModel !== undefined) result.deviceModel = jsonValueToTsValueFns.string(value.deviceModel);
  if (value.visitorData !== undefined) result.visitorData = jsonValueToTsValueFns.string(value.visitorData);
  if (value.userAgent !== undefined) result.userAgent = jsonValueToTsValueFns.string(value.userAgent);
  if (value.clientName !== undefined) result.clientName = jsonValueToTsValueFns.int32(value.clientName);
  if (value.clientVersion !== undefined) result.clientVersion = jsonValueToTsValueFns.string(value.clientVersion);
  if (value.osName !== undefined) result.osName = jsonValueToTsValueFns.string(value.osName);
  if (value.osVersion !== undefined) result.osVersion = jsonValueToTsValueFns.string(value.osVersion);
  if (value.projectId !== undefined) result.projectId = jsonValueToTsValueFns.string(value.projectId);
  if (value.acceptLanguage !== undefined) result.acceptLanguage = jsonValueToTsValueFns.string(value.acceptLanguage);
  if (value.acceptRegion !== undefined) result.acceptRegion = jsonValueToTsValueFns.string(value.acceptRegion);
  if (value.originalUrl !== undefined) result.originalUrl = jsonValueToTsValueFns.string(value.originalUrl);
  if (value.rawDeviceId !== undefined) result.rawDeviceId = jsonValueToTsValueFns.string(value.rawDeviceId);
  if (value.configData !== undefined) result.configData = jsonValueToTsValueFns.string(value.configData);
  if (value.spacecastToken !== undefined) result.spacecastToken = jsonValueToTsValueFns.string(value.spacecastToken);
  if (value.internalGeo !== undefined) result.internalGeo = jsonValueToTsValueFns.string(value.internalGeo);
  if (value.screenWidthPoints !== undefined) result.screenWidthPoints = jsonValueToTsValueFns.int32(value.screenWidthPoints);
  if (value.screenHeightPoints !== undefined) result.screenHeightPoints = jsonValueToTsValueFns.int32(value.screenHeightPoints);
  if (value.screenWidthInches !== undefined) result.screenWidthInches = jsonValueToTsValueFns.float(value.screenWidthInches);
  if (value.screenHeightInches !== undefined) result.screenHeightInches = jsonValueToTsValueFns.float(value.screenHeightInches);
  if (value.screenPixelDensity !== undefined) result.screenPixelDensity = jsonValueToTsValueFns.int32(value.screenPixelDensity);
  if (value.platform !== undefined) result.platform = jsonValueToTsValueFns.int32(value.platform);
  if (value.spacecastClientInfo !== undefined) result.spacecastClientInfo = decodeJson_1(value.spacecastClientInfo);
  if (value.clientFormFactor !== undefined) result.clientFormFactor = jsonValueToTsValueFns.enum(value.clientFormFactor) as ClientFormFactor;
  if (value.forwardedFor !== undefined) result.forwardedFor = jsonValueToTsValueFns.string(value.forwardedFor);
  if (value.mobileDataPlanInfo !== undefined) result.mobileDataPlanInfo = decodeJson_2(value.mobileDataPlanInfo);
  if (value.gmscoreVersionCode !== undefined) result.gmscoreVersionCode = jsonValueToTsValueFns.int32(value.gmscoreVersionCode);
  if (value.webpSupport !== undefined) result.webpSupport = jsonValueToTsValueFns.bool(value.webpSupport);
  if (value.cameraType !== undefined) result.cameraType = jsonValueToTsValueFns.enum(value.cameraType) as CameraType;
  if (value.experimentsToken !== undefined) result.experimentsToken = jsonValueToTsValueFns.string(value.experimentsToken);
  if (value.windowWidthPoints !== undefined) result.windowWidthPoints = jsonValueToTsValueFns.int32(value.windowWidthPoints);
  if (value.windowHeightPoints !== undefined) result.windowHeightPoints = jsonValueToTsValueFns.int32(value.windowHeightPoints);
  if (value.configInfo !== undefined) result.configInfo = decodeJson_3(value.configInfo);
  if (value.unpluggedLocationInfo !== undefined) result.unpluggedLocationInfo = decodeJson_4(value.unpluggedLocationInfo);
  if (value.androidSdkVersion !== undefined) result.androidSdkVersion = jsonValueToTsValueFns.int32(value.androidSdkVersion);
  if (value.screenDensityFloat !== undefined) result.screenDensityFloat = jsonValueToTsValueFns.float(value.screenDensityFloat);
  if (value.firstTimeSignInExperimentIds !== undefined) result.firstTimeSignInExperimentIds = jsonValueToTsValueFns.int32(value.firstTimeSignInExperimentIds);
  if (value.utcOffsetMinutes !== undefined) result.utcOffsetMinutes = jsonValueToTsValueFns.int32(value.utcOffsetMinutes);
  if (value.animatedWebpSupport !== undefined) result.animatedWebpSupport = jsonValueToTsValueFns.bool(value.animatedWebpSupport);
  if (value.kidsAppInfo !== undefined) result.kidsAppInfo = decodeJson_5(value.kidsAppInfo);
  if (value.musicAppInfo !== undefined) result.musicAppInfo = decodeJson_6(value.musicAppInfo);
  if (value.tvAppInfo !== undefined) result.tvAppInfo = decodeJson_7(value.tvAppInfo);
  if (value.internalGeoIp !== undefined) result.internalGeoIp = jsonValueToTsValueFns.string(value.internalGeoIp);
  if (value.unpluggedAppInfo !== undefined) result.unpluggedAppInfo = decodeJson_8(value.unpluggedAppInfo);
  if (value.locationInfo !== undefined) result.locationInfo = decodeJson_9(value.locationInfo);
  if (value.contentSizeCategory !== undefined) result.contentSizeCategory = jsonValueToTsValueFns.string(value.contentSizeCategory);
  if (value.fontScale !== undefined) result.fontScale = jsonValueToTsValueFns.float(value.fontScale);
  if (value.userInterfaceTheme !== undefined) result.userInterfaceTheme = jsonValueToTsValueFns.enum(value.userInterfaceTheme) as UserInterfaceTheme;
  if (value.timeZone !== undefined) result.timeZone = jsonValueToTsValueFns.string(value.timeZone);
  if (value.homeGroupInfo !== undefined) result.homeGroupInfo = decodeJson_10(value.homeGroupInfo);
  if (value.emlTemplateContext !== undefined) result.emlTemplateContext = jsonValueToTsValueFns.bytes(value.emlTemplateContext);
  if (value.coldAppBundleConfigData !== undefined) result.coldAppBundleConfigData = jsonValueToTsValueFns.bytes(value.coldAppBundleConfigData);
  if (value.browserName !== undefined) result.browserName = jsonValueToTsValueFns.string(value.browserName);
  if (value.browserVersion !== undefined) result.browserVersion = jsonValueToTsValueFns.string(value.browserVersion);
  if (value.locationPlayabilityToken !== undefined) result.locationPlayabilityToken = jsonValueToTsValueFns.string(value.locationPlayabilityToken);
  if (value.chipset !== undefined) result.chipset = jsonValueToTsValueFns.string(value.chipset);
  if (value.firmwareVersion !== undefined) result.firmwareVersion = jsonValueToTsValueFns.string(value.firmwareVersion);
  if (value.memoryTotalKbytes !== undefined) result.memoryTotalKbytes = jsonValueToTsValueFns.int64(value.memoryTotalKbytes);
  if (value.mainAppWebInfo !== undefined) result.mainAppWebInfo = decodeJson_11(value.mainAppWebInfo);
  if (value.notificationPermissionInfo !== undefined) result.notificationPermissionInfo = decodeJson_12(value.notificationPermissionInfo);
  if (value.deviceBrand !== undefined) result.deviceBrand = jsonValueToTsValueFns.string(value.deviceBrand);
  if (value.glDeviceInfo !== undefined) result.glDeviceInfo = decodeJson_13(value.glDeviceInfo);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.hl !== undefined) {
    const tsValue = value.hl;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.gl !== undefined) {
    const tsValue = value.gl;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.remoteHost !== undefined) {
    const tsValue = value.remoteHost;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.deviceId !== undefined) {
    const tsValue = value.deviceId;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.debugDeviceIdOverride !== undefined) {
    const tsValue = value.debugDeviceIdOverride;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.carrierGeo !== undefined) {
    const tsValue = value.carrierGeo;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.crackedHl !== undefined) {
    const tsValue = value.crackedHl;
    result.push(
      [11, tsValueToWireValueFns.bool(tsValue)],
    );
  }
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
  if (value.visitorData !== undefined) {
    const tsValue = value.visitorData;
    result.push(
      [14, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.userAgent !== undefined) {
    const tsValue = value.userAgent;
    result.push(
      [15, tsValueToWireValueFns.string(tsValue)],
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
  if (value.projectId !== undefined) {
    const tsValue = value.projectId;
    result.push(
      [20, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.acceptLanguage !== undefined) {
    const tsValue = value.acceptLanguage;
    result.push(
      [21, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.acceptRegion !== undefined) {
    const tsValue = value.acceptRegion;
    result.push(
      [22, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.originalUrl !== undefined) {
    const tsValue = value.originalUrl;
    result.push(
      [23, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.rawDeviceId !== undefined) {
    const tsValue = value.rawDeviceId;
    result.push(
      [25, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.configData !== undefined) {
    const tsValue = value.configData;
    result.push(
      [27, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.spacecastToken !== undefined) {
    const tsValue = value.spacecastToken;
    result.push(
      [31, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.internalGeo !== undefined) {
    const tsValue = value.internalGeo;
    result.push(
      [34, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.screenWidthPoints !== undefined) {
    const tsValue = value.screenWidthPoints;
    result.push(
      [37, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.screenHeightPoints !== undefined) {
    const tsValue = value.screenHeightPoints;
    result.push(
      [38, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.screenWidthInches !== undefined) {
    const tsValue = value.screenWidthInches;
    result.push(
      [39, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.screenHeightInches !== undefined) {
    const tsValue = value.screenHeightInches;
    result.push(
      [40, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.screenPixelDensity !== undefined) {
    const tsValue = value.screenPixelDensity;
    result.push(
      [41, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.platform !== undefined) {
    const tsValue = value.platform;
    result.push(
      [42, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.spacecastClientInfo !== undefined) {
    const tsValue = value.spacecastClientInfo;
    result.push(
      [45, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.clientFormFactor !== undefined) {
    const tsValue = value.clientFormFactor;
    result.push(
      [46, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.forwardedFor !== undefined) {
    const tsValue = value.forwardedFor;
    result.push(
      [48, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.mobileDataPlanInfo !== undefined) {
    const tsValue = value.mobileDataPlanInfo;
    result.push(
      [49, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.gmscoreVersionCode !== undefined) {
    const tsValue = value.gmscoreVersionCode;
    result.push(
      [50, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.webpSupport !== undefined) {
    const tsValue = value.webpSupport;
    result.push(
      [51, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.cameraType !== undefined) {
    const tsValue = value.cameraType;
    result.push(
      [52, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.experimentsToken !== undefined) {
    const tsValue = value.experimentsToken;
    result.push(
      [54, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.windowWidthPoints !== undefined) {
    const tsValue = value.windowWidthPoints;
    result.push(
      [55, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.windowHeightPoints !== undefined) {
    const tsValue = value.windowHeightPoints;
    result.push(
      [56, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.configInfo !== undefined) {
    const tsValue = value.configInfo;
    result.push(
      [62, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.unpluggedLocationInfo !== undefined) {
    const tsValue = value.unpluggedLocationInfo;
    result.push(
      [63, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.androidSdkVersion !== undefined) {
    const tsValue = value.androidSdkVersion;
    result.push(
      [64, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.screenDensityFloat !== undefined) {
    const tsValue = value.screenDensityFloat;
    result.push(
      [65, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.firstTimeSignInExperimentIds !== undefined) {
    const tsValue = value.firstTimeSignInExperimentIds;
    result.push(
      [66, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.utcOffsetMinutes !== undefined) {
    const tsValue = value.utcOffsetMinutes;
    result.push(
      [67, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.animatedWebpSupport !== undefined) {
    const tsValue = value.animatedWebpSupport;
    result.push(
      [68, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.kidsAppInfo !== undefined) {
    const tsValue = value.kidsAppInfo;
    result.push(
      [69, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.musicAppInfo !== undefined) {
    const tsValue = value.musicAppInfo;
    result.push(
      [70, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  if (value.tvAppInfo !== undefined) {
    const tsValue = value.tvAppInfo;
    result.push(
      [71, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  if (value.internalGeoIp !== undefined) {
    const tsValue = value.internalGeoIp;
    result.push(
      [72, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.unpluggedAppInfo !== undefined) {
    const tsValue = value.unpluggedAppInfo;
    result.push(
      [73, { type: WireType.LengthDelimited as const, value: encodeBinary_8(tsValue) }],
    );
  }
  if (value.locationInfo !== undefined) {
    const tsValue = value.locationInfo;
    result.push(
      [74, { type: WireType.LengthDelimited as const, value: encodeBinary_9(tsValue) }],
    );
  }
  if (value.contentSizeCategory !== undefined) {
    const tsValue = value.contentSizeCategory;
    result.push(
      [76, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.fontScale !== undefined) {
    const tsValue = value.fontScale;
    result.push(
      [77, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.userInterfaceTheme !== undefined) {
    const tsValue = value.userInterfaceTheme;
    result.push(
      [78, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.timeZone !== undefined) {
    const tsValue = value.timeZone;
    result.push(
      [80, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.homeGroupInfo !== undefined) {
    const tsValue = value.homeGroupInfo;
    result.push(
      [81, { type: WireType.LengthDelimited as const, value: encodeBinary_10(tsValue) }],
    );
  }
  if (value.emlTemplateContext !== undefined) {
    const tsValue = value.emlTemplateContext;
    result.push(
      [84, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.coldAppBundleConfigData !== undefined) {
    const tsValue = value.coldAppBundleConfigData;
    result.push(
      [85, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.browserName !== undefined) {
    const tsValue = value.browserName;
    result.push(
      [87, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.browserVersion !== undefined) {
    const tsValue = value.browserVersion;
    result.push(
      [88, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.locationPlayabilityToken !== undefined) {
    const tsValue = value.locationPlayabilityToken;
    result.push(
      [89, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.chipset !== undefined) {
    const tsValue = value.chipset;
    result.push(
      [92, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.firmwareVersion !== undefined) {
    const tsValue = value.firmwareVersion;
    result.push(
      [93, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.memoryTotalKbytes !== undefined) {
    const tsValue = value.memoryTotalKbytes;
    result.push(
      [95, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.mainAppWebInfo !== undefined) {
    const tsValue = value.mainAppWebInfo;
    result.push(
      [96, { type: WireType.LengthDelimited as const, value: encodeBinary_11(tsValue) }],
    );
  }
  if (value.notificationPermissionInfo !== undefined) {
    const tsValue = value.notificationPermissionInfo;
    result.push(
      [97, { type: WireType.LengthDelimited as const, value: encodeBinary_12(tsValue) }],
    );
  }
  if (value.deviceBrand !== undefined) {
    const tsValue = value.deviceBrand;
    result.push(
      [98, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.glDeviceInfo !== undefined) {
    const tsValue = value.glDeviceInfo;
    result.push(
      [102, { type: WireType.LengthDelimited as const, value: encodeBinary_13(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hl = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.gl = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.remoteHost = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceId = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.debugDeviceIdOverride = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.carrierGeo = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.crackedHl = value;
  }
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
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.visitorData = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userAgent = value;
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
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.projectId = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.acceptLanguage = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.acceptRegion = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.originalUrl = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.rawDeviceId = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.configData = value;
  }
  field: {
    const wireValue = wireFields.get(31);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.spacecastToken = value;
  }
  field: {
    const wireValue = wireFields.get(34);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.internalGeo = value;
  }
  field: {
    const wireValue = wireFields.get(37);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.screenWidthPoints = value;
  }
  field: {
    const wireValue = wireFields.get(38);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.screenHeightPoints = value;
  }
  field: {
    const wireValue = wireFields.get(39);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.screenWidthInches = value;
  }
  field: {
    const wireValue = wireFields.get(40);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.screenHeightInches = value;
  }
  field: {
    const wireValue = wireFields.get(41);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.screenPixelDensity = value;
  }
  field: {
    const wireValue = wireFields.get(42);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.platform = value;
  }
  field: {
    const wireValue = wireFields.get(45);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.spacecastClientInfo = value;
  }
  field: {
    const wireValue = wireFields.get(46);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.clientFormFactor = value;
  }
  field: {
    const wireValue = wireFields.get(48);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.forwardedFor = value;
  }
  field: {
    const wireValue = wireFields.get(49);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.mobileDataPlanInfo = value;
  }
  field: {
    const wireValue = wireFields.get(50);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.gmscoreVersionCode = value;
  }
  field: {
    const wireValue = wireFields.get(51);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.webpSupport = value;
  }
  field: {
    const wireValue = wireFields.get(52);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.cameraType = value;
  }
  field: {
    const wireValue = wireFields.get(54);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.experimentsToken = value;
  }
  field: {
    const wireValue = wireFields.get(55);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.windowWidthPoints = value;
  }
  field: {
    const wireValue = wireFields.get(56);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.windowHeightPoints = value;
  }
  field: {
    const wireValue = wireFields.get(62);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.configInfo = value;
  }
  field: {
    const wireValue = wireFields.get(63);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.unpluggedLocationInfo = value;
  }
  field: {
    const wireValue = wireFields.get(64);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.androidSdkVersion = value;
  }
  field: {
    const wireValue = wireFields.get(65);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.screenDensityFloat = value;
  }
  field: {
    const wireValue = wireFields.get(66);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.firstTimeSignInExperimentIds = value;
  }
  field: {
    const wireValue = wireFields.get(67);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.utcOffsetMinutes = value;
  }
  field: {
    const wireValue = wireFields.get(68);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.animatedWebpSupport = value;
  }
  field: {
    const wireValue = wireFields.get(69);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.kidsAppInfo = value;
  }
  field: {
    const wireValue = wireFields.get(70);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.musicAppInfo = value;
  }
  field: {
    const wireValue = wireFields.get(71);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.tvAppInfo = value;
  }
  field: {
    const wireValue = wireFields.get(72);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.internalGeoIp = value;
  }
  field: {
    const wireValue = wireFields.get(73);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_8(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.unpluggedAppInfo = value;
  }
  field: {
    const wireValue = wireFields.get(74);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_9(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.locationInfo = value;
  }
  field: {
    const wireValue = wireFields.get(76);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contentSizeCategory = value;
  }
  field: {
    const wireValue = wireFields.get(77);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.fontScale = value;
  }
  field: {
    const wireValue = wireFields.get(78);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.userInterfaceTheme = value;
  }
  field: {
    const wireValue = wireFields.get(80);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.timeZone = value;
  }
  field: {
    const wireValue = wireFields.get(81);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_10(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.homeGroupInfo = value;
  }
  field: {
    const wireValue = wireFields.get(84);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.emlTemplateContext = value;
  }
  field: {
    const wireValue = wireFields.get(85);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.coldAppBundleConfigData = value;
  }
  field: {
    const wireValue = wireFields.get(87);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.browserName = value;
  }
  field: {
    const wireValue = wireFields.get(88);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.browserVersion = value;
  }
  field: {
    const wireValue = wireFields.get(89);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.locationPlayabilityToken = value;
  }
  field: {
    const wireValue = wireFields.get(92);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.chipset = value;
  }
  field: {
    const wireValue = wireFields.get(93);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.firmwareVersion = value;
  }
  field: {
    const wireValue = wireFields.get(95);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.memoryTotalKbytes = value;
  }
  field: {
    const wireValue = wireFields.get(96);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_11(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.mainAppWebInfo = value;
  }
  field: {
    const wireValue = wireFields.get(97);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_12(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.notificationPermissionInfo = value;
  }
  field: {
    const wireValue = wireFields.get(98);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceBrand = value;
  }
  field: {
    const wireValue = wireFields.get(102);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_13(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.glDeviceInfo = value;
  }
  return result;
}
