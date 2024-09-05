import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
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
  export type StreamProtectionStatus = {
    status?: number;
    field2?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.StreamProtectionStatus;

export function getDefaultValue(): $.youtube.api.pfiinnertube.StreamProtectionStatus {
  return {
    status: undefined,
    field2: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.StreamProtectionStatus>): $.youtube.api.pfiinnertube.StreamProtectionStatus {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.StreamProtectionStatus): unknown {
  const result: any = {};
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.int32(value.status);
  if (value.field2 !== undefined) result.field2 = tsValueToJsonValueFns.int32(value.field2);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.StreamProtectionStatus {
  const result = getDefaultValue();
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.int32(value.status);
  if (value.field2 !== undefined) result.field2 = jsonValueToTsValueFns.int32(value.field2);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.StreamProtectionStatus): Uint8Array {
  const result: WireMessage = [];
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field2 !== undefined) {
    const tsValue = value.field2;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.StreamProtectionStatus {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field2 = value;
  }
  return result;
}
