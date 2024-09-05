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

export declare namespace $.youtube.api.pfiinnertube.MetadataUpdateRequest {
  export type MdeTagsUpdateRequest = {
    newTags: string[];
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest {
  return {
    newTags: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest): unknown {
  const result: any = {};
  result.newTags = value.newTags.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest {
  const result = getDefaultValue();
  result.newTags = value.newTags?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.newTags) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTagsUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.newTags = value as any;
  }
  return result;
}
