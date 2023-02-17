import {
  Type as Client,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Context)/Client.ts";
import {
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.InnertubePayload {
  export type Context = {
    client?: Client;
  }
}

export type Type = $.youtube.InnertubePayload.Context;

export function getDefaultValue(): $.youtube.InnertubePayload.Context {
  return {
    client: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Context>): $.youtube.InnertubePayload.Context {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Context): unknown {
  const result: any = {};
  if (value.client !== undefined) result.client = encodeJson_1(value.client);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Context {
  const result = getDefaultValue();
  if (value.client !== undefined) result.client = decodeJson_1(value.client);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Context): Uint8Array {
  const result: WireMessage = [];
  if (value.client !== undefined) {
    const tsValue = value.client;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Context {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.client = value;
  }
  return result;
}
