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
  export type MdeTitleUpdateRequest = {
    newTitle?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest {
  return {
    newTitle: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest): unknown {
  const result: any = {};
  if (value.newTitle !== undefined) result.newTitle = tsValueToJsonValueFns.string(value.newTitle);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest {
  const result = getDefaultValue();
  if (value.newTitle !== undefined) result.newTitle = jsonValueToTsValueFns.string(value.newTitle);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.newTitle !== undefined) {
    const tsValue = value.newTitle;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeTitleUpdateRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.newTitle = value;
  }
  return result;
}
