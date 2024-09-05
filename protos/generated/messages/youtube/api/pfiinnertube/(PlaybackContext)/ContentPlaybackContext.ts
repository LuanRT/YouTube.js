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

export declare namespace $.youtube.api.pfiinnertube.PlaybackContext {
  export type ContentPlaybackContext = {
    deviceSignals?: string;
    revShareClientId?: string;
    timeSinceLastAdSeconds?: number;
    lactMilliseconds?: string;
    autoplaysSinceLastAd?: number;
    vis?: number;
    fling?: boolean;
    splay?: boolean;
    autoplay?: boolean;
    timeOfLastInstreamPrerollAd?: string;
    currentUrl?: string;
    referer?: string;
    loadAnnotationsByDemand?: boolean;
    autoCaptionsDefaultOn?: boolean;
    slicedBread?: boolean;
    autonav?: boolean;
    trailer?: boolean;
    playerWidthPixels?: number;
    playerHeightPixels?: number;
    snd?: number;
    vnd?: number;
    uao?: number;
    mutedAutoplay?: boolean;
    enablePrivacyFilter?: boolean;
    isLivingRoomDeeplink?: boolean;
    signatureTimestamp?: number;
    isInlinePlaybackNoAd?: boolean;
    isInlineUnmutedPlayback?: boolean;
    playPackageVersion?: string;
    isSequenceEntry?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext {
  return {
    deviceSignals: undefined,
    revShareClientId: undefined,
    timeSinceLastAdSeconds: undefined,
    lactMilliseconds: undefined,
    autoplaysSinceLastAd: undefined,
    vis: undefined,
    fling: undefined,
    splay: undefined,
    autoplay: undefined,
    timeOfLastInstreamPrerollAd: undefined,
    currentUrl: undefined,
    referer: undefined,
    loadAnnotationsByDemand: undefined,
    autoCaptionsDefaultOn: undefined,
    slicedBread: undefined,
    autonav: undefined,
    trailer: undefined,
    playerWidthPixels: undefined,
    playerHeightPixels: undefined,
    snd: undefined,
    vnd: undefined,
    uao: undefined,
    mutedAutoplay: undefined,
    enablePrivacyFilter: undefined,
    isLivingRoomDeeplink: undefined,
    signatureTimestamp: undefined,
    isInlinePlaybackNoAd: undefined,
    isInlineUnmutedPlayback: undefined,
    playPackageVersion: undefined,
    isSequenceEntry: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext>): $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext): unknown {
  const result: any = {};
  if (value.deviceSignals !== undefined) result.deviceSignals = tsValueToJsonValueFns.string(value.deviceSignals);
  if (value.revShareClientId !== undefined) result.revShareClientId = tsValueToJsonValueFns.string(value.revShareClientId);
  if (value.timeSinceLastAdSeconds !== undefined) result.timeSinceLastAdSeconds = tsValueToJsonValueFns.uint32(value.timeSinceLastAdSeconds);
  if (value.lactMilliseconds !== undefined) result.lactMilliseconds = tsValueToJsonValueFns.int64(value.lactMilliseconds);
  if (value.autoplaysSinceLastAd !== undefined) result.autoplaysSinceLastAd = tsValueToJsonValueFns.uint32(value.autoplaysSinceLastAd);
  if (value.vis !== undefined) result.vis = tsValueToJsonValueFns.uint32(value.vis);
  if (value.fling !== undefined) result.fling = tsValueToJsonValueFns.bool(value.fling);
  if (value.splay !== undefined) result.splay = tsValueToJsonValueFns.bool(value.splay);
  if (value.autoplay !== undefined) result.autoplay = tsValueToJsonValueFns.bool(value.autoplay);
  if (value.timeOfLastInstreamPrerollAd !== undefined) result.timeOfLastInstreamPrerollAd = tsValueToJsonValueFns.uint64(value.timeOfLastInstreamPrerollAd);
  if (value.currentUrl !== undefined) result.currentUrl = tsValueToJsonValueFns.string(value.currentUrl);
  if (value.referer !== undefined) result.referer = tsValueToJsonValueFns.string(value.referer);
  if (value.loadAnnotationsByDemand !== undefined) result.loadAnnotationsByDemand = tsValueToJsonValueFns.bool(value.loadAnnotationsByDemand);
  if (value.autoCaptionsDefaultOn !== undefined) result.autoCaptionsDefaultOn = tsValueToJsonValueFns.bool(value.autoCaptionsDefaultOn);
  if (value.slicedBread !== undefined) result.slicedBread = tsValueToJsonValueFns.bool(value.slicedBread);
  if (value.autonav !== undefined) result.autonav = tsValueToJsonValueFns.bool(value.autonav);
  if (value.trailer !== undefined) result.trailer = tsValueToJsonValueFns.bool(value.trailer);
  if (value.playerWidthPixels !== undefined) result.playerWidthPixels = tsValueToJsonValueFns.int32(value.playerWidthPixels);
  if (value.playerHeightPixels !== undefined) result.playerHeightPixels = tsValueToJsonValueFns.int32(value.playerHeightPixels);
  if (value.snd !== undefined) result.snd = tsValueToJsonValueFns.int32(value.snd);
  if (value.vnd !== undefined) result.vnd = tsValueToJsonValueFns.int32(value.vnd);
  if (value.uao !== undefined) result.uao = tsValueToJsonValueFns.int32(value.uao);
  if (value.mutedAutoplay !== undefined) result.mutedAutoplay = tsValueToJsonValueFns.bool(value.mutedAutoplay);
  if (value.enablePrivacyFilter !== undefined) result.enablePrivacyFilter = tsValueToJsonValueFns.bool(value.enablePrivacyFilter);
  if (value.isLivingRoomDeeplink !== undefined) result.isLivingRoomDeeplink = tsValueToJsonValueFns.bool(value.isLivingRoomDeeplink);
  if (value.signatureTimestamp !== undefined) result.signatureTimestamp = tsValueToJsonValueFns.uint32(value.signatureTimestamp);
  if (value.isInlinePlaybackNoAd !== undefined) result.isInlinePlaybackNoAd = tsValueToJsonValueFns.bool(value.isInlinePlaybackNoAd);
  if (value.isInlineUnmutedPlayback !== undefined) result.isInlineUnmutedPlayback = tsValueToJsonValueFns.bool(value.isInlineUnmutedPlayback);
  if (value.playPackageVersion !== undefined) result.playPackageVersion = tsValueToJsonValueFns.int64(value.playPackageVersion);
  if (value.isSequenceEntry !== undefined) result.isSequenceEntry = tsValueToJsonValueFns.bool(value.isSequenceEntry);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext {
  const result = getDefaultValue();
  if (value.deviceSignals !== undefined) result.deviceSignals = jsonValueToTsValueFns.string(value.deviceSignals);
  if (value.revShareClientId !== undefined) result.revShareClientId = jsonValueToTsValueFns.string(value.revShareClientId);
  if (value.timeSinceLastAdSeconds !== undefined) result.timeSinceLastAdSeconds = jsonValueToTsValueFns.uint32(value.timeSinceLastAdSeconds);
  if (value.lactMilliseconds !== undefined) result.lactMilliseconds = jsonValueToTsValueFns.int64(value.lactMilliseconds);
  if (value.autoplaysSinceLastAd !== undefined) result.autoplaysSinceLastAd = jsonValueToTsValueFns.uint32(value.autoplaysSinceLastAd);
  if (value.vis !== undefined) result.vis = jsonValueToTsValueFns.uint32(value.vis);
  if (value.fling !== undefined) result.fling = jsonValueToTsValueFns.bool(value.fling);
  if (value.splay !== undefined) result.splay = jsonValueToTsValueFns.bool(value.splay);
  if (value.autoplay !== undefined) result.autoplay = jsonValueToTsValueFns.bool(value.autoplay);
  if (value.timeOfLastInstreamPrerollAd !== undefined) result.timeOfLastInstreamPrerollAd = jsonValueToTsValueFns.uint64(value.timeOfLastInstreamPrerollAd);
  if (value.currentUrl !== undefined) result.currentUrl = jsonValueToTsValueFns.string(value.currentUrl);
  if (value.referer !== undefined) result.referer = jsonValueToTsValueFns.string(value.referer);
  if (value.loadAnnotationsByDemand !== undefined) result.loadAnnotationsByDemand = jsonValueToTsValueFns.bool(value.loadAnnotationsByDemand);
  if (value.autoCaptionsDefaultOn !== undefined) result.autoCaptionsDefaultOn = jsonValueToTsValueFns.bool(value.autoCaptionsDefaultOn);
  if (value.slicedBread !== undefined) result.slicedBread = jsonValueToTsValueFns.bool(value.slicedBread);
  if (value.autonav !== undefined) result.autonav = jsonValueToTsValueFns.bool(value.autonav);
  if (value.trailer !== undefined) result.trailer = jsonValueToTsValueFns.bool(value.trailer);
  if (value.playerWidthPixels !== undefined) result.playerWidthPixels = jsonValueToTsValueFns.int32(value.playerWidthPixels);
  if (value.playerHeightPixels !== undefined) result.playerHeightPixels = jsonValueToTsValueFns.int32(value.playerHeightPixels);
  if (value.snd !== undefined) result.snd = jsonValueToTsValueFns.int32(value.snd);
  if (value.vnd !== undefined) result.vnd = jsonValueToTsValueFns.int32(value.vnd);
  if (value.uao !== undefined) result.uao = jsonValueToTsValueFns.int32(value.uao);
  if (value.mutedAutoplay !== undefined) result.mutedAutoplay = jsonValueToTsValueFns.bool(value.mutedAutoplay);
  if (value.enablePrivacyFilter !== undefined) result.enablePrivacyFilter = jsonValueToTsValueFns.bool(value.enablePrivacyFilter);
  if (value.isLivingRoomDeeplink !== undefined) result.isLivingRoomDeeplink = jsonValueToTsValueFns.bool(value.isLivingRoomDeeplink);
  if (value.signatureTimestamp !== undefined) result.signatureTimestamp = jsonValueToTsValueFns.uint32(value.signatureTimestamp);
  if (value.isInlinePlaybackNoAd !== undefined) result.isInlinePlaybackNoAd = jsonValueToTsValueFns.bool(value.isInlinePlaybackNoAd);
  if (value.isInlineUnmutedPlayback !== undefined) result.isInlineUnmutedPlayback = jsonValueToTsValueFns.bool(value.isInlineUnmutedPlayback);
  if (value.playPackageVersion !== undefined) result.playPackageVersion = jsonValueToTsValueFns.int64(value.playPackageVersion);
  if (value.isSequenceEntry !== undefined) result.isSequenceEntry = jsonValueToTsValueFns.bool(value.isSequenceEntry);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext): Uint8Array {
  const result: WireMessage = [];
  if (value.deviceSignals !== undefined) {
    const tsValue = value.deviceSignals;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.revShareClientId !== undefined) {
    const tsValue = value.revShareClientId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timeSinceLastAdSeconds !== undefined) {
    const tsValue = value.timeSinceLastAdSeconds;
    result.push(
      [4, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.lactMilliseconds !== undefined) {
    const tsValue = value.lactMilliseconds;
    result.push(
      [5, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.autoplaysSinceLastAd !== undefined) {
    const tsValue = value.autoplaysSinceLastAd;
    result.push(
      [6, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.vis !== undefined) {
    const tsValue = value.vis;
    result.push(
      [8, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.fling !== undefined) {
    const tsValue = value.fling;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.splay !== undefined) {
    const tsValue = value.splay;
    result.push(
      [10, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.autoplay !== undefined) {
    const tsValue = value.autoplay;
    result.push(
      [11, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.timeOfLastInstreamPrerollAd !== undefined) {
    const tsValue = value.timeOfLastInstreamPrerollAd;
    result.push(
      [13, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.currentUrl !== undefined) {
    const tsValue = value.currentUrl;
    result.push(
      [15, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.referer !== undefined) {
    const tsValue = value.referer;
    result.push(
      [16, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.loadAnnotationsByDemand !== undefined) {
    const tsValue = value.loadAnnotationsByDemand;
    result.push(
      [23, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.autoCaptionsDefaultOn !== undefined) {
    const tsValue = value.autoCaptionsDefaultOn;
    result.push(
      [24, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.slicedBread !== undefined) {
    const tsValue = value.slicedBread;
    result.push(
      [27, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.autonav !== undefined) {
    const tsValue = value.autonav;
    result.push(
      [29, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.trailer !== undefined) {
    const tsValue = value.trailer;
    result.push(
      [30, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playerWidthPixels !== undefined) {
    const tsValue = value.playerWidthPixels;
    result.push(
      [34, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.playerHeightPixels !== undefined) {
    const tsValue = value.playerHeightPixels;
    result.push(
      [35, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.snd !== undefined) {
    const tsValue = value.snd;
    result.push(
      [37, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.vnd !== undefined) {
    const tsValue = value.vnd;
    result.push(
      [38, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.uao !== undefined) {
    const tsValue = value.uao;
    result.push(
      [41, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.mutedAutoplay !== undefined) {
    const tsValue = value.mutedAutoplay;
    result.push(
      [44, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.enablePrivacyFilter !== undefined) {
    const tsValue = value.enablePrivacyFilter;
    result.push(
      [46, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isLivingRoomDeeplink !== undefined) {
    const tsValue = value.isLivingRoomDeeplink;
    result.push(
      [47, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.signatureTimestamp !== undefined) {
    const tsValue = value.signatureTimestamp;
    result.push(
      [48, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.isInlinePlaybackNoAd !== undefined) {
    const tsValue = value.isInlinePlaybackNoAd;
    result.push(
      [50, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isInlineUnmutedPlayback !== undefined) {
    const tsValue = value.isInlineUnmutedPlayback;
    result.push(
      [51, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playPackageVersion !== undefined) {
    const tsValue = value.playPackageVersion;
    result.push(
      [55, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.isSequenceEntry !== undefined) {
    const tsValue = value.isSequenceEntry;
    result.push(
      [60, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlaybackContext.ContentPlaybackContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceSignals = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.revShareClientId = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.timeSinceLastAdSeconds = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.lactMilliseconds = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.autoplaysSinceLastAd = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.vis = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.fling = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.splay = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.autoplay = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.timeOfLastInstreamPrerollAd = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.currentUrl = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.referer = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.loadAnnotationsByDemand = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.autoCaptionsDefaultOn = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.slicedBread = value;
  }
  field: {
    const wireValue = wireFields.get(29);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.autonav = value;
  }
  field: {
    const wireValue = wireFields.get(30);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.trailer = value;
  }
  field: {
    const wireValue = wireFields.get(34);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.playerWidthPixels = value;
  }
  field: {
    const wireValue = wireFields.get(35);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.playerHeightPixels = value;
  }
  field: {
    const wireValue = wireFields.get(37);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.snd = value;
  }
  field: {
    const wireValue = wireFields.get(38);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.vnd = value;
  }
  field: {
    const wireValue = wireFields.get(41);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.uao = value;
  }
  field: {
    const wireValue = wireFields.get(44);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.mutedAutoplay = value;
  }
  field: {
    const wireValue = wireFields.get(46);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enablePrivacyFilter = value;
  }
  field: {
    const wireValue = wireFields.get(47);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isLivingRoomDeeplink = value;
  }
  field: {
    const wireValue = wireFields.get(48);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.signatureTimestamp = value;
  }
  field: {
    const wireValue = wireFields.get(50);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isInlinePlaybackNoAd = value;
  }
  field: {
    const wireValue = wireFields.get(51);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isInlineUnmutedPlayback = value;
  }
  field: {
    const wireValue = wireFields.get(55);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.playPackageVersion = value;
  }
  field: {
    const wireValue = wireFields.get(60);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isSequenceEntry = value;
  }
  return result;
}
