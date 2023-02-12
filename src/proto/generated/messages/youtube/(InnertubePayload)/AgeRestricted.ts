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
  export type AgeRestricted = {
    unkparam: number;
    choice: number;
  }
}

export type Type = $.youtube.InnertubePayload.AgeRestricted;

export function getDefaultValue(): $.youtube.InnertubePayload.AgeRestricted {
  return {
    unkparam: 0,
    choice: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.AgeRestricted>): $.youtube.InnertubePayload.AgeRestricted {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.AgeRestricted): unknown {
  const result: any = {};
  if (value.unkparam !== undefined) result.unkparam = tsValueToJsonValueFns.int32(value.unkparam);
  if (value.choice !== undefined) result.choice = tsValueToJsonValueFns.int32(value.choice);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.AgeRestricted {
  const result = getDefaultValue();
  if (value.unkparam !== undefined) result.unkparam = jsonValueToTsValueFns.int32(value.unkparam);
  if (value.choice !== undefined) result.choice = jsonValueToTsValueFns.int32(value.choice);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.AgeRestricted): Uint8Array {
  const result: WireMessage = [];
  if (value.unkparam !== undefined) {
    const tsValue = value.unkparam;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.choice !== undefined) {
    const tsValue = value.choice;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.AgeRestricted {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkparam = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.choice = value;
  }
  return result;
}
