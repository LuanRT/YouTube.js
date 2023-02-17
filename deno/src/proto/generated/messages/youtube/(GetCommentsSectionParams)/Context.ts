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

export declare namespace $.youtube.GetCommentsSectionParams {
  export type Context = {
    videoId: string;
  }
}

export type Type = $.youtube.GetCommentsSectionParams.Context;

export function getDefaultValue(): $.youtube.GetCommentsSectionParams.Context {
  return {
    videoId: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.GetCommentsSectionParams.Context>): $.youtube.GetCommentsSectionParams.Context {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.GetCommentsSectionParams.Context): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  return result;
}

export function decodeJson(value: any): $.youtube.GetCommentsSectionParams.Context {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  return result;
}

export function encodeBinary(value: $.youtube.GetCommentsSectionParams.Context): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.GetCommentsSectionParams.Context {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  return result;
}
