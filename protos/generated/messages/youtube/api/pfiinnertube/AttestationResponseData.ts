import {
  Type as AdblockReporting,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(AttestationResponseData)/AdblockReporting.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type AttestationResponseData = {
    challenge?: string;
    webResponse?: string;
    androidResponse?: string;
    iosResponse?: Uint8Array;
    error?: number;
    adblockReporting?: AdblockReporting;
  }
}

export type Type = $.youtube.api.pfiinnertube.AttestationResponseData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.AttestationResponseData {
  return {
    challenge: undefined,
    webResponse: undefined,
    androidResponse: undefined,
    iosResponse: undefined,
    error: undefined,
    adblockReporting: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.AttestationResponseData>): $.youtube.api.pfiinnertube.AttestationResponseData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.AttestationResponseData): unknown {
  const result: any = {};
  if (value.challenge !== undefined) result.challenge = tsValueToJsonValueFns.string(value.challenge);
  if (value.webResponse !== undefined) result.webResponse = tsValueToJsonValueFns.string(value.webResponse);
  if (value.androidResponse !== undefined) result.androidResponse = tsValueToJsonValueFns.string(value.androidResponse);
  if (value.iosResponse !== undefined) result.iosResponse = tsValueToJsonValueFns.bytes(value.iosResponse);
  if (value.error !== undefined) result.error = tsValueToJsonValueFns.int32(value.error);
  if (value.adblockReporting !== undefined) result.adblockReporting = encodeJson_1(value.adblockReporting);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.AttestationResponseData {
  const result = getDefaultValue();
  if (value.challenge !== undefined) result.challenge = jsonValueToTsValueFns.string(value.challenge);
  if (value.webResponse !== undefined) result.webResponse = jsonValueToTsValueFns.string(value.webResponse);
  if (value.androidResponse !== undefined) result.androidResponse = jsonValueToTsValueFns.string(value.androidResponse);
  if (value.iosResponse !== undefined) result.iosResponse = jsonValueToTsValueFns.bytes(value.iosResponse);
  if (value.error !== undefined) result.error = jsonValueToTsValueFns.int32(value.error);
  if (value.adblockReporting !== undefined) result.adblockReporting = decodeJson_1(value.adblockReporting);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.AttestationResponseData): Uint8Array {
  const result: WireMessage = [];
  if (value.challenge !== undefined) {
    const tsValue = value.challenge;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.webResponse !== undefined) {
    const tsValue = value.webResponse;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.androidResponse !== undefined) {
    const tsValue = value.androidResponse;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.iosResponse !== undefined) {
    const tsValue = value.iosResponse;
    result.push(
      [4, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.error !== undefined) {
    const tsValue = value.error;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.adblockReporting !== undefined) {
    const tsValue = value.adblockReporting;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.AttestationResponseData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.challenge = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.webResponse = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.androidResponse = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.iosResponse = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.error = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.adblockReporting = value;
  }
  return result;
}
