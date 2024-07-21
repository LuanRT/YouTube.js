import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.Kob {
  export type Pa = {
    videoId: string;
    lmt: string;
  }
}

export type Type = $.youtube.Kob.Pa;

export function getDefaultValue(): $.youtube.Kob.Pa {
  return {
    videoId: "",
    lmt: "0",
  };
}

export function createValue(partialValue: Partial<$.youtube.Kob.Pa>): $.youtube.Kob.Pa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Kob.Pa): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.lmt !== undefined) result.lmt = tsValueToJsonValueFns.int64(value.lmt);
  return result;
}

export function decodeJson(value: any): $.youtube.Kob.Pa {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.lmt !== undefined) result.lmt = jsonValueToTsValueFns.int64(value.lmt);
  return result;
}

export function encodeBinary(value: $.youtube.Kob.Pa): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.lmt !== undefined) {
    const tsValue = value.lmt;
    result.push(
      [2, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Kob.Pa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.lmt = value;
  }
  return result;
}
