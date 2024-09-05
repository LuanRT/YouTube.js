import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions {
  export type UnkOpts = {
    unkParam: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts;

export function getDefaultValue(): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts {
  return {
    unkParam: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts>): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts): unknown {
  const result: any = {};
  if (value.unkParam !== undefined) result.unkParam = tsValueToJsonValueFns.int32(value.unkParam);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts {
  const result = getDefaultValue();
  if (value.unkParam !== undefined) result.unkParam = jsonValueToTsValueFns.int32(value.unkParam);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts): Uint8Array {
  const result: WireMessage = [];
  if (value.unkParam !== undefined) {
    const tsValue = value.unkParam;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.GetCommentsSectionParams.Params.RepliesOptions.UnkOpts {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkParam = value;
  }
  return result;
}
