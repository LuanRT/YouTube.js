import {
  Type as SortBy,
  name2num,
  num2name,
} from "./(SearchFilter)/SortBy.js";
import {
  Type as Filters,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(SearchFilter)/Filters.js";
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
  default as Long,
} from "../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type SearchFilter = {
    sortBy?: SortBy;
    filters?: Filters;
  }
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter;

export function getDefaultValue(): $.youtube.api.pfiinnertube.SearchFilter {
  return {
    sortBy: undefined,
    filters: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.SearchFilter>): $.youtube.api.pfiinnertube.SearchFilter {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.SearchFilter): unknown {
  const result: any = {};
  if (value.sortBy !== undefined) result.sortBy = tsValueToJsonValueFns.enum(value.sortBy);
  if (value.filters !== undefined) result.filters = encodeJson_1(value.filters);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.SearchFilter {
  const result = getDefaultValue();
  if (value.sortBy !== undefined) result.sortBy = jsonValueToTsValueFns.enum(value.sortBy) as SortBy;
  if (value.filters !== undefined) result.filters = decodeJson_1(value.filters);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.SearchFilter): Uint8Array {
  const result: WireMessage = [];
  if (value.sortBy !== undefined) {
    const tsValue = value.sortBy;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.filters !== undefined) {
    const tsValue = value.filters;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.SearchFilter {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.sortBy = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.filters = value;
  }
  return result;
}
