import {
  Type as InnerTubeContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InnerTubeContext.js";
import {
  Type as PlaybackContext,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./PlaybackContext.js";
import {
  Type as PlayerAttestationRequestData,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./PlayerAttestationRequestData.js";
import {
  Type as PlayerRequestCaptionParams,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./PlayerRequestCaptionParams.js";
import {
  Type as ServiceIntegrityDimensions,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./ServiceIntegrityDimensions.js";
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
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type PlayerRequest = {
    context?: InnerTubeContext;
    videoId?: string;
    contentCheckOk?: boolean;
    playbackContext?: PlaybackContext;
    racyCheckOk?: boolean;
    id?: string;
    t?: string;
    forOffline?: boolean;
    playlistId?: string;
    playlistIndex?: number;
    startTimeSecs?: number;
    params?: string;
    offlineSharingWrappedKey?: Uint8Array;
    attestationRequest?: PlayerAttestationRequestData;
    referringApp?: string;
    referrer?: string;
    serializedThirdPartyEmbedConfig?: string;
    proxiedByOnesie?: boolean;
    hostAppToken?: string;
    cpn?: string;
    overrideMutedAtStart?: boolean;
    captionParams?: PlayerRequestCaptionParams;
    serviceIntegrityDimensions?: ServiceIntegrityDimensions;
    deferredPlayerToken?: Uint8Array;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlayerRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlayerRequest {
  return {
    context: undefined,
    videoId: undefined,
    contentCheckOk: undefined,
    playbackContext: undefined,
    racyCheckOk: undefined,
    id: undefined,
    t: undefined,
    forOffline: undefined,
    playlistId: undefined,
    playlistIndex: undefined,
    startTimeSecs: undefined,
    params: undefined,
    offlineSharingWrappedKey: undefined,
    attestationRequest: undefined,
    referringApp: undefined,
    referrer: undefined,
    serializedThirdPartyEmbedConfig: undefined,
    proxiedByOnesie: undefined,
    hostAppToken: undefined,
    cpn: undefined,
    overrideMutedAtStart: undefined,
    captionParams: undefined,
    serviceIntegrityDimensions: undefined,
    deferredPlayerToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlayerRequest>): $.youtube.api.pfiinnertube.PlayerRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlayerRequest): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.contentCheckOk !== undefined) result.contentCheckOk = tsValueToJsonValueFns.bool(value.contentCheckOk);
  if (value.playbackContext !== undefined) result.playbackContext = encodeJson_2(value.playbackContext);
  if (value.racyCheckOk !== undefined) result.racyCheckOk = tsValueToJsonValueFns.bool(value.racyCheckOk);
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.t !== undefined) result.t = tsValueToJsonValueFns.string(value.t);
  if (value.forOffline !== undefined) result.forOffline = tsValueToJsonValueFns.bool(value.forOffline);
  if (value.playlistId !== undefined) result.playlistId = tsValueToJsonValueFns.string(value.playlistId);
  if (value.playlistIndex !== undefined) result.playlistIndex = tsValueToJsonValueFns.int32(value.playlistIndex);
  if (value.startTimeSecs !== undefined) result.startTimeSecs = tsValueToJsonValueFns.uint32(value.startTimeSecs);
  if (value.params !== undefined) result.params = tsValueToJsonValueFns.string(value.params);
  if (value.offlineSharingWrappedKey !== undefined) result.offlineSharingWrappedKey = tsValueToJsonValueFns.bytes(value.offlineSharingWrappedKey);
  if (value.attestationRequest !== undefined) result.attestationRequest = encodeJson_3(value.attestationRequest);
  if (value.referringApp !== undefined) result.referringApp = tsValueToJsonValueFns.string(value.referringApp);
  if (value.referrer !== undefined) result.referrer = tsValueToJsonValueFns.string(value.referrer);
  if (value.serializedThirdPartyEmbedConfig !== undefined) result.serializedThirdPartyEmbedConfig = tsValueToJsonValueFns.string(value.serializedThirdPartyEmbedConfig);
  if (value.proxiedByOnesie !== undefined) result.proxiedByOnesie = tsValueToJsonValueFns.bool(value.proxiedByOnesie);
  if (value.hostAppToken !== undefined) result.hostAppToken = tsValueToJsonValueFns.string(value.hostAppToken);
  if (value.cpn !== undefined) result.cpn = tsValueToJsonValueFns.string(value.cpn);
  if (value.overrideMutedAtStart !== undefined) result.overrideMutedAtStart = tsValueToJsonValueFns.bool(value.overrideMutedAtStart);
  if (value.captionParams !== undefined) result.captionParams = encodeJson_4(value.captionParams);
  if (value.serviceIntegrityDimensions !== undefined) result.serviceIntegrityDimensions = encodeJson_5(value.serviceIntegrityDimensions);
  if (value.deferredPlayerToken !== undefined) result.deferredPlayerToken = tsValueToJsonValueFns.bytes(value.deferredPlayerToken);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlayerRequest {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.contentCheckOk !== undefined) result.contentCheckOk = jsonValueToTsValueFns.bool(value.contentCheckOk);
  if (value.playbackContext !== undefined) result.playbackContext = decodeJson_2(value.playbackContext);
  if (value.racyCheckOk !== undefined) result.racyCheckOk = jsonValueToTsValueFns.bool(value.racyCheckOk);
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.t !== undefined) result.t = jsonValueToTsValueFns.string(value.t);
  if (value.forOffline !== undefined) result.forOffline = jsonValueToTsValueFns.bool(value.forOffline);
  if (value.playlistId !== undefined) result.playlistId = jsonValueToTsValueFns.string(value.playlistId);
  if (value.playlistIndex !== undefined) result.playlistIndex = jsonValueToTsValueFns.int32(value.playlistIndex);
  if (value.startTimeSecs !== undefined) result.startTimeSecs = jsonValueToTsValueFns.uint32(value.startTimeSecs);
  if (value.params !== undefined) result.params = jsonValueToTsValueFns.string(value.params);
  if (value.offlineSharingWrappedKey !== undefined) result.offlineSharingWrappedKey = jsonValueToTsValueFns.bytes(value.offlineSharingWrappedKey);
  if (value.attestationRequest !== undefined) result.attestationRequest = decodeJson_3(value.attestationRequest);
  if (value.referringApp !== undefined) result.referringApp = jsonValueToTsValueFns.string(value.referringApp);
  if (value.referrer !== undefined) result.referrer = jsonValueToTsValueFns.string(value.referrer);
  if (value.serializedThirdPartyEmbedConfig !== undefined) result.serializedThirdPartyEmbedConfig = jsonValueToTsValueFns.string(value.serializedThirdPartyEmbedConfig);
  if (value.proxiedByOnesie !== undefined) result.proxiedByOnesie = jsonValueToTsValueFns.bool(value.proxiedByOnesie);
  if (value.hostAppToken !== undefined) result.hostAppToken = jsonValueToTsValueFns.string(value.hostAppToken);
  if (value.cpn !== undefined) result.cpn = jsonValueToTsValueFns.string(value.cpn);
  if (value.overrideMutedAtStart !== undefined) result.overrideMutedAtStart = jsonValueToTsValueFns.bool(value.overrideMutedAtStart);
  if (value.captionParams !== undefined) result.captionParams = decodeJson_4(value.captionParams);
  if (value.serviceIntegrityDimensions !== undefined) result.serviceIntegrityDimensions = decodeJson_5(value.serviceIntegrityDimensions);
  if (value.deferredPlayerToken !== undefined) result.deferredPlayerToken = jsonValueToTsValueFns.bytes(value.deferredPlayerToken);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlayerRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contentCheckOk !== undefined) {
    const tsValue = value.contentCheckOk;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playbackContext !== undefined) {
    const tsValue = value.playbackContext;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.racyCheckOk !== undefined) {
    const tsValue = value.racyCheckOk;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.t !== undefined) {
    const tsValue = value.t;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.forOffline !== undefined) {
    const tsValue = value.forOffline;
    result.push(
      [8, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playlistId !== undefined) {
    const tsValue = value.playlistId;
    result.push(
      [9, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.playlistIndex !== undefined) {
    const tsValue = value.playlistIndex;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.startTimeSecs !== undefined) {
    const tsValue = value.startTimeSecs;
    result.push(
      [11, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.offlineSharingWrappedKey !== undefined) {
    const tsValue = value.offlineSharingWrappedKey;
    result.push(
      [14, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.attestationRequest !== undefined) {
    const tsValue = value.attestationRequest;
    result.push(
      [16, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.referringApp !== undefined) {
    const tsValue = value.referringApp;
    result.push(
      [17, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.referrer !== undefined) {
    const tsValue = value.referrer;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.serializedThirdPartyEmbedConfig !== undefined) {
    const tsValue = value.serializedThirdPartyEmbedConfig;
    result.push(
      [19, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.proxiedByOnesie !== undefined) {
    const tsValue = value.proxiedByOnesie;
    result.push(
      [20, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.hostAppToken !== undefined) {
    const tsValue = value.hostAppToken;
    result.push(
      [22, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.cpn !== undefined) {
    const tsValue = value.cpn;
    result.push(
      [23, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.overrideMutedAtStart !== undefined) {
    const tsValue = value.overrideMutedAtStart;
    result.push(
      [25, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.captionParams !== undefined) {
    const tsValue = value.captionParams;
    result.push(
      [26, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.serviceIntegrityDimensions !== undefined) {
    const tsValue = value.serviceIntegrityDimensions;
    result.push(
      [27, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.deferredPlayerToken !== undefined) {
    const tsValue = value.deferredPlayerToken;
    result.push(
      [29, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlayerRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.contentCheckOk = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.playbackContext = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.racyCheckOk = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.t = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.forOffline = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.playlistId = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.playlistIndex = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.startTimeSecs = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.offlineSharingWrappedKey = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.attestationRequest = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.referringApp = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.referrer = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.serializedThirdPartyEmbedConfig = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.proxiedByOnesie = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hostAppToken = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.cpn = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.overrideMutedAtStart = value;
  }
  field: {
    const wireValue = wireFields.get(26);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.captionParams = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.serviceIntegrityDimensions = value;
  }
  field: {
    const wireValue = wireFields.get(29);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.deferredPlayerToken = value;
  }
  return result;
}
