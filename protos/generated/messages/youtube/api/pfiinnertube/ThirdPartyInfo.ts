import {
  Type as EmbeddedPlayerContext,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(ThirdPartyInfo)/EmbeddedPlayerContext.js";
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
  export type ThirdPartyInfo = {
    developerKey?: string;
    appName?: string;
    appPublisher?: string;
    embedUrl?: string;
    appVersion?: string;
    embeddedPlayerContext?: EmbeddedPlayerContext;
  }
}

export type Type = $.youtube.api.pfiinnertube.ThirdPartyInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ThirdPartyInfo {
  return {
    developerKey: undefined,
    appName: undefined,
    appPublisher: undefined,
    embedUrl: undefined,
    appVersion: undefined,
    embeddedPlayerContext: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ThirdPartyInfo>): $.youtube.api.pfiinnertube.ThirdPartyInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ThirdPartyInfo): unknown {
  const result: any = {};
  if (value.developerKey !== undefined) result.developerKey = tsValueToJsonValueFns.string(value.developerKey);
  if (value.appName !== undefined) result.appName = tsValueToJsonValueFns.string(value.appName);
  if (value.appPublisher !== undefined) result.appPublisher = tsValueToJsonValueFns.string(value.appPublisher);
  if (value.embedUrl !== undefined) result.embedUrl = tsValueToJsonValueFns.string(value.embedUrl);
  if (value.appVersion !== undefined) result.appVersion = tsValueToJsonValueFns.string(value.appVersion);
  if (value.embeddedPlayerContext !== undefined) result.embeddedPlayerContext = encodeJson_1(value.embeddedPlayerContext);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ThirdPartyInfo {
  const result = getDefaultValue();
  if (value.developerKey !== undefined) result.developerKey = jsonValueToTsValueFns.string(value.developerKey);
  if (value.appName !== undefined) result.appName = jsonValueToTsValueFns.string(value.appName);
  if (value.appPublisher !== undefined) result.appPublisher = jsonValueToTsValueFns.string(value.appPublisher);
  if (value.embedUrl !== undefined) result.embedUrl = jsonValueToTsValueFns.string(value.embedUrl);
  if (value.appVersion !== undefined) result.appVersion = jsonValueToTsValueFns.string(value.appVersion);
  if (value.embeddedPlayerContext !== undefined) result.embeddedPlayerContext = decodeJson_1(value.embeddedPlayerContext);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ThirdPartyInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.developerKey !== undefined) {
    const tsValue = value.developerKey;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.appName !== undefined) {
    const tsValue = value.appName;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.appPublisher !== undefined) {
    const tsValue = value.appPublisher;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.embedUrl !== undefined) {
    const tsValue = value.embedUrl;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.appVersion !== undefined) {
    const tsValue = value.appVersion;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.embeddedPlayerContext !== undefined) {
    const tsValue = value.embeddedPlayerContext;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ThirdPartyInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.developerKey = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.appName = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.appPublisher = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.embedUrl = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.appVersion = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.embeddedPlayerContext = value;
  }
  return result;
}
