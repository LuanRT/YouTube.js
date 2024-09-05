import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.SearchFilter.Filters {
  export type MusicSearchType = {
    song?: boolean;
    video?: boolean;
    album?: boolean;
    artist?: boolean;
    playlist?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType;

export function getDefaultValue(): $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType {
  return {
    song: undefined,
    video: undefined,
    album: undefined,
    artist: undefined,
    playlist: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType>): $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType): unknown {
  const result: any = {};
  if (value.song !== undefined) result.song = tsValueToJsonValueFns.bool(value.song);
  if (value.video !== undefined) result.video = tsValueToJsonValueFns.bool(value.video);
  if (value.album !== undefined) result.album = tsValueToJsonValueFns.bool(value.album);
  if (value.artist !== undefined) result.artist = tsValueToJsonValueFns.bool(value.artist);
  if (value.playlist !== undefined) result.playlist = tsValueToJsonValueFns.bool(value.playlist);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType {
  const result = getDefaultValue();
  if (value.song !== undefined) result.song = jsonValueToTsValueFns.bool(value.song);
  if (value.video !== undefined) result.video = jsonValueToTsValueFns.bool(value.video);
  if (value.album !== undefined) result.album = jsonValueToTsValueFns.bool(value.album);
  if (value.artist !== undefined) result.artist = jsonValueToTsValueFns.bool(value.artist);
  if (value.playlist !== undefined) result.playlist = jsonValueToTsValueFns.bool(value.playlist);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType): Uint8Array {
  const result: WireMessage = [];
  if (value.song !== undefined) {
    const tsValue = value.song;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.video !== undefined) {
    const tsValue = value.video;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.album !== undefined) {
    const tsValue = value.album;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.artist !== undefined) {
    const tsValue = value.artist;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.playlist !== undefined) {
    const tsValue = value.playlist;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.SearchFilter.Filters.MusicSearchType {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.song = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.video = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.album = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.artist = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.playlist = value;
  }
  return result;
}
