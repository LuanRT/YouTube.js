import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type FormatId = {
    itag: number;
    lastModified: string;
    xtags?: string;
  }
}

export type Type = $.youtube.FormatId;

export function getDefaultValue(): $.youtube.FormatId {
  return {
    itag: 0,
    lastModified: "0",
    xtags: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.FormatId>): $.youtube.FormatId {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.FormatId): unknown {
  const result: any = {};
  if (value.itag !== undefined) result.itag = tsValueToJsonValueFns.int32(value.itag);
  if (value.lastModified !== undefined) result.lastModified = tsValueToJsonValueFns.int64(value.lastModified);
  if (value.xtags !== undefined) result.xtags = tsValueToJsonValueFns.string(value.xtags);
  return result;
}

export function decodeJson(value: any): $.youtube.FormatId {
  const result = getDefaultValue();
  if (value.itag !== undefined) result.itag = jsonValueToTsValueFns.int32(value.itag);
  if (value.lastModified !== undefined) result.lastModified = jsonValueToTsValueFns.int64(value.lastModified);
  if (value.xtags !== undefined) result.xtags = jsonValueToTsValueFns.string(value.xtags);
  return result;
}

export function encodeBinary(value: $.youtube.FormatId): Uint8Array {
  const result: WireMessage = [];
  if (value.itag !== undefined) {
    const tsValue = value.itag;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.lastModified !== undefined) {
    const tsValue = value.lastModified;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.xtags !== undefined) {
    const tsValue = value.xtags;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.FormatId {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.itag = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.lastModified = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.xtags = value;
  }
  return result;
}
