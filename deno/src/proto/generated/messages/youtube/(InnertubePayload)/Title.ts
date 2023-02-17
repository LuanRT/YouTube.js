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
  export type Title = {
    text: string;
  }
}

export type Type = $.youtube.InnertubePayload.Title;

export function getDefaultValue(): $.youtube.InnertubePayload.Title {
  return {
    text: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Title>): $.youtube.InnertubePayload.Title {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Title): unknown {
  const result: any = {};
  if (value.text !== undefined) result.text = tsValueToJsonValueFns.string(value.text);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Title {
  const result = getDefaultValue();
  if (value.text !== undefined) result.text = jsonValueToTsValueFns.string(value.text);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Title): Uint8Array {
  const result: WireMessage = [];
  if (value.text !== undefined) {
    const tsValue = value.text;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Title {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.text = value;
  }
  return result;
}
