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
  export type License = {
    type: string;
  }
}

export type Type = $.youtube.InnertubePayload.License;

export function getDefaultValue(): $.youtube.InnertubePayload.License {
  return {
    type: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.License>): $.youtube.InnertubePayload.License {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.License): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.License {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.License): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.License {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  return result;
}
