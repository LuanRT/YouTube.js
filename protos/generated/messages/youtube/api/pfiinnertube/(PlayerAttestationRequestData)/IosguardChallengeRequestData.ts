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

export declare namespace $.youtube.api.pfiinnertube.PlayerAttestationRequestData {
  export type IosguardChallengeRequestData = {
    challengeRequest?: Uint8Array;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData {
  return {
    challengeRequest: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData>): $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData): unknown {
  const result: any = {};
  if (value.challengeRequest !== undefined) result.challengeRequest = tsValueToJsonValueFns.bytes(value.challengeRequest);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData {
  const result = getDefaultValue();
  if (value.challengeRequest !== undefined) result.challengeRequest = jsonValueToTsValueFns.bytes(value.challengeRequest);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData): Uint8Array {
  const result: WireMessage = [];
  if (value.challengeRequest !== undefined) {
    const tsValue = value.challengeRequest;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlayerAttestationRequestData.IosguardChallengeRequestData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.challengeRequest = value;
  }
  return result;
}
