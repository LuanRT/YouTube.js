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
  export type MdePrivacyUpdateRequest = {
    newPrivacy?: number;
    clearPrivacyDraft?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest {
  return {
    newPrivacy: undefined,
    clearPrivacyDraft: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest): unknown {
  const result: any = {};
  if (value.newPrivacy !== undefined) result.newPrivacy = tsValueToJsonValueFns.int32(value.newPrivacy);
  if (value.clearPrivacyDraft !== undefined) result.clearPrivacyDraft = tsValueToJsonValueFns.bool(value.clearPrivacyDraft);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest {
  const result = getDefaultValue();
  if (value.newPrivacy !== undefined) result.newPrivacy = jsonValueToTsValueFns.int32(value.newPrivacy);
  if (value.clearPrivacyDraft !== undefined) result.clearPrivacyDraft = jsonValueToTsValueFns.bool(value.clearPrivacyDraft);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newPrivacy !== undefined) {
    const tsValue = value.newPrivacy;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.clearPrivacyDraft !== undefined) {
    const tsValue = value.clearPrivacyDraft;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdePrivacyUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.newPrivacy = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.clearPrivacyDraft = value;
  }
  return result;
}
