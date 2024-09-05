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

export declare namespace $.youtube.api.pfiinnertube.InnerTubeContext {
  export type ClickTrackingInfo = {
    clickTrackingParams?: Uint8Array;
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo {
  return {
    clickTrackingParams: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo>): $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo): unknown {
  const result: any = {};
  if (value.clickTrackingParams !== undefined) result.clickTrackingParams = tsValueToJsonValueFns.bytes(value.clickTrackingParams);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo {
  const result = getDefaultValue();
  if (value.clickTrackingParams !== undefined) result.clickTrackingParams = jsonValueToTsValueFns.bytes(value.clickTrackingParams);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.clickTrackingParams !== undefined) {
    const tsValue = value.clickTrackingParams;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeContext.ClickTrackingInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.clickTrackingParams = value;
  }
  return result;
}
