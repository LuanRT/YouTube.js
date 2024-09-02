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

export declare namespace $.youtube.PlaybackStartPolicy {
  export type ReadaheadPolicy = {
    minBandwidthBytesPerSec?: number;
    minReadaheadMs?: number;
  }
}

export type Type = $.youtube.PlaybackStartPolicy.ReadaheadPolicy;

export function getDefaultValue(): $.youtube.PlaybackStartPolicy.ReadaheadPolicy {
  return {
    minBandwidthBytesPerSec: undefined,
    minReadaheadMs: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.PlaybackStartPolicy.ReadaheadPolicy>): $.youtube.PlaybackStartPolicy.ReadaheadPolicy {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.PlaybackStartPolicy.ReadaheadPolicy): unknown {
  const result: any = {};
  if (value.minBandwidthBytesPerSec !== undefined) result.minBandwidthBytesPerSec = tsValueToJsonValueFns.int32(value.minBandwidthBytesPerSec);
  if (value.minReadaheadMs !== undefined) result.minReadaheadMs = tsValueToJsonValueFns.int32(value.minReadaheadMs);
  return result;
}

export function decodeJson(value: any): $.youtube.PlaybackStartPolicy.ReadaheadPolicy {
  const result = getDefaultValue();
  if (value.minBandwidthBytesPerSec !== undefined) result.minBandwidthBytesPerSec = jsonValueToTsValueFns.int32(value.minBandwidthBytesPerSec);
  if (value.minReadaheadMs !== undefined) result.minReadaheadMs = jsonValueToTsValueFns.int32(value.minReadaheadMs);
  return result;
}

export function encodeBinary(value: $.youtube.PlaybackStartPolicy.ReadaheadPolicy): Uint8Array {
  const result: WireMessage = [];
  if (value.minBandwidthBytesPerSec !== undefined) {
    const tsValue = value.minBandwidthBytesPerSec;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.minReadaheadMs !== undefined) {
    const tsValue = value.minReadaheadMs;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.PlaybackStartPolicy.ReadaheadPolicy {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.minBandwidthBytesPerSec = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.minReadaheadMs = value;
  }
  return result;
}
