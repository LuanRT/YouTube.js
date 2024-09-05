import {
  Type as InnerTubeContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InnerTubeContext.js";
import {
  Type as PlayerRequest,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./PlayerRequest.js";
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
  export type ReelItemWatchRequest = {
    context?: InnerTubeContext;
    playerRequest?: PlayerRequest;
    params?: string;
    disablePlayerResponse?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ReelItemWatchRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ReelItemWatchRequest {
  return {
    context: undefined,
    playerRequest: undefined,
    params: undefined,
    disablePlayerResponse: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ReelItemWatchRequest>): $.youtube.api.pfiinnertube.ReelItemWatchRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ReelItemWatchRequest): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.playerRequest !== undefined) result.playerRequest = encodeJson_2(value.playerRequest);
  if (value.params !== undefined) result.params = tsValueToJsonValueFns.string(value.params);
  if (value.disablePlayerResponse !== undefined) result.disablePlayerResponse = tsValueToJsonValueFns.bool(value.disablePlayerResponse);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ReelItemWatchRequest {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.playerRequest !== undefined) result.playerRequest = decodeJson_2(value.playerRequest);
  if (value.params !== undefined) result.params = jsonValueToTsValueFns.string(value.params);
  if (value.disablePlayerResponse !== undefined) result.disablePlayerResponse = jsonValueToTsValueFns.bool(value.disablePlayerResponse);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ReelItemWatchRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.playerRequest !== undefined) {
    const tsValue = value.playerRequest;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.disablePlayerResponse !== undefined) {
    const tsValue = value.disablePlayerResponse;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ReelItemWatchRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.playerRequest = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.disablePlayerResponse = value;
  }
  return result;
}
