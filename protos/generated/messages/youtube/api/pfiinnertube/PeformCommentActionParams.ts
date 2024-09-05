import {
  Type as TranslateCommentParams,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(PeformCommentActionParams)/TranslateCommentParams.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type PeformCommentActionParams = {
    type: number;
    unkNum?: number;
    commentId: string;
    videoId: string;
    channelId?: string;
    translateCommentParams?: TranslateCommentParams;
  }
}

export type Type = $.youtube.api.pfiinnertube.PeformCommentActionParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PeformCommentActionParams {
  return {
    type: 0,
    unkNum: undefined,
    commentId: "",
    videoId: "",
    channelId: undefined,
    translateCommentParams: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PeformCommentActionParams>): $.youtube.api.pfiinnertube.PeformCommentActionParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PeformCommentActionParams): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  if (value.unkNum !== undefined) result.unkNum = tsValueToJsonValueFns.int32(value.unkNum);
  if (value.commentId !== undefined) result.commentId = tsValueToJsonValueFns.string(value.commentId);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  if (value.translateCommentParams !== undefined) result.translateCommentParams = encodeJson_1(value.translateCommentParams);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PeformCommentActionParams {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  if (value.unkNum !== undefined) result.unkNum = jsonValueToTsValueFns.int32(value.unkNum);
  if (value.commentId !== undefined) result.commentId = jsonValueToTsValueFns.string(value.commentId);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  if (value.translateCommentParams !== undefined) result.translateCommentParams = decodeJson_1(value.translateCommentParams);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PeformCommentActionParams): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.unkNum !== undefined) {
    const tsValue = value.unkNum;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.commentId !== undefined) {
    const tsValue = value.commentId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [23, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.translateCommentParams !== undefined) {
    const tsValue = value.translateCommentParams;
    result.push(
      [31, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PeformCommentActionParams {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkNum = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.commentId = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.channelId = value;
  }
  field: {
    const wireValue = wireFields.get(31);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.translateCommentParams = value;
  }
  return result;
}
