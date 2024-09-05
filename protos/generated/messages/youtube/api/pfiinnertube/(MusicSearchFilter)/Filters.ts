import {
  Type as Type_1,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Filters)/Type.js";
import {
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
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.MusicSearchFilter {
  export type Filters = {
    type?: Type_1;
  }
}

export type Type = $.youtube.api.pfiinnertube.MusicSearchFilter.Filters;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MusicSearchFilter.Filters {
  return {
    type: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MusicSearchFilter.Filters>): $.youtube.api.pfiinnertube.MusicSearchFilter.Filters {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MusicSearchFilter.Filters): unknown {
  const result: any = {};
  if (value.type !== undefined) result.type = encodeJson_1(value.type);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MusicSearchFilter.Filters {
  const result = getDefaultValue();
  if (value.type !== undefined) result.type = decodeJson_1(value.type);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MusicSearchFilter.Filters): Uint8Array {
  const result: WireMessage = [];
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [17, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MusicSearchFilter.Filters {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  return result;
}
