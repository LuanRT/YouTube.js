import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(TranslateCommentParams)/Params.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.PeformCommentActionParams {
  export type TranslateCommentParams = {
    commentId: string;
    params?: Params;
    targetLanguage: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams {
  return {
    commentId: "",
    params: undefined,
    targetLanguage: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams>): $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams): unknown {
  const result: any = {};
  if (value.commentId !== undefined) result.commentId = tsValueToJsonValueFns.string(value.commentId);
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  if (value.targetLanguage !== undefined) result.targetLanguage = tsValueToJsonValueFns.string(value.targetLanguage);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams {
  const result = getDefaultValue();
  if (value.commentId !== undefined) result.commentId = jsonValueToTsValueFns.string(value.commentId);
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  if (value.targetLanguage !== undefined) result.targetLanguage = jsonValueToTsValueFns.string(value.targetLanguage);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams): Uint8Array {
  const result: WireMessage = [];
  if (value.commentId !== undefined) {
    const tsValue = value.commentId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.targetLanguage !== undefined) {
    const tsValue = value.targetLanguage;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PeformCommentActionParams.TranslateCommentParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.commentId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.targetLanguage = value;
  }
  return result;
}
