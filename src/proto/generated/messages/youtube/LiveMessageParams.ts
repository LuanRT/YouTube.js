import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(LiveMessageParams)/Params.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type LiveMessageParams = {
    params?: Params;
    number0?: number;
    number1?: number;
  }
}

export type Type = $.youtube.LiveMessageParams;

export function getDefaultValue(): $.youtube.LiveMessageParams {
  return {
    params: undefined,
    number0: undefined,
    number1: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.LiveMessageParams>): $.youtube.LiveMessageParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.LiveMessageParams): unknown {
  const result: any = {};
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  if (value.number0 !== undefined) result.number0 = tsValueToJsonValueFns.int32(value.number0);
  if (value.number1 !== undefined) result.number1 = tsValueToJsonValueFns.int32(value.number1);
  return result;
}

export function decodeJson(value: any): $.youtube.LiveMessageParams {
  const result = getDefaultValue();
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  if (value.number0 !== undefined) result.number0 = jsonValueToTsValueFns.int32(value.number0);
  if (value.number1 !== undefined) result.number1 = jsonValueToTsValueFns.int32(value.number1);
  return result;
}

export function encodeBinary(value: $.youtube.LiveMessageParams): Uint8Array {
  const result: WireMessage = [];
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.number0 !== undefined) {
    const tsValue = value.number0;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.number1 !== undefined) {
    const tsValue = value.number1;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.LiveMessageParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number0 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number1 = value;
  }
  return result;
}
