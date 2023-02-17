import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ChannelAnalytics)/Params.ts";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type ChannelAnalytics = {
    params?: Params;
  }
}

export type Type = $.youtube.ChannelAnalytics;

export function getDefaultValue(): $.youtube.ChannelAnalytics {
  return {
    params: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.ChannelAnalytics>): $.youtube.ChannelAnalytics {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ChannelAnalytics): unknown {
  const result: any = {};
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  return result;
}

export function decodeJson(value: any): $.youtube.ChannelAnalytics {
  const result = getDefaultValue();
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  return result;
}

export function encodeBinary(value: $.youtube.ChannelAnalytics): Uint8Array {
  const result: WireMessage = [];
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [32, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ChannelAnalytics {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(32);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  return result;
}
