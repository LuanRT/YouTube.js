import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(CreateCommentParams)/Params.js";
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
  export type CreateCommentParams = {
    videoId: string;
    params?: Params;
    number: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.CreateCommentParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.CreateCommentParams {
  return {
    videoId: "",
    params: undefined,
    number: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.CreateCommentParams>): $.youtube.api.pfiinnertube.CreateCommentParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.CreateCommentParams): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  if (value.number !== undefined) result.number = tsValueToJsonValueFns.int32(value.number);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.CreateCommentParams {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  if (value.number !== undefined) result.number = jsonValueToTsValueFns.int32(value.number);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.CreateCommentParams): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.number !== undefined) {
    const tsValue = value.number;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.CreateCommentParams {
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
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number = value;
  }
  return result;
}
