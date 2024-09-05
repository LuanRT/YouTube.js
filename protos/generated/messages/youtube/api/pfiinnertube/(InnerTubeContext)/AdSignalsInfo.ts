import {
  Type as KeyValuePair,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../KeyValuePair.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
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

export declare namespace $.youtube.api.pfiinnertube.InnerTubeContext {
  export type AdSignalsInfo = {
    params: KeyValuePair[];
    bid?: string;
    mutsuId?: string;
    consentBumpState?: string;
    advertisingId?: string;
    limitAdTracking?: boolean;
    attributionOsSupportedVersion?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo {
  return {
    params: [],
    bid: undefined,
    mutsuId: undefined,
    consentBumpState: undefined,
    advertisingId: undefined,
    limitAdTracking: undefined,
    attributionOsSupportedVersion: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo>): $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo): unknown {
  const result: any = {};
  result.params = value.params.map(value => encodeJson_1(value));
  if (value.bid !== undefined) result.bid = tsValueToJsonValueFns.string(value.bid);
  if (value.mutsuId !== undefined) result.mutsuId = tsValueToJsonValueFns.string(value.mutsuId);
  if (value.consentBumpState !== undefined) result.consentBumpState = tsValueToJsonValueFns.string(value.consentBumpState);
  if (value.advertisingId !== undefined) result.advertisingId = tsValueToJsonValueFns.string(value.advertisingId);
  if (value.limitAdTracking !== undefined) result.limitAdTracking = tsValueToJsonValueFns.bool(value.limitAdTracking);
  if (value.attributionOsSupportedVersion !== undefined) result.attributionOsSupportedVersion = tsValueToJsonValueFns.string(value.attributionOsSupportedVersion);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo {
  const result = getDefaultValue();
  result.params = value.params?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.bid !== undefined) result.bid = jsonValueToTsValueFns.string(value.bid);
  if (value.mutsuId !== undefined) result.mutsuId = jsonValueToTsValueFns.string(value.mutsuId);
  if (value.consentBumpState !== undefined) result.consentBumpState = jsonValueToTsValueFns.string(value.consentBumpState);
  if (value.advertisingId !== undefined) result.advertisingId = jsonValueToTsValueFns.string(value.advertisingId);
  if (value.limitAdTracking !== undefined) result.limitAdTracking = jsonValueToTsValueFns.bool(value.limitAdTracking);
  if (value.attributionOsSupportedVersion !== undefined) result.attributionOsSupportedVersion = jsonValueToTsValueFns.string(value.attributionOsSupportedVersion);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.params) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.bid !== undefined) {
    const tsValue = value.bid;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.mutsuId !== undefined) {
    const tsValue = value.mutsuId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.consentBumpState !== undefined) {
    const tsValue = value.consentBumpState;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.advertisingId !== undefined) {
    const tsValue = value.advertisingId;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.limitAdTracking !== undefined) {
    const tsValue = value.limitAdTracking;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.attributionOsSupportedVersion !== undefined) {
    const tsValue = value.attributionOsSupportedVersion;
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeContext.AdSignalsInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.params = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bid = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mutsuId = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.consentBumpState = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.advertisingId = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.limitAdTracking = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.attributionOsSupportedVersion = value;
  }
  return result;
}
