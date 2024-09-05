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
  export type IndexRange = {
    start?: number;
    end?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.IndexRange;

export function getDefaultValue(): $.youtube.api.pfiinnertube.IndexRange {
  return {
    start: undefined,
    end: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.IndexRange>): $.youtube.api.pfiinnertube.IndexRange {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.IndexRange): unknown {
  const result: any = {};
  if (value.start !== undefined) result.start = tsValueToJsonValueFns.int32(value.start);
  if (value.end !== undefined) result.end = tsValueToJsonValueFns.int32(value.end);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.IndexRange {
  const result = getDefaultValue();
  if (value.start !== undefined) result.start = jsonValueToTsValueFns.int32(value.start);
  if (value.end !== undefined) result.end = jsonValueToTsValueFns.int32(value.end);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.IndexRange): Uint8Array {
  const result: WireMessage = [];
  if (value.start !== undefined) {
    const tsValue = value.start;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.end !== undefined) {
    const tsValue = value.end;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.IndexRange {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.start = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.end = value;
  }
  return result;
}
