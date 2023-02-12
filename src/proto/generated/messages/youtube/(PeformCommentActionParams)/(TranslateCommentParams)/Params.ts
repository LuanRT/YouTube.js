import {
  Type as Comment,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Params)/Comment.js";
import {
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.PeformCommentActionParams.TranslateCommentParams {
  export type Params = {
    comment?: Comment;
  }
}

export type Type = $.youtube.PeformCommentActionParams.TranslateCommentParams.Params;

export function getDefaultValue(): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params {
  return {
    comment: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.PeformCommentActionParams.TranslateCommentParams.Params>): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params): unknown {
  const result: any = {};
  if (value.comment !== undefined) result.comment = encodeJson_1(value.comment);
  return result;
}

export function decodeJson(value: any): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params {
  const result = getDefaultValue();
  if (value.comment !== undefined) result.comment = decodeJson_1(value.comment);
  return result;
}

export function encodeBinary(value: $.youtube.PeformCommentActionParams.TranslateCommentParams.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.comment !== undefined) {
    const tsValue = value.comment;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.PeformCommentActionParams.TranslateCommentParams.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.comment = value;
  }
  return result;
}
