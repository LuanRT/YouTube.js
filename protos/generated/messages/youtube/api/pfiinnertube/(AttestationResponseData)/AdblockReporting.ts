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

export declare namespace $.youtube.api.pfiinnertube.AttestationResponseData {
  export type AdblockReporting = {
    reportingStatus?: string;
    broadSpectrumDetectionResult?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting;

export function getDefaultValue(): $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting {
  return {
    reportingStatus: undefined,
    broadSpectrumDetectionResult: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting>): $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting): unknown {
  const result: any = {};
  if (value.reportingStatus !== undefined) result.reportingStatus = tsValueToJsonValueFns.uint64(value.reportingStatus);
  if (value.broadSpectrumDetectionResult !== undefined) result.broadSpectrumDetectionResult = tsValueToJsonValueFns.uint64(value.broadSpectrumDetectionResult);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting {
  const result = getDefaultValue();
  if (value.reportingStatus !== undefined) result.reportingStatus = jsonValueToTsValueFns.uint64(value.reportingStatus);
  if (value.broadSpectrumDetectionResult !== undefined) result.broadSpectrumDetectionResult = jsonValueToTsValueFns.uint64(value.broadSpectrumDetectionResult);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting): Uint8Array {
  const result: WireMessage = [];
  if (value.reportingStatus !== undefined) {
    const tsValue = value.reportingStatus;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.broadSpectrumDetectionResult !== undefined) {
    const tsValue = value.broadSpectrumDetectionResult;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.AttestationResponseData.AdblockReporting {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.reportingStatus = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.broadSpectrumDetectionResult = value;
  }
  return result;
}
