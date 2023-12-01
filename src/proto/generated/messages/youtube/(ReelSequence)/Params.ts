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

export declare namespace $.youtube.ReelSequence {
  export type Params = {
    number: number;
  }
}

export type Type = $.youtube.ReelSequence.Params;

export function getDefaultValue(): $.youtube.ReelSequence.Params {
  return {
    number: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.ReelSequence.Params>): $.youtube.ReelSequence.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ReelSequence.Params): unknown {
  const result: any = {};
  if (value.number !== undefined) result.number = tsValueToJsonValueFns.int32(value.number);
  return result;
}

export function decodeJson(value: any): $.youtube.ReelSequence.Params {
  const result = getDefaultValue();
  if (value.number !== undefined) result.number = jsonValueToTsValueFns.int32(value.number);
  return result;
}

export function encodeBinary(value: $.youtube.ReelSequence.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.number !== undefined) {
    const tsValue = value.number;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ReelSequence.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number = value;
  }
  return result;
}
