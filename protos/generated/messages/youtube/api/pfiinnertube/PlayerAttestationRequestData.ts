import {
  Type as IosguardChallengeRequestData,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(PlayerAttestationRequestData)/IosguardChallengeRequestData.js";
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
  export type PlayerAttestationRequestData = {
    iosguardRequest?: IosguardChallengeRequestData;
    omitBotguardData?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlayerAttestationRequestData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlayerAttestationRequestData {
  return {
    iosguardRequest: undefined,
    omitBotguardData: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlayerAttestationRequestData>): $.youtube.api.pfiinnertube.PlayerAttestationRequestData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlayerAttestationRequestData): unknown {
  const result: any = {};
  if (value.iosguardRequest !== undefined) result.iosguardRequest = encodeJson_1(value.iosguardRequest);
  if (value.omitBotguardData !== undefined) result.omitBotguardData = tsValueToJsonValueFns.bool(value.omitBotguardData);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlayerAttestationRequestData {
  const result = getDefaultValue();
  if (value.iosguardRequest !== undefined) result.iosguardRequest = decodeJson_1(value.iosguardRequest);
  if (value.omitBotguardData !== undefined) result.omitBotguardData = jsonValueToTsValueFns.bool(value.omitBotguardData);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlayerAttestationRequestData): Uint8Array {
  const result: WireMessage = [];
  if (value.iosguardRequest !== undefined) {
    const tsValue = value.iosguardRequest;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.omitBotguardData !== undefined) {
    const tsValue = value.omitBotguardData;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlayerAttestationRequestData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.iosguardRequest = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.omitBotguardData = value;
  }
  return result;
}
