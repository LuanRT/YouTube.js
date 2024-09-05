import {
  WireMessage,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.UserInfo {
  export type DelegatePurchases = {}
}

export type Type = $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases;

export function getDefaultValue(): $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases {
  return {
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.UserInfo.DelegatePurchases>): $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.UserInfo.DelegatePurchases {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
