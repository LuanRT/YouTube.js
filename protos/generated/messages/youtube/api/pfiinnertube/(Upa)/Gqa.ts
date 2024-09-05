import {
  Type as Hqa,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Gqa)/Hqa.js";
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

export declare namespace $.youtube.api.pfiinnertube.Upa {
  export type Gqa = {
    field1?: Uint8Array;
    field2?: Hqa;
  }
}

export type Type = $.youtube.api.pfiinnertube.Upa.Gqa;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Upa.Gqa {
  return {
    field1: undefined,
    field2: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Upa.Gqa>): $.youtube.api.pfiinnertube.Upa.Gqa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Upa.Gqa): unknown {
  const result: any = {};
  if (value.field1 !== undefined) result.field1 = tsValueToJsonValueFns.bytes(value.field1);
  if (value.field2 !== undefined) result.field2 = encodeJson_1(value.field2);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Upa.Gqa {
  const result = getDefaultValue();
  if (value.field1 !== undefined) result.field1 = jsonValueToTsValueFns.bytes(value.field1);
  if (value.field2 !== undefined) result.field2 = decodeJson_1(value.field2);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Upa.Gqa): Uint8Array {
  const result: WireMessage = [];
  if (value.field1 !== undefined) {
    const tsValue = value.field1;
    result.push(
      [1, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.field2 !== undefined) {
    const tsValue = value.field2;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Upa.Gqa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.field1 = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field2 = value;
  }
  return result;
}
