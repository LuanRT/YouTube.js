import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.RequestCancellationPolicy {
  export type Item = {
    fR?: number;
    NK?: number;
    minReadaheadMs?: number;
  }
}

export type Type = $.youtube.RequestCancellationPolicy.Item;

export function getDefaultValue(): $.youtube.RequestCancellationPolicy.Item {
  return {
    fR: undefined,
    NK: undefined,
    minReadaheadMs: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.RequestCancellationPolicy.Item>): $.youtube.RequestCancellationPolicy.Item {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.RequestCancellationPolicy.Item): unknown {
  const result: any = {};
  if (value.fR !== undefined) result.fR = tsValueToJsonValueFns.int32(value.fR);
  if (value.NK !== undefined) result.NK = tsValueToJsonValueFns.int32(value.NK);
  if (value.minReadaheadMs !== undefined) result.minReadaheadMs = tsValueToJsonValueFns.int32(value.minReadaheadMs);
  return result;
}

export function decodeJson(value: any): $.youtube.RequestCancellationPolicy.Item {
  const result = getDefaultValue();
  if (value.fR !== undefined) result.fR = jsonValueToTsValueFns.int32(value.fR);
  if (value.NK !== undefined) result.NK = jsonValueToTsValueFns.int32(value.NK);
  if (value.minReadaheadMs !== undefined) result.minReadaheadMs = jsonValueToTsValueFns.int32(value.minReadaheadMs);
  return result;
}

export function encodeBinary(value: $.youtube.RequestCancellationPolicy.Item): Uint8Array {
  const result: WireMessage = [];
  if (value.fR !== undefined) {
    const tsValue = value.fR;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.NK !== undefined) {
    const tsValue = value.NK;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.minReadaheadMs !== undefined) {
    const tsValue = value.minReadaheadMs;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.RequestCancellationPolicy.Item {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.fR = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.NK = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.minReadaheadMs = value;
  }
  return result;
}
