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

export declare namespace $.youtube.api.pfiinnertube.Upa {
  export type Fqa = {
    type?: number;
    value?: Uint8Array;
  }
}

export type Type = $.youtube.api.pfiinnertube.Upa.Fqa;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Upa.Fqa {
  return {
    type: undefined,
    value: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Upa.Fqa>): $.youtube.api.pfiinnertube.Upa.Fqa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Upa.Fqa): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.int32(value.type);
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.bytes(value.value);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Upa.Fqa {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.int32(value.type);
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.bytes(value.value);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Upa.Fqa): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Upa.Fqa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
