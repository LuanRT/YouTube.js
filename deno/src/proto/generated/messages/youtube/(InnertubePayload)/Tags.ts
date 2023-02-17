import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.InnertubePayload {
  export type Tags = {
    list: string[];
  }
}

export type Type = $.youtube.InnertubePayload.Tags;

export function getDefaultValue(): $.youtube.InnertubePayload.Tags {
  return {
    list: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Tags>): $.youtube.InnertubePayload.Tags {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Tags): unknown {
  const result: any = {};
  result.list = value.list.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Tags {
  const result = getDefaultValue();
  result.list = value.list?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Tags): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.list) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Tags {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.list = value as any;
  }
  return result;
}
