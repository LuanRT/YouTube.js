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
  Type as WatchNextRequest,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./WatchNextRequest.js";
import {
  Type as ReelItemWatchRequest,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./ReelItemWatchRequest.js";
import {
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
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type GetWatchRequest = {
    context?: InnerTubeContext;
    playerRequest?: PlayerRequest;
    watchNextRequest?: WatchNextRequest;
    reelItemWatchRequest?: ReelItemWatchRequest;
  }
}

export type Type = $.youtube.api.pfiinnertube.GetWatchRequest;

export function getDefaultValue(): $.youtube.api.pfiinnertube.GetWatchRequest {
  return {
    context: undefined,
    playerRequest: undefined,
    watchNextRequest: undefined,
    reelItemWatchRequest: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.GetWatchRequest>): $.youtube.api.pfiinnertube.GetWatchRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.GetWatchRequest): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.playerRequest !== undefined) result.playerRequest = encodeJson_2(value.playerRequest);
  if (value.watchNextRequest !== undefined) result.watchNextRequest = encodeJson_3(value.watchNextRequest);
  if (value.reelItemWatchRequest !== undefined) result.reelItemWatchRequest = encodeJson_4(value.reelItemWatchRequest);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.GetWatchRequest {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.playerRequest !== undefined) result.playerRequest = decodeJson_2(value.playerRequest);
  if (value.watchNextRequest !== undefined) result.watchNextRequest = decodeJson_3(value.watchNextRequest);
  if (value.reelItemWatchRequest !== undefined) result.reelItemWatchRequest = decodeJson_4(value.reelItemWatchRequest);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.GetWatchRequest): Uint8Array {
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
  if (value.watchNextRequest !== undefined) {
    const tsValue = value.watchNextRequest;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.reelItemWatchRequest !== undefined) {
    const tsValue = value.reelItemWatchRequest;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.GetWatchRequest {
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
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.watchNextRequest = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.reelItemWatchRequest = value;
  }
  return result;
}
