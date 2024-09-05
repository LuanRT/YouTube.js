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

export declare namespace $.youtube.api.pfiinnertube.ThirdPartyInfo {
  export type EmbeddedPlayerContext = {
    ancestorOrigins?: string;
    embeddedPlayerEncryptedContext?: string;
    ancestorOriginsSupported?: boolean;
  }
}

export type Type = $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext {
  return {
    ancestorOrigins: undefined,
    embeddedPlayerEncryptedContext: undefined,
    ancestorOriginsSupported: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext>): $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext): unknown {
  const result: any = {};
  if (value.ancestorOrigins !== undefined) result.ancestorOrigins = tsValueToJsonValueFns.string(value.ancestorOrigins);
  if (value.embeddedPlayerEncryptedContext !== undefined) result.embeddedPlayerEncryptedContext = tsValueToJsonValueFns.string(value.embeddedPlayerEncryptedContext);
  if (value.ancestorOriginsSupported !== undefined) result.ancestorOriginsSupported = tsValueToJsonValueFns.bool(value.ancestorOriginsSupported);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext {
  const result = getDefaultValue();
  if (value.ancestorOrigins !== undefined) result.ancestorOrigins = jsonValueToTsValueFns.string(value.ancestorOrigins);
  if (value.embeddedPlayerEncryptedContext !== undefined) result.embeddedPlayerEncryptedContext = jsonValueToTsValueFns.string(value.embeddedPlayerEncryptedContext);
  if (value.ancestorOriginsSupported !== undefined) result.ancestorOriginsSupported = jsonValueToTsValueFns.bool(value.ancestorOriginsSupported);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext): Uint8Array {
  const result: WireMessage = [];
  if (value.ancestorOrigins !== undefined) {
    const tsValue = value.ancestorOrigins;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.embeddedPlayerEncryptedContext !== undefined) {
    const tsValue = value.embeddedPlayerEncryptedContext;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.ancestorOriginsSupported !== undefined) {
    const tsValue = value.ancestorOriginsSupported;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ThirdPartyInfo.EmbeddedPlayerContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ancestorOrigins = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.embeddedPlayerEncryptedContext = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.ancestorOriginsSupported = value;
  }
  return result;
}
