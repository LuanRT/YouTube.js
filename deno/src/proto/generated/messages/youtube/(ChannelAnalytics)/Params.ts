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

export declare namespace $.youtube.ChannelAnalytics {
  export type Params = {
    channelId: string;
  }
}

export type Type = $.youtube.ChannelAnalytics.Params;

export function getDefaultValue(): $.youtube.ChannelAnalytics.Params {
  return {
    channelId: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.ChannelAnalytics.Params>): $.youtube.ChannelAnalytics.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.ChannelAnalytics.Params): unknown {
  const result: any = {};
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  return result;
}

export function decodeJson(value: any): $.youtube.ChannelAnalytics.Params {
  const result = getDefaultValue();
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  return result;
}

export function encodeBinary(value: $.youtube.ChannelAnalytics.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [1001, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.ChannelAnalytics.Params {
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
