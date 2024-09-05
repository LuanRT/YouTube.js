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
  export type MdeLicenseUpdateRequest = {
    newLicenseId?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest {
  return {
    newLicenseId: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest): unknown {
  const result: any = {};
  if (value.newLicenseId !== undefined) result.newLicenseId = tsValueToJsonValueFns.string(value.newLicenseId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest {
  const result = getDefaultValue();
  if (value.newLicenseId !== undefined) result.newLicenseId = jsonValueToTsValueFns.string(value.newLicenseId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newLicenseId !== undefined) {
    const tsValue = value.newLicenseId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeLicenseUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.newLicenseId = value;
  }
  return result;
}
