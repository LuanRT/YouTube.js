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
  export type VisitorData = {
    id: string;
    timestamp: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.VisitorData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.VisitorData {
  return {
    id: "",
    timestamp: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.VisitorData>): $.youtube.api.pfiinnertube.VisitorData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.VisitorData): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.timestamp !== undefined) result.timestamp = tsValueToJsonValueFns.int32(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.VisitorData {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.timestamp !== undefined) result.timestamp = jsonValueToTsValueFns.int32(value.timestamp);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.VisitorData): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.VisitorData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
