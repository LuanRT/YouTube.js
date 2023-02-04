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
  export type Privacy = {
    type: number;
  }
}

export type Type = $.youtube.InnertubePayload.Privacy;

export function getDefaultValue(): $.youtube.InnertubePayload.Privacy {
  return {
    type: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Privacy>): $.youtube.InnertubePayload.Privacy {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Privacy): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Privacy {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Privacy): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Privacy {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  return result;
}
