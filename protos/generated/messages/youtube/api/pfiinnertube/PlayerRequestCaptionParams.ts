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
  export type PlayerRequestCaptionParams = {
    deviceCaptionsOn?: boolean;
    deviceCaptionsLangPref?: string;
    viewerSelectedCaptionLangs?: string;
    ccLangPref?: string;
    ccLoadPolicyOn?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.PlayerRequestCaptionParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.PlayerRequestCaptionParams {
  return {
    deviceCaptionsOn: undefined,
    deviceCaptionsLangPref: undefined,
    viewerSelectedCaptionLangs: undefined,
    ccLangPref: undefined,
    ccLoadPolicyOn: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.PlayerRequestCaptionParams>): $.youtube.api.pfiinnertube.PlayerRequestCaptionParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.PlayerRequestCaptionParams): unknown {
  const result: any = {};
  if (value.deviceCaptionsOn !== undefined) result.deviceCaptionsOn = tsValueToJsonValueFns.bool(value.deviceCaptionsOn);
  if (value.deviceCaptionsLangPref !== undefined) result.deviceCaptionsLangPref = tsValueToJsonValueFns.string(value.deviceCaptionsLangPref);
  if (value.viewerSelectedCaptionLangs !== undefined) result.viewerSelectedCaptionLangs = tsValueToJsonValueFns.string(value.viewerSelectedCaptionLangs);
  if (value.ccLangPref !== undefined) result.ccLangPref = tsValueToJsonValueFns.string(value.ccLangPref);
  if (value.ccLoadPolicyOn !== undefined) result.ccLoadPolicyOn = tsValueToJsonValueFns.bool(value.ccLoadPolicyOn);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.PlayerRequestCaptionParams {
  const result = getDefaultValue();
  if (value.deviceCaptionsOn !== undefined) result.deviceCaptionsOn = jsonValueToTsValueFns.bool(value.deviceCaptionsOn);
  if (value.deviceCaptionsLangPref !== undefined) result.deviceCaptionsLangPref = jsonValueToTsValueFns.string(value.deviceCaptionsLangPref);
  if (value.viewerSelectedCaptionLangs !== undefined) result.viewerSelectedCaptionLangs = jsonValueToTsValueFns.string(value.viewerSelectedCaptionLangs);
  if (value.ccLangPref !== undefined) result.ccLangPref = jsonValueToTsValueFns.string(value.ccLangPref);
  if (value.ccLoadPolicyOn !== undefined) result.ccLoadPolicyOn = jsonValueToTsValueFns.bool(value.ccLoadPolicyOn);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.PlayerRequestCaptionParams): Uint8Array {
  const result: WireMessage = [];
  if (value.deviceCaptionsOn !== undefined) {
    const tsValue = value.deviceCaptionsOn;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.deviceCaptionsLangPref !== undefined) {
    const tsValue = value.deviceCaptionsLangPref;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.viewerSelectedCaptionLangs !== undefined) {
    const tsValue = value.viewerSelectedCaptionLangs;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.ccLangPref !== undefined) {
    const tsValue = value.ccLangPref;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.ccLoadPolicyOn !== undefined) {
    const tsValue = value.ccLoadPolicyOn;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.PlayerRequestCaptionParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.deviceCaptionsOn = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.deviceCaptionsLangPref = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.viewerSelectedCaptionLangs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ccLangPref = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.ccLoadPolicyOn = value;
  }
  return result;
}
