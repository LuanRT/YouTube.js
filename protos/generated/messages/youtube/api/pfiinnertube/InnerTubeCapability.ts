import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
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
  export type InnerTubeCapability = {
    capability?: number;
    features?: number;
    experimentFlags?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeCapability;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeCapability {
  return {
    capability: undefined,
    features: undefined,
    experimentFlags: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeCapability>): $.youtube.api.pfiinnertube.InnerTubeCapability {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeCapability): unknown {
  const result: any = {};
  if (value.capability !== undefined) result.capability = tsValueToJsonValueFns.uint32(value.capability);
  if (value.features !== undefined) result.features = tsValueToJsonValueFns.uint32(value.features);
  if (value.experimentFlags !== undefined) result.experimentFlags = tsValueToJsonValueFns.string(value.experimentFlags);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeCapability {
  const result = getDefaultValue();
  if (value.capability !== undefined) result.capability = jsonValueToTsValueFns.uint32(value.capability);
  if (value.features !== undefined) result.features = jsonValueToTsValueFns.uint32(value.features);
  if (value.experimentFlags !== undefined) result.experimentFlags = jsonValueToTsValueFns.string(value.experimentFlags);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeCapability): Uint8Array {
  const result: WireMessage = [];
  if (value.capability !== undefined) {
    const tsValue = value.capability;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.features !== undefined) {
    const tsValue = value.features;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.experimentFlags !== undefined) {
    const tsValue = value.experimentFlags;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeCapability {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.capability = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.features = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.experimentFlags = value;
  }
  return result;
}
