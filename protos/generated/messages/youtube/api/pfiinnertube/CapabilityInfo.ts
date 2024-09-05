import {
  Type as InnerTubeCapability,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InnerTubeCapability.js";
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
  export type CapabilityInfo = {
    profile?: string;
    supportedCapabilities: InnerTubeCapability[];
    disabledCapabilities: InnerTubeCapability[];
    snapshot?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.CapabilityInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.CapabilityInfo {
  return {
    profile: undefined,
    supportedCapabilities: [],
    disabledCapabilities: [],
    snapshot: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.CapabilityInfo>): $.youtube.api.pfiinnertube.CapabilityInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.CapabilityInfo): unknown {
  const result: any = {};
  if (value.profile !== undefined) result.profile = tsValueToJsonValueFns.string(value.profile);
  result.supportedCapabilities = value.supportedCapabilities.map(value => encodeJson_1(value));
  result.disabledCapabilities = value.disabledCapabilities.map(value => encodeJson_1(value));
  if (value.snapshot !== undefined) result.snapshot = tsValueToJsonValueFns.string(value.snapshot);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.CapabilityInfo {
  const result = getDefaultValue();
  if (value.profile !== undefined) result.profile = jsonValueToTsValueFns.string(value.profile);
  result.supportedCapabilities = value.supportedCapabilities?.map((value: any) => decodeJson_1(value)) ?? [];
  result.disabledCapabilities = value.disabledCapabilities?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.snapshot !== undefined) result.snapshot = jsonValueToTsValueFns.string(value.snapshot);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.CapabilityInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.profile !== undefined) {
    const tsValue = value.profile;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.supportedCapabilities) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.disabledCapabilities) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.snapshot !== undefined) {
    const tsValue = value.snapshot;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.CapabilityInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.profile = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.supportedCapabilities = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.disabledCapabilities = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.snapshot = value;
  }
  return result;
}
