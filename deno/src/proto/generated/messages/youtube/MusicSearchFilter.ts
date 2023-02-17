import {
  Type as Filters,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(MusicSearchFilter)/Filters.ts";
import {
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type MusicSearchFilter = {
    filters?: Filters;
  }
}

export type Type = $.youtube.MusicSearchFilter;

export function getDefaultValue(): $.youtube.MusicSearchFilter {
  return {
    filters: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.MusicSearchFilter>): $.youtube.MusicSearchFilter {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.MusicSearchFilter): unknown {
  const result: any = {};
  if (value.filters !== undefined) result.filters = encodeJson_1(value.filters);
  return result;
}

export function decodeJson(value: any): $.youtube.MusicSearchFilter {
  const result = getDefaultValue();
  if (value.filters !== undefined) result.filters = decodeJson_1(value.filters);
  return result;
}

export function encodeBinary(value: $.youtube.MusicSearchFilter): Uint8Array {
  const result: WireMessage = [];
  if (value.filters !== undefined) {
    const tsValue = value.filters;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.MusicSearchFilter {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.filters = value;
  }
  return result;
}
