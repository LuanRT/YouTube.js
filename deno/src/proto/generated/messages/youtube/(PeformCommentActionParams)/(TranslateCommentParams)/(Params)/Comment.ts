import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.PeformCommentActionParams.TranslateCommentParams.Params {
  export type Comment = {
    text: string;
  }
}

export type Type = $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment;

export function getDefaultValue(): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment {
  return {
    text: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment>): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment): unknown {
  const result: any = {};
  if (value.text !== undefined) result.text = tsValueToJsonValueFns.string(value.text);
  return result;
}

export function decodeJson(value: any): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment {
  const result = getDefaultValue();
  if (value.text !== undefined) result.text = jsonValueToTsValueFns.string(value.text);
  return result;
}

export function encodeBinary(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment): Uint8Array {
  const result: WireMessage = [];
  if (value.text !== undefined) {
    const tsValue = value.text;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params.Comment {
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
