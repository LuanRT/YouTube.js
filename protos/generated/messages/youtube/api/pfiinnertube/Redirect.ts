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
  export type Redirect = {
    url?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.Redirect;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Redirect {
  return {
    url: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Redirect>): $.youtube.api.pfiinnertube.Redirect {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Redirect): unknown {
  const result: any = {};
  if (value.url !== undefined) result.url = tsValueToJsonValueFns.string(value.url);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Redirect {
  const result = getDefaultValue();
  if (value.url !== undefined) result.url = jsonValueToTsValueFns.string(value.url);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Redirect): Uint8Array {
  const result: WireMessage = [];
  if (value.url !== undefined) {
    const tsValue = value.url;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Redirect {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.url = value;
  }
  return result;
}
