import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.InnertubePayload.Context {
  export type Client = {
    unkparam: number;
    clientVersion: string;
    clientName: string;
  }
}

export type Type = $.youtube.InnertubePayload.Context.Client;

export function getDefaultValue(): $.youtube.InnertubePayload.Context.Client {
  return {
    unkparam: 0,
    clientVersion: "",
    clientName: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.InnertubePayload.Context.Client>): $.youtube.InnertubePayload.Context.Client {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.InnertubePayload.Context.Client): unknown {
  const result: any = {};
  if (value.unkparam !== undefined) result.unkparam = tsValueToJsonValueFns.int32(value.unkparam);
  if (value.clientVersion !== undefined) result.clientVersion = tsValueToJsonValueFns.string(value.clientVersion);
  if (value.clientName !== undefined) result.clientName = tsValueToJsonValueFns.string(value.clientName);
  return result;
}

export function decodeJson(value: any): $.youtube.InnertubePayload.Context.Client {
  const result = getDefaultValue();
  if (value.unkparam !== undefined) result.unkparam = jsonValueToTsValueFns.int32(value.unkparam);
  if (value.clientVersion !== undefined) result.clientVersion = jsonValueToTsValueFns.string(value.clientVersion);
  if (value.clientName !== undefined) result.clientName = jsonValueToTsValueFns.string(value.clientName);
  return result;
}

export function encodeBinary(value: $.youtube.InnertubePayload.Context.Client): Uint8Array {
  const result: WireMessage = [];
  if (value.unkparam !== undefined) {
    const tsValue = value.unkparam;
    result.push(
      [16, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.clientVersion !== undefined) {
    const tsValue = value.clientVersion;
    result.push(
      [17, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientName !== undefined) {
    const tsValue = value.clientName;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.InnertubePayload.Context.Client {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.unkparam = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientVersion = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientName = value;
  }
  return result;
}
