import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.Upa.Gqa {
  export type Hqa = {
    code?: number;
    message?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.Upa.Gqa.Hqa;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Upa.Gqa.Hqa {
  return {
    code: undefined,
    message: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Upa.Gqa.Hqa>): $.youtube.api.pfiinnertube.Upa.Gqa.Hqa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Upa.Gqa.Hqa): unknown {
  const result: any = {};
  if (value.code !== undefined) result.code = tsValueToJsonValueFns.int32(value.code);
  if (value.message !== undefined) result.message = tsValueToJsonValueFns.string(value.message);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Upa.Gqa.Hqa {
  const result = getDefaultValue();
  if (value.code !== undefined) result.code = jsonValueToTsValueFns.int32(value.code);
  if (value.message !== undefined) result.message = jsonValueToTsValueFns.string(value.message);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Upa.Gqa.Hqa): Uint8Array {
  const result: WireMessage = [];
  if (value.code !== undefined) {
    const tsValue = value.code;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.message !== undefined) {
    const tsValue = value.message;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Upa.Gqa.Hqa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.code = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.message = value;
  }
  return result;
}
