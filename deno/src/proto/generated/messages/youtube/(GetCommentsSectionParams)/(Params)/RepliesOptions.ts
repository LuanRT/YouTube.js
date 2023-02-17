import {
  Type as UnkOpts,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(RepliesOptions)/UnkOpts.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.GetCommentsSectionParams.Params {
  export type RepliesOptions = {
    commentId: string;
    unkopts?: UnkOpts;
    channelId?: string;
    videoId: string;
    unkParam1: number;
    unkParam2: number;
  }
}

export type Type = $.youtube.GetCommentsSectionParams.Params.RepliesOptions;

export function getDefaultValue(): $.youtube.GetCommentsSectionParams.Params.RepliesOptions {
  return {
    commentId: "",
    unkopts: undefined,
    channelId: undefined,
    videoId: "",
    unkParam1: 0,
    unkParam2: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Params.RepliesOptions>): $.youtube.GetCommentsSectionParams.Params.RepliesOptions {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.GetCommentsSectionParams.Params.RepliesOptions): unknown {
  const result: any = {};
  if (value.commentId !== undefined) result.commentId = tsValueToJsonValueFns.string(value.commentId);
  if (value.unkopts !== undefined) result.unkopts = encodeJson_1(value.unkopts);
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.unkParam1 !== undefined) result.unkParam1 = tsValueToJsonValueFns.int32(value.unkParam1);
  if (value.unkParam2 !== undefined) result.unkParam2 = tsValueToJsonValueFns.int32(value.unkParam2);
  return result;
}

export function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Params.RepliesOptions {
  const result = getDefaultValue();
  if (value.commentId !== undefined) result.commentId = jsonValueToTsValueFns.string(value.commentId);
  if (value.unkopts !== undefined) result.unkopts = decodeJson_1(value.unkopts);
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.unkParam1 !== undefined) result.unkParam1 = jsonValueToTsValueFns.int32(value.unkParam1);
  if (value.unkParam2 !== undefined) result.unkParam2 = jsonValueToTsValueFns.int32(value.unkParam2);
  return result;
}

export function encodeBinary(value: $.youtube.GetCommentsSectionParams.Params.RepliesOptions): Uint8Array {
  const result: WireMessage = [];
  if (value.commentId !== undefined) {
    const tsValue = value.commentId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.unkopts !== undefined) {
    const tsValue = value.unkopts;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.unkParam1 !== undefined) {
    const tsValue = value.unkParam1;
    result.push(
      [8, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.unkParam2 !== undefined) {
    const tsValue = value.unkParam2;
    result.push(
      [9, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Params.RepliesOptions {
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
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.unkopts = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.channelId = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkParam1 = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkParam2 = value;
  }
  return result;
}
