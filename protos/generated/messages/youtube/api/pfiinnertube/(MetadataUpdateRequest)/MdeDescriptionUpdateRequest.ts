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
  export type MdeDescriptionUpdateRequest = {
    newDescription?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest {
  return {
    newDescription: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest): unknown {
  const result: any = {};
  if (value.newDescription !== undefined) result.newDescription = tsValueToJsonValueFns.string(value.newDescription);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest {
  const result = getDefaultValue();
  if (value.newDescription !== undefined) result.newDescription = jsonValueToTsValueFns.string(value.newDescription);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newDescription !== undefined) {
    const tsValue = value.newDescription;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeDescriptionUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.newDescription = value;
  }
  return result;
}
