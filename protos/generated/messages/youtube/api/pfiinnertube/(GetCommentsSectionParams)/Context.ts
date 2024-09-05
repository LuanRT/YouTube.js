import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.youtube.api.pfiinnertube.GetCommentsSectionParams {
  export type Context = {
    videoId: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context;

export function getDefaultValue(): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context {
  return {
    videoId: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.GetCommentsSectionParams.Context>): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Context {
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
