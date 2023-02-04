import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.youtube.InnertubePayload {
  export type Description = {
    text: string;
  }
}

export type Type = $.youtube.InnertubePayload.Description;

export function getDefaultValue(): $.youtube.InnertubePayload.Description {
  return {
    text: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Description>): $.youtube.InnertubePayload.Description {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Description): unknown {
  const result: any = {};
  if (value.text !== undefined) result.text = tsValueToJsonValueFns.string(value.text);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Description {
  const result = getDefaultValue();
  if (value.text !== undefined) result.text = jsonValueToTsValueFns.string(value.text);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Description): Uint8Array {
  const result: WireMessage = [];
  if (value.text !== undefined) {
    const tsValue = value.text;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Description {
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
