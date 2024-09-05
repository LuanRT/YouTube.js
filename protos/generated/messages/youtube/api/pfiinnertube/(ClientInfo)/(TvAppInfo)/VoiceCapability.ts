import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo {
  export type VoiceCapability = {
    hasSoftMicSupport?: boolean;
    hasHardMicSupport?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability {
  return {
    hasSoftMicSupport: undefined,
    hasHardMicSupport: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability>): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability): unknown {
  const result: any = {};
  if (value.hasSoftMicSupport !== undefined) result.hasSoftMicSupport = tsValueToJsonValueFns.bool(value.hasSoftMicSupport);
  if (value.hasHardMicSupport !== undefined) result.hasHardMicSupport = tsValueToJsonValueFns.bool(value.hasHardMicSupport);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability {
  const result = getDefaultValue();
  if (value.hasSoftMicSupport !== undefined) result.hasSoftMicSupport = jsonValueToTsValueFns.bool(value.hasSoftMicSupport);
  if (value.hasHardMicSupport !== undefined) result.hasHardMicSupport = jsonValueToTsValueFns.bool(value.hasHardMicSupport);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability): Uint8Array {
  const result: WireMessage = [];
  if (value.hasSoftMicSupport !== undefined) {
    const tsValue = value.hasSoftMicSupport;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.hasHardMicSupport !== undefined) {
    const tsValue = value.hasHardMicSupport;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.TvAppInfo.VoiceCapability {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.hasSoftMicSupport = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.hasHardMicSupport = value;
  }
  return result;
}
