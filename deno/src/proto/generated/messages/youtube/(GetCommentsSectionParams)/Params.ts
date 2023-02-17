import {
  Type as RepliesOptions,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Params)/RepliesOptions.ts";
import {
  Type as Options,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Params)/Options.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
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

export declare namespace $.youtube.GetCommentsSectionParams {
  export type Params = {
    unkToken?: string;
    repliesOpts?: RepliesOptions;
    opts?: Options;
    page?: number;
    target: string;
  }
}

export type Type = $.youtube.GetCommentsSectionParams.Params;

export function getDefaultValue(): $.youtube.GetCommentsSectionParams.Params {
  return {
    unkToken: undefined,
    repliesOpts: undefined,
    opts: undefined,
    page: undefined,
    target: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Params>): $.youtube.GetCommentsSectionParams.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.GetCommentsSectionParams.Params): unknown {
  const result: any = {};
  if (value.unkToken !== undefined) result.unkToken = tsValueToJsonValueFns.string(value.unkToken);
  if (value.repliesOpts !== undefined) result.repliesOpts = encodeJson_1(value.repliesOpts);
  if (value.opts !== undefined) result.opts = encodeJson_2(value.opts);
  if (value.page !== undefined) result.page = tsValueToJsonValueFns.int32(value.page);
  if (value.target !== undefined) result.target = tsValueToJsonValueFns.string(value.target);
  return result;
}

export function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Params {
  const result = getDefaultValue();
  if (value.unkToken !== undefined) result.unkToken = jsonValueToTsValueFns.string(value.unkToken);
  if (value.repliesOpts !== undefined) result.repliesOpts = decodeJson_1(value.repliesOpts);
  if (value.opts !== undefined) result.opts = decodeJson_2(value.opts);
  if (value.page !== undefined) result.page = jsonValueToTsValueFns.int32(value.page);
  if (value.target !== undefined) result.target = jsonValueToTsValueFns.string(value.target);
  return result;
}

export function encodeBinary(value: $.youtube.GetCommentsSectionParams.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.unkToken !== undefined) {
    const tsValue = value.unkToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.repliesOpts !== undefined) {
    const tsValue = value.repliesOpts;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.opts !== undefined) {
    const tsValue = value.opts;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.page !== undefined) {
    const tsValue = value.page;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.target !== undefined) {
    const tsValue = value.target;
    result.push(
      [8, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.unkToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.repliesOpts = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.opts = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.page = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.target = value;
  }
  return result;
}
