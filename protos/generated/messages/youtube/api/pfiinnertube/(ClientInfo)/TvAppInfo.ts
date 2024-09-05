import {
  Type as VoiceCapability,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(TvAppInfo)/VoiceCapability.js";
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
  export type TvAppInfo = {
    mdxImpactedSessionsServerEvents?: string;
    enablePrivacyFilter?: boolean;
    zylonLeftNav?: boolean;
    certificationScope?: string;
    livingRoomPoTokenId?: string;
    jsEngineString?: string;
    voiceCapability?: VoiceCapability;
    systemIntegrator?: string;
    androidBuildFingerprint?: string;
    cobaltAppVersion?: string;
    cobaltStarboardVersion?: string;
    useStartPlaybackPreviewCommand?: boolean;
    shouldShowPersistentSigninOnHome?: boolean;
    androidPlayServicesVersion?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo {
  return {
    mdxImpactedSessionsServerEvents: undefined,
    enablePrivacyFilter: undefined,
    zylonLeftNav: undefined,
    certificationScope: undefined,
    livingRoomPoTokenId: undefined,
    jsEngineString: undefined,
    voiceCapability: undefined,
    systemIntegrator: undefined,
    androidBuildFingerprint: undefined,
    cobaltAppVersion: undefined,
    cobaltStarboardVersion: undefined,
    useStartPlaybackPreviewCommand: undefined,
    shouldShowPersistentSigninOnHome: undefined,
    androidPlayServicesVersion: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.TvAppInfo>): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo): unknown {
  const result: any = {};
  if (value.mdxImpactedSessionsServerEvents !== undefined) result.mdxImpactedSessionsServerEvents = tsValueToJsonValueFns.string(value.mdxImpactedSessionsServerEvents);
  if (value.enablePrivacyFilter !== undefined) result.enablePrivacyFilter = tsValueToJsonValueFns.bool(value.enablePrivacyFilter);
  if (value.zylonLeftNav !== undefined) result.zylonLeftNav = tsValueToJsonValueFns.bool(value.zylonLeftNav);
  if (value.certificationScope !== undefined) result.certificationScope = tsValueToJsonValueFns.string(value.certificationScope);
  if (value.livingRoomPoTokenId !== undefined) result.livingRoomPoTokenId = tsValueToJsonValueFns.string(value.livingRoomPoTokenId);
  if (value.jsEngineString !== undefined) result.jsEngineString = tsValueToJsonValueFns.string(value.jsEngineString);
  if (value.voiceCapability !== undefined) result.voiceCapability = encodeJson_1(value.voiceCapability);
  if (value.systemIntegrator !== undefined) result.systemIntegrator = tsValueToJsonValueFns.string(value.systemIntegrator);
  if (value.androidBuildFingerprint !== undefined) result.androidBuildFingerprint = tsValueToJsonValueFns.string(value.androidBuildFingerprint);
  if (value.cobaltAppVersion !== undefined) result.cobaltAppVersion = tsValueToJsonValueFns.string(value.cobaltAppVersion);
  if (value.cobaltStarboardVersion !== undefined) result.cobaltStarboardVersion = tsValueToJsonValueFns.string(value.cobaltStarboardVersion);
  if (value.useStartPlaybackPreviewCommand !== undefined) result.useStartPlaybackPreviewCommand = tsValueToJsonValueFns.bool(value.useStartPlaybackPreviewCommand);
  if (value.shouldShowPersistentSigninOnHome !== undefined) result.shouldShowPersistentSigninOnHome = tsValueToJsonValueFns.bool(value.shouldShowPersistentSigninOnHome);
  if (value.androidPlayServicesVersion !== undefined) result.androidPlayServicesVersion = tsValueToJsonValueFns.string(value.androidPlayServicesVersion);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo {
  const result = getDefaultValue();
  if (value.mdxImpactedSessionsServerEvents !== undefined) result.mdxImpactedSessionsServerEvents = jsonValueToTsValueFns.string(value.mdxImpactedSessionsServerEvents);
  if (value.enablePrivacyFilter !== undefined) result.enablePrivacyFilter = jsonValueToTsValueFns.bool(value.enablePrivacyFilter);
  if (value.zylonLeftNav !== undefined) result.zylonLeftNav = jsonValueToTsValueFns.bool(value.zylonLeftNav);
  if (value.certificationScope !== undefined) result.certificationScope = jsonValueToTsValueFns.string(value.certificationScope);
  if (value.livingRoomPoTokenId !== undefined) result.livingRoomPoTokenId = jsonValueToTsValueFns.string(value.livingRoomPoTokenId);
  if (value.jsEngineString !== undefined) result.jsEngineString = jsonValueToTsValueFns.string(value.jsEngineString);
  if (value.voiceCapability !== undefined) result.voiceCapability = decodeJson_1(value.voiceCapability);
  if (value.systemIntegrator !== undefined) result.systemIntegrator = jsonValueToTsValueFns.string(value.systemIntegrator);
  if (value.androidBuildFingerprint !== undefined) result.androidBuildFingerprint = jsonValueToTsValueFns.string(value.androidBuildFingerprint);
  if (value.cobaltAppVersion !== undefined) result.cobaltAppVersion = jsonValueToTsValueFns.string(value.cobaltAppVersion);
  if (value.cobaltStarboardVersion !== undefined) result.cobaltStarboardVersion = jsonValueToTsValueFns.string(value.cobaltStarboardVersion);
  if (value.useStartPlaybackPreviewCommand !== undefined) result.useStartPlaybackPreviewCommand = jsonValueToTsValueFns.bool(value.useStartPlaybackPreviewCommand);
  if (value.shouldShowPersistentSigninOnHome !== undefined) result.shouldShowPersistentSigninOnHome = jsonValueToTsValueFns.bool(value.shouldShowPersistentSigninOnHome);
  if (value.androidPlayServicesVersion !== undefined) result.androidPlayServicesVersion = jsonValueToTsValueFns.string(value.androidPlayServicesVersion);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.mdxImpactedSessionsServerEvents !== undefined) {
    const tsValue = value.mdxImpactedSessionsServerEvents;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.enablePrivacyFilter !== undefined) {
    const tsValue = value.enablePrivacyFilter;
    result.push(
      [6, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.zylonLeftNav !== undefined) {
    const tsValue = value.zylonLeftNav;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.certificationScope !== undefined) {
    const tsValue = value.certificationScope;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.livingRoomPoTokenId !== undefined) {
    const tsValue = value.livingRoomPoTokenId;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.jsEngineString !== undefined) {
    const tsValue = value.jsEngineString;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.voiceCapability !== undefined) {
    const tsValue = value.voiceCapability;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.systemIntegrator !== undefined) {
    const tsValue = value.systemIntegrator;
    result.push(
      [14, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.androidBuildFingerprint !== undefined) {
    const tsValue = value.androidBuildFingerprint;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.cobaltAppVersion !== undefined) {
    const tsValue = value.cobaltAppVersion;
    result.push(
      [19, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.cobaltStarboardVersion !== undefined) {
    const tsValue = value.cobaltStarboardVersion;
    result.push(
      [20, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.useStartPlaybackPreviewCommand !== undefined) {
    const tsValue = value.useStartPlaybackPreviewCommand;
    result.push(
      [22, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.shouldShowPersistentSigninOnHome !== undefined) {
    const tsValue = value.shouldShowPersistentSigninOnHome;
    result.push(
      [23, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.androidPlayServicesVersion !== undefined) {
    const tsValue = value.androidPlayServicesVersion;
    result.push(
      [24, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mdxImpactedSessionsServerEvents = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enablePrivacyFilter = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.zylonLeftNav = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.certificationScope = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.livingRoomPoTokenId = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.jsEngineString = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.voiceCapability = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.systemIntegrator = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.androidBuildFingerprint = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.cobaltAppVersion = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.cobaltStarboardVersion = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.useStartPlaybackPreviewCommand = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.shouldShowPersistentSigninOnHome = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.androidPlayServicesVersion = value;
  }
  return result;
}
