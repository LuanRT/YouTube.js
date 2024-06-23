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

export declare namespace $.youtube.MediaHeader {
  export type ItagData = {
    itag: number;
    lmt: string;
  }
}

export type Type = $.youtube.MediaHeader.ItagData;

export function getDefaultValue(): $.youtube.MediaHeader.ItagData {
  return {
    itag: 0,
    lmt: "0",
  };
}

export function createValue(partialValue: Partial<$.youtube.MediaHeader.ItagData>): $.youtube.MediaHeader.ItagData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MediaHeader.ItagData): unknown {
  const result: any = {};
  if (value.itag !== undefined) result.itag = tsValueToJsonValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = tsValueToJsonValueFns.int64(value.lmt);
  return result;
}

export function decodeJson(value: any): $.youtube.MediaHeader.ItagData {
  const result = getDefaultValue();
  if (value.itag !== undefined) result.itag = jsonValueToTsValueFns.int32(value.itag);
  if (value.lmt !== undefined) result.lmt = jsonValueToTsValueFns.int64(value.lmt);
  return result;
}

export function encodeBinary(value: $.youtube.MediaHeader.ItagData): Uint8Array {
  const result: WireMessage = [];
  if (value.itag !== undefined) {
    const tsValue = value.itag;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
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

export function decodeBinary(binary: Uint8Array): $.youtube.MediaHeader.ItagData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.itag = value;
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
