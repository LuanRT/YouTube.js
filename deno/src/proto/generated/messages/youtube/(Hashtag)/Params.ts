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

export declare namespace $.youtube.Hashtag {
  export type Params = {
    hashtag: string;
    type: number;
  }
}

export type Type = $.youtube.Hashtag.Params;

export function getDefaultValue(): $.youtube.Hashtag.Params {
  return {
    hashtag: "",
    type: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.Hashtag.Params>): $.youtube.Hashtag.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Hashtag.Params): unknown {
  const result: any = {};
  if (value.hashtag !== undefined) result.hashtag = tsValueToJsonValueFns.string(value.hashtag);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  return result;
}

export function decodeJson(value: any): $.youtube.Hashtag.Params {
  const result = getDefaultValue();
  if (value.hashtag !== undefined) result.hashtag = jsonValueToTsValueFns.string(value.hashtag);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  return result;
}

export function encodeBinary(value: $.youtube.Hashtag.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.hashtag !== undefined) {
    const tsValue = value.hashtag;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Hashtag.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hashtag = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  return result;
}
