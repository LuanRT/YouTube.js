import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
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

export declare namespace $.youtube.NextRequestPolicy {
  export type ItagInfo = {
    itag: number;
    lastModified: string;
    field3: Map<number, string>;
  }
}

export type Type = $.youtube.NextRequestPolicy.ItagInfo;

export function getDefaultValue(): $.youtube.NextRequestPolicy.ItagInfo {
  return {
    itag: 0,
    lastModified: "0",
    field3: new Map(),
  };
}

export function createValue(partialValue: Partial<$.youtube.NextRequestPolicy.ItagInfo>): $.youtube.NextRequestPolicy.ItagInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.NextRequestPolicy.ItagInfo): unknown {
  const result: any = {};
  if (value.itag !== undefined) result.itag = tsValueToJsonValueFns.int32(value.itag);
  if (value.lastModified !== undefined) result.lastModified = tsValueToJsonValueFns.int64(value.lastModified);
  if (value.field3 !== undefined) result.field3 = Object.fromEntries([...value.field3.entries()].map(([key, value]) => [key, tsValueToJsonValueFns.string(value)]));
  return result;
}

export function decodeJson(value: any): $.youtube.NextRequestPolicy.ItagInfo {
  const result = getDefaultValue();
  if (value.itag !== undefined) result.itag = jsonValueToTsValueFns.int32(value.itag);
  if (value.lastModified !== undefined) result.lastModified = jsonValueToTsValueFns.int64(value.lastModified);
  if (value.field3 !== undefined) result.field3 = Object.fromEntries([...value.field3.entries()].map(([key, value]) => [key, jsonValueToTsValueFns.string(value)]));
  return result;
}

export function encodeBinary(value: $.youtube.NextRequestPolicy.ItagInfo): Uint8Array {
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
  {
    const fields = value.field3.entries();
    for (const [key, value] of fields) {
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.int32(key)], [2, tsValueToWireValueFns.string(value)]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.NextRequestPolicy.ItagInfo {
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
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.int32(key), wireValueToTsValueFns.string(value)] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.field3 = new Map(value as any);
  }
  return result;
}
