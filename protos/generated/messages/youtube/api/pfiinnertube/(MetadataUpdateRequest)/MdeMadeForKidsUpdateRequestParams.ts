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
  export type MdeMadeForKidsUpdateRequestParams = {
    operation?: number;
    newMfk?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams {
  return {
    operation: undefined,
    newMfk: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams>): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams): unknown {
  const result: any = {};
  if (value.operation !== undefined) result.operation = tsValueToJsonValueFns.int32(value.operation);
  if (value.newMfk !== undefined) result.newMfk = tsValueToJsonValueFns.int32(value.newMfk);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams {
  const result = getDefaultValue();
  if (value.operation !== undefined) result.operation = jsonValueToTsValueFns.int32(value.operation);
  if (value.newMfk !== undefined) result.newMfk = jsonValueToTsValueFns.int32(value.newMfk);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams): Uint8Array {
  const result: WireMessage = [];
  if (value.operation !== undefined) {
    const tsValue = value.operation;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.newMfk !== undefined) {
    const tsValue = value.newMfk;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MetadataUpdateRequest.MdeMadeForKidsUpdateRequestParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.operation = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.newMfk = value;
  }
  return result;
}
