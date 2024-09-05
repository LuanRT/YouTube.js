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

export declare namespace $.youtube.api.pfiinnertube.ChannelAnalytics {
  export type Params = {
    channelId: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.ChannelAnalytics.Params;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ChannelAnalytics.Params {
  return {
    channelId: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ChannelAnalytics.Params>): $.youtube.api.pfiinnertube.ChannelAnalytics.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ChannelAnalytics.Params): unknown {
  const result: any = {};
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ChannelAnalytics.Params {
  const result = getDefaultValue();
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ChannelAnalytics.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [1001, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ChannelAnalytics.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1001);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.channelId = value;
  }
  return result;
}
