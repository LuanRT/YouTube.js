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
  export type MdeAgeRestrictionUpdateRequest = {
    newIsAgeRestricted?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest {
  return {
    newIsAgeRestricted: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest): unknown {
  const result: any = {};
  if (value.newIsAgeRestricted !== undefined) result.newIsAgeRestricted = tsValueToJsonValueFns.bool(value.newIsAgeRestricted);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest {
  const result = getDefaultValue();
  if (value.newIsAgeRestricted !== undefined) result.newIsAgeRestricted = jsonValueToTsValueFns.bool(value.newIsAgeRestricted);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newIsAgeRestricted !== undefined) {
    const tsValue = value.newIsAgeRestricted;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeAgeRestrictionUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.newIsAgeRestricted = value;
  }
  return result;
}
