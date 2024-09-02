import {
  Type as Item,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(RequestCancellationPolicy)/Item.js";
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
  export type RequestCancellationPolicy = {
    N0?: number;
    items: Item[];
    jq?: number;
  }
}

export type Type = $.youtube.RequestCancellationPolicy;

export function getDefaultValue(): $.youtube.RequestCancellationPolicy {
  return {
    N0: undefined,
    items: [],
    jq: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.RequestCancellationPolicy>): $.youtube.RequestCancellationPolicy {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.RequestCancellationPolicy): unknown {
  const result: any = {};
  if (value.N0 !== undefined) result.N0 = tsValueToJsonValueFns.int32(value.N0);
  result.items = value.items.map(value => encodeJson_1(value));
  if (value.jq !== undefined) result.jq = tsValueToJsonValueFns.int32(value.jq);
  return result;
}

export function decodeJson(value: any): $.youtube.RequestCancellationPolicy {
  const result = getDefaultValue();
  if (value.N0 !== undefined) result.N0 = jsonValueToTsValueFns.int32(value.N0);
  result.items = value.items?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.jq !== undefined) result.jq = jsonValueToTsValueFns.int32(value.jq);
  return result;
}

export function encodeBinary(value: $.youtube.RequestCancellationPolicy): Uint8Array {
  const result: WireMessage = [];
  if (value.N0 !== undefined) {
    const tsValue = value.N0;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  for (const tsValue of value.items) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.jq !== undefined) {
    const tsValue = value.jq;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.RequestCancellationPolicy {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.N0 = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.items = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.jq = value;
  }
  return result;
}
