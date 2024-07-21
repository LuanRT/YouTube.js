import {
  Type as HttpHeader,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./HttpHeader.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
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
  export type OnesieRequestProto = {
    url?: string;
    headers: HttpHeader[];
    body?: Uint8Array;
    unnamedField4?: boolean;
  }
}

export type Type = $.youtube.OnesieRequestProto;

export function getDefaultValue(): $.youtube.OnesieRequestProto {
  return {
    url: undefined,
    headers: [],
    body: undefined,
    unnamedField4: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.OnesieRequestProto>): $.youtube.OnesieRequestProto {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.OnesieRequestProto): unknown {
  const result: any = {};
  if (value.url !== undefined) result.url = tsValueToJsonValueFns.string(value.url);
  result.headers = value.headers.map(value => encodeJson_1(value));
  if (value.body !== undefined) result.body = tsValueToJsonValueFns.bytes(value.body);
  if (value.unnamedField4 !== undefined) result.unnamedField4 = tsValueToJsonValueFns.bool(value.unnamedField4);
  return result;
}

export function decodeJson(value: any): $.youtube.OnesieRequestProto {
  const result = getDefaultValue();
  if (value.url !== undefined) result.url = jsonValueToTsValueFns.string(value.url);
  result.headers = value.headers?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.body !== undefined) result.body = jsonValueToTsValueFns.bytes(value.body);
  if (value.unnamedField4 !== undefined) result.unnamedField4 = jsonValueToTsValueFns.bool(value.unnamedField4);
  return result;
}

export function encodeBinary(value: $.youtube.OnesieRequestProto): Uint8Array {
  const result: WireMessage = [];
  if (value.url !== undefined) {
    const tsValue = value.url;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.headers) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.body !== undefined) {
    const tsValue = value.body;
    result.push(
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.unnamedField4 !== undefined) {
    const tsValue = value.unnamedField4;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.OnesieRequestProto {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.url = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.headers = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.body = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.unnamedField4 = value;
  }
  return result;
}
