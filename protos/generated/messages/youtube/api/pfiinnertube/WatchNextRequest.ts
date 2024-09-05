import {
  Type as InnerTubeContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InnerTubeContext.js";
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
  export type WatchNextRequest = {
    context?: InnerTubeContext;
    videoId?: string;
    playlistId?: string;
    params?: string;
    continuation?: string;
    isAdPlayback?: boolean;
    mdxUseDevServer?: boolean;
    referrer?: string;
    referringApp?: string;
    adParams?: string;
    requestMusicSequence?: boolean;
    enableMdxAutoplay?: boolean;
    isMdxPlayback?: boolean;
    racyCheckOk?: boolean;
    contentCheckOk?: boolean;
    isAudioOnly?: boolean;
    autonavEnabled?: boolean;
    enablePersistentPlaylistPanel?: boolean;
    playlistSetVideoId?: string;
    showRuInvalidTokenMessage?: boolean;
    serializedThirdPartyEmbedConfig?: string;
    showContentOwnerOnly?: boolean;
    isEmbedPreview?: boolean;
    lastScrubbedInlinePlaybackVideoId?: string;
    lastAudioTurnedOnInlinePlaybackVideoId?: string;
    lastAudioTurnedOffInlinePlaybackVideoId?: string;
    captionsRequested?: boolean;
    queueContextParams?: Uint8Array;
    showShortsOnly?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.WatchNextRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.WatchNextRequest {
  return {
    context: undefined,
    videoId: undefined,
    playlistId: undefined,
    params: undefined,
    continuation: undefined,
    isAdPlayback: undefined,
    mdxUseDevServer: undefined,
    referrer: undefined,
    referringApp: undefined,
    adParams: undefined,
    requestMusicSequence: undefined,
    enableMdxAutoplay: undefined,
    isMdxPlayback: undefined,
    racyCheckOk: undefined,
    contentCheckOk: undefined,
    isAudioOnly: undefined,
    autonavEnabled: undefined,
    enablePersistentPlaylistPanel: undefined,
    playlistSetVideoId: undefined,
    showRuInvalidTokenMessage: undefined,
    serializedThirdPartyEmbedConfig: undefined,
    showContentOwnerOnly: undefined,
    isEmbedPreview: undefined,
    lastScrubbedInlinePlaybackVideoId: undefined,
    lastAudioTurnedOnInlinePlaybackVideoId: undefined,
    lastAudioTurnedOffInlinePlaybackVideoId: undefined,
    captionsRequested: undefined,
    queueContextParams: undefined,
    showShortsOnly: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.WatchNextRequest>): $.youtube.api.pfiinnertube.WatchNextRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.WatchNextRequest): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.playlistId !== undefined) result.playlistId = tsValueToJsonValueFns.string(value.playlistId);
  if (value.params !== undefined) result.params = tsValueToJsonValueFns.string(value.params);
  if (value.continuation !== undefined) result.continuation = tsValueToJsonValueFns.string(value.continuation);
  if (value.isAdPlayback !== undefined) result.isAdPlayback = tsValueToJsonValueFns.bool(value.isAdPlayback);
  if (value.mdxUseDevServer !== undefined) result.mdxUseDevServer = tsValueToJsonValueFns.bool(value.mdxUseDevServer);
  if (value.referrer !== undefined) result.referrer = tsValueToJsonValueFns.string(value.referrer);
  if (value.referringApp !== undefined) result.referringApp = tsValueToJsonValueFns.string(value.referringApp);
  if (value.adParams !== undefined) result.adParams = tsValueToJsonValueFns.string(value.adParams);
  if (value.requestMusicSequence !== undefined) result.requestMusicSequence = tsValueToJsonValueFns.bool(value.requestMusicSequence);
  if (value.enableMdxAutoplay !== undefined) result.enableMdxAutoplay = tsValueToJsonValueFns.bool(value.enableMdxAutoplay);
  if (value.isMdxPlayback !== undefined) result.isMdxPlayback = tsValueToJsonValueFns.bool(value.isMdxPlayback);
  if (value.racyCheckOk !== undefined) result.racyCheckOk = tsValueToJsonValueFns.bool(value.racyCheckOk);
  if (value.contentCheckOk !== undefined) result.contentCheckOk = tsValueToJsonValueFns.bool(value.contentCheckOk);
  if (value.isAudioOnly !== undefined) result.isAudioOnly = tsValueToJsonValueFns.bool(value.isAudioOnly);
  if (value.autonavEnabled !== undefined) result.autonavEnabled = tsValueToJsonValueFns.bool(value.autonavEnabled);
  if (value.enablePersistentPlaylistPanel !== undefined) result.enablePersistentPlaylistPanel = tsValueToJsonValueFns.bool(value.enablePersistentPlaylistPanel);
  if (value.playlistSetVideoId !== undefined) result.playlistSetVideoId = tsValueToJsonValueFns.string(value.playlistSetVideoId);
  if (value.showRuInvalidTokenMessage !== undefined) result.showRuInvalidTokenMessage = tsValueToJsonValueFns.bool(value.showRuInvalidTokenMessage);
  if (value.serializedThirdPartyEmbedConfig !== undefined) result.serializedThirdPartyEmbedConfig = tsValueToJsonValueFns.string(value.serializedThirdPartyEmbedConfig);
  if (value.showContentOwnerOnly !== undefined) result.showContentOwnerOnly = tsValueToJsonValueFns.bool(value.showContentOwnerOnly);
  if (value.isEmbedPreview !== undefined) result.isEmbedPreview = tsValueToJsonValueFns.bool(value.isEmbedPreview);
  if (value.lastScrubbedInlinePlaybackVideoId !== undefined) result.lastScrubbedInlinePlaybackVideoId = tsValueToJsonValueFns.string(value.lastScrubbedInlinePlaybackVideoId);
  if (value.lastAudioTurnedOnInlinePlaybackVideoId !== undefined) result.lastAudioTurnedOnInlinePlaybackVideoId = tsValueToJsonValueFns.string(value.lastAudioTurnedOnInlinePlaybackVideoId);
  if (value.lastAudioTurnedOffInlinePlaybackVideoId !== undefined) result.lastAudioTurnedOffInlinePlaybackVideoId = tsValueToJsonValueFns.string(value.lastAudioTurnedOffInlinePlaybackVideoId);
  if (value.captionsRequested !== undefined) result.captionsRequested = tsValueToJsonValueFns.bool(value.captionsRequested);
  if (value.queueContextParams !== undefined) result.queueContextParams = tsValueToJsonValueFns.bytes(value.queueContextParams);
  if (value.showShortsOnly !== undefined) result.showShortsOnly = tsValueToJsonValueFns.bool(value.showShortsOnly);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.WatchNextRequest {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.playlistId !== undefined) result.playlistId = jsonValueToTsValueFns.string(value.playlistId);
  if (value.params !== undefined) result.params = jsonValueToTsValueFns.string(value.params);
  if (value.continuation !== undefined) result.continuation = jsonValueToTsValueFns.string(value.continuation);
  if (value.isAdPlayback !== undefined) result.isAdPlayback = jsonValueToTsValueFns.bool(value.isAdPlayback);
  if (value.mdxUseDevServer !== undefined) result.mdxUseDevServer = jsonValueToTsValueFns.bool(value.mdxUseDevServer);
  if (value.referrer !== undefined) result.referrer = jsonValueToTsValueFns.string(value.referrer);
  if (value.referringApp !== undefined) result.referringApp = jsonValueToTsValueFns.string(value.referringApp);
  if (value.adParams !== undefined) result.adParams = jsonValueToTsValueFns.string(value.adParams);
  if (value.requestMusicSequence !== undefined) result.requestMusicSequence = jsonValueToTsValueFns.bool(value.requestMusicSequence);
  if (value.enableMdxAutoplay !== undefined) result.enableMdxAutoplay = jsonValueToTsValueFns.bool(value.enableMdxAutoplay);
  if (value.isMdxPlayback !== undefined) result.isMdxPlayback = jsonValueToTsValueFns.bool(value.isMdxPlayback);
  if (value.racyCheckOk !== undefined) result.racyCheckOk = jsonValueToTsValueFns.bool(value.racyCheckOk);
  if (value.contentCheckOk !== undefined) result.contentCheckOk = jsonValueToTsValueFns.bool(value.contentCheckOk);
  if (value.isAudioOnly !== undefined) result.isAudioOnly = jsonValueToTsValueFns.bool(value.isAudioOnly);
  if (value.autonavEnabled !== undefined) result.autonavEnabled = jsonValueToTsValueFns.bool(value.autonavEnabled);
  if (value.enablePersistentPlaylistPanel !== undefined) result.enablePersistentPlaylistPanel = jsonValueToTsValueFns.bool(value.enablePersistentPlaylistPanel);
  if (value.playlistSetVideoId !== undefined) result.playlistSetVideoId = jsonValueToTsValueFns.string(value.playlistSetVideoId);
  if (value.showRuInvalidTokenMessage !== undefined) result.showRuInvalidTokenMessage = jsonValueToTsValueFns.bool(value.showRuInvalidTokenMessage);
  if (value.serializedThirdPartyEmbedConfig !== undefined) result.serializedThirdPartyEmbedConfig = jsonValueToTsValueFns.string(value.serializedThirdPartyEmbedConfig);
  if (value.showContentOwnerOnly !== undefined) result.showContentOwnerOnly = jsonValueToTsValueFns.bool(value.showContentOwnerOnly);
  if (value.isEmbedPreview !== undefined) result.isEmbedPreview = jsonValueToTsValueFns.bool(value.isEmbedPreview);
  if (value.lastScrubbedInlinePlaybackVideoId !== undefined) result.lastScrubbedInlinePlaybackVideoId = jsonValueToTsValueFns.string(value.lastScrubbedInlinePlaybackVideoId);
  if (value.lastAudioTurnedOnInlinePlaybackVideoId !== undefined) result.lastAudioTurnedOnInlinePlaybackVideoId = jsonValueToTsValueFns.string(value.lastAudioTurnedOnInlinePlaybackVideoId);
  if (value.lastAudioTurnedOffInlinePlaybackVideoId !== undefined) result.lastAudioTurnedOffInlinePlaybackVideoId = jsonValueToTsValueFns.string(value.lastAudioTurnedOffInlinePlaybackVideoId);
  if (value.captionsRequested !== undefined) result.captionsRequested = jsonValueToTsValueFns.bool(value.captionsRequested);
  if (value.queueContextParams !== undefined) result.queueContextParams = jsonValueToTsValueFns.bytes(value.queueContextParams);
  if (value.showShortsOnly !== undefined) result.showShortsOnly = jsonValueToTsValueFns.bool(value.showShortsOnly);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.WatchNextRequest): Uint8Array {
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
  if (value.playlistId !== undefined) {
    const tsValue = value.playlistId;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.continuation !== undefined) {
    const tsValue = value.continuation;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isAdPlayback !== undefined) {
    const tsValue = value.isAdPlayback;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.mdxUseDevServer !== undefined) {
    const tsValue = value.mdxUseDevServer;
    result.push(
      [10, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.referrer !== undefined) {
    const tsValue = value.referrer;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.referringApp !== undefined) {
    const tsValue = value.referringApp;
    result.push(
      [13, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.adParams !== undefined) {
    const tsValue = value.adParams;
    result.push(
      [16, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.requestMusicSequence !== undefined) {
    const tsValue = value.requestMusicSequence;
    result.push(
      [18, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.enableMdxAutoplay !== undefined) {
    const tsValue = value.enableMdxAutoplay;
    result.push(
      [21, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isMdxPlayback !== undefined) {
    const tsValue = value.isMdxPlayback;
    result.push(
      [22, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.racyCheckOk !== undefined) {
    const tsValue = value.racyCheckOk;
    result.push(
      [24, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.contentCheckOk !== undefined) {
    const tsValue = value.contentCheckOk;
    result.push(
      [25, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isAudioOnly !== undefined) {
    const tsValue = value.isAudioOnly;
    result.push(
      [26, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.autonavEnabled !== undefined) {
    const tsValue = value.autonavEnabled;
    result.push(
      [27, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.enablePersistentPlaylistPanel !== undefined) {
    const tsValue = value.enablePersistentPlaylistPanel;
    result.push(
      [30, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playlistSetVideoId !== undefined) {
    const tsValue = value.playlistSetVideoId;
    result.push(
      [31, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.showRuInvalidTokenMessage !== undefined) {
    const tsValue = value.showRuInvalidTokenMessage;
    result.push(
      [35, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.serializedThirdPartyEmbedConfig !== undefined) {
    const tsValue = value.serializedThirdPartyEmbedConfig;
    result.push(
      [37, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.showContentOwnerOnly !== undefined) {
    const tsValue = value.showContentOwnerOnly;
    result.push(
      [38, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isEmbedPreview !== undefined) {
    const tsValue = value.isEmbedPreview;
    result.push(
      [42, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.lastScrubbedInlinePlaybackVideoId !== undefined) {
    const tsValue = value.lastScrubbedInlinePlaybackVideoId;
    result.push(
      [43, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lastAudioTurnedOnInlinePlaybackVideoId !== undefined) {
    const tsValue = value.lastAudioTurnedOnInlinePlaybackVideoId;
    result.push(
      [44, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lastAudioTurnedOffInlinePlaybackVideoId !== undefined) {
    const tsValue = value.lastAudioTurnedOffInlinePlaybackVideoId;
    result.push(
      [45, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.captionsRequested !== undefined) {
    const tsValue = value.captionsRequested;
    result.push(
      [47, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.queueContextParams !== undefined) {
    const tsValue = value.queueContextParams;
    result.push(
      [50, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.showShortsOnly !== undefined) {
    const tsValue = value.showShortsOnly;
    result.push(
      [55, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.WatchNextRequest {
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
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.playlistId = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.continuation = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isAdPlayback = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.mdxUseDevServer = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.referrer = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.referringApp = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.adParams = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.requestMusicSequence = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enableMdxAutoplay = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isMdxPlayback = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.racyCheckOk = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.contentCheckOk = value;
  }
  field: {
    const wireValue = wireFields.get(26);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isAudioOnly = value;
  }
  field: {
    const wireValue = wireFields.get(27);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.autonavEnabled = value;
  }
  field: {
    const wireValue = wireFields.get(30);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enablePersistentPlaylistPanel = value;
  }
  field: {
    const wireValue = wireFields.get(31);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.playlistSetVideoId = value;
  }
  field: {
    const wireValue = wireFields.get(35);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.showRuInvalidTokenMessage = value;
  }
  field: {
    const wireValue = wireFields.get(37);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.serializedThirdPartyEmbedConfig = value;
  }
  field: {
    const wireValue = wireFields.get(38);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.showContentOwnerOnly = value;
  }
  field: {
    const wireValue = wireFields.get(42);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isEmbedPreview = value;
  }
  field: {
    const wireValue = wireFields.get(43);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lastScrubbedInlinePlaybackVideoId = value;
  }
  field: {
    const wireValue = wireFields.get(44);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lastAudioTurnedOnInlinePlaybackVideoId = value;
  }
  field: {
    const wireValue = wireFields.get(45);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.lastAudioTurnedOffInlinePlaybackVideoId = value;
  }
  field: {
    const wireValue = wireFields.get(47);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.captionsRequested = value;
  }
  field: {
    const wireValue = wireFields.get(50);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.queueContextParams = value;
  }
  field: {
    const wireValue = wireFields.get(55);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.showShortsOnly = value;
  }
  return result;
}
