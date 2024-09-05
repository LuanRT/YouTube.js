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
  export type DelegationContext = {}
}

export type Type = $.youtube.api.pfiinnertube.UserInfo.DelegationContext;

export function getDefaultValue(): $.youtube.api.pfiinnertube.UserInfo.DelegationContext {
  return {
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.UserInfo.DelegationContext>): $.youtube.api.pfiinnertube.UserInfo.DelegationContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.UserInfo.DelegationContext): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.UserInfo.DelegationContext {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.UserInfo.DelegationContext): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.UserInfo.DelegationContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
