import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
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
  export type OQa = {
    field1: string[];
    field2?: Uint8Array;
    field3?: string;
    field4?: number;
    field5?: number;
    field6?: string;
  }
}

export type Type = $.youtube.OQa;

export function getDefaultValue(): $.youtube.OQa {
  return {
    field1: [],
    field2: undefined,
    field3: undefined,
    field4: undefined,
    field5: undefined,
    field6: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.OQa>): $.youtube.OQa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.OQa): unknown {
  const result: any = {};
  result.field1 = value.field1.map(value => tsValueToJsonValueFns.string(value));
  if (value.field2 !== undefined) result.field2 = tsValueToJsonValueFns.bytes(value.field2);
  if (value.field3 !== undefined) result.field3 = tsValueToJsonValueFns.string(value.field3);
  if (value.field4 !== undefined) result.field4 = tsValueToJsonValueFns.int32(value.field4);
  if (value.field5 !== undefined) result.field5 = tsValueToJsonValueFns.int32(value.field5);
  if (value.field6 !== undefined) result.field6 = tsValueToJsonValueFns.string(value.field6);
  return result;
}

export function decodeJson(value: any): $.youtube.OQa {
  const result = getDefaultValue();
  result.field1 = value.field1?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.field2 !== undefined) result.field2 = jsonValueToTsValueFns.bytes(value.field2);
  if (value.field3 !== undefined) result.field3 = jsonValueToTsValueFns.string(value.field3);
  if (value.field4 !== undefined) result.field4 = jsonValueToTsValueFns.int32(value.field4);
  if (value.field5 !== undefined) result.field5 = jsonValueToTsValueFns.int32(value.field5);
  if (value.field6 !== undefined) result.field6 = jsonValueToTsValueFns.string(value.field6);
  return result;
}

export function encodeBinary(value: $.youtube.OQa): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.field1) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.field2 !== undefined) {
    const tsValue = value.field2;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.field3 !== undefined) {
    const tsValue = value.field3;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.field4 !== undefined) {
    const tsValue = value.field4;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field5 !== undefined) {
    const tsValue = value.field5;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field6 !== undefined) {
    const tsValue = value.field6;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.OQa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.field1 = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.field2 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.field3 = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field4 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field5 = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.field6 = value;
  }
  return result;
}
