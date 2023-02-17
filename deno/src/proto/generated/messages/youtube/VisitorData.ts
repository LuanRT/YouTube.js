import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type VisitorData = {
    id: string;
    timestamp: number;
  }
}

export type Type = $.youtube.VisitorData;

export function getDefaultValue(): $.youtube.VisitorData {
  return {
    id: "",
    timestamp: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.VisitorData>): $.youtube.VisitorData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.VisitorData): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.string(value.id);
  if (value.timestamp !== undefined) result.timestamp = tsValueToJsonValueFns.int32(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.youtube.VisitorData {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.string(value.id);
  if (value.timestamp !== undefined) result.timestamp = jsonValueToTsValueFns.int32(value.timestamp);
  return result;
}

export function encodeBinary(value: $.youtube.VisitorData): Uint8Array {
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

export function decodeBinary(binary: Uint8Array): $.youtube.VisitorData {
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
