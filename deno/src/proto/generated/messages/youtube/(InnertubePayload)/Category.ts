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
  export type Category = {
    id: number;
  }
}

export type Type = $.youtube.InnertubePayload.Category;

export function getDefaultValue(): $.youtube.InnertubePayload.Category {
  return {
    id: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Category>): $.youtube.InnertubePayload.Category {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Category): unknown {
  const result: any = {};
  if (value.id !== undefined) result.id = tsValueToJsonValueFns.int32(value.id);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Category {
  const result = getDefaultValue();
  if (value.id !== undefined) result.id = jsonValueToTsValueFns.int32(value.id);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Category): Uint8Array {
  const result: WireMessage = [];
  if (value.id !== undefined) {
    const tsValue = value.id;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Category {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.id = value;
  }
  return result;
}
