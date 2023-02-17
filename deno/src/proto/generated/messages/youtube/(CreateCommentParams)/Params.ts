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

export declare namespace $.youtube.CreateCommentParams {
  export type Params = {
    index: number;
  }
}

export type Type = $.youtube.CreateCommentParams.Params;

export function getDefaultValue(): $.youtube.CreateCommentParams.Params {
  return {
    index: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.CreateCommentParams.Params>): $.youtube.CreateCommentParams.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.CreateCommentParams.Params): unknown {
  const result: any = {};
  if (value.index !== undefined) result.index = tsValueToJsonValueFns.int32(value.index);
  return result;
}

export function decodeJson(value: any): $.youtube.CreateCommentParams.Params {
  const result = getDefaultValue();
  if (value.index !== undefined) result.index = jsonValueToTsValueFns.int32(value.index);
  return result;
}

export function encodeBinary(value: $.youtube.CreateCommentParams.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.index !== undefined) {
    const tsValue = value.index;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.CreateCommentParams.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.index = value;
  }
  return result;
}
