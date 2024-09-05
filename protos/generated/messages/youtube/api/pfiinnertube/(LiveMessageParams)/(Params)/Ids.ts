import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.LiveMessageParams.Params {
  export type Ids = {
    channelId: string;
    videoId: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids;

export function getDefaultValue(): $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids {
  return {
    channelId: "",
    videoId: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids>): $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids): unknown {
  const result: any = {};
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids {
  const result = getDefaultValue();
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids): Uint8Array {
  const result: WireMessage = [];
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.LiveMessageParams.Params.Ids {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.channelId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  return result;
}
