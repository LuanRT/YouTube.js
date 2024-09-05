import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ChannelAnalytics)/Params.js";
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

export declare namespace $.youtube.api.pfiinnertube {
  export type ChannelAnalytics = {
    params?: Params;
  }
}

export type Type = $.youtube.api.pfiinnertube.ChannelAnalytics;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ChannelAnalytics {
  return {
    params: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ChannelAnalytics>): $.youtube.api.pfiinnertube.ChannelAnalytics {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ChannelAnalytics): unknown {
  const result: any = {};
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ChannelAnalytics {
  const result = getDefaultValue();
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ChannelAnalytics): Uint8Array {
  const result: WireMessage = [];
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [32, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ChannelAnalytics {
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
