import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Hashtag)/Params.ts";
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
  export type Hashtag = {
    params?: Params;
  }
}

export type Type = $.youtube.Hashtag;

export function getDefaultValue(): $.youtube.Hashtag {
  return {
    params: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.Hashtag>): $.youtube.Hashtag {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Hashtag): unknown {
  const result: any = {};
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  return result;
}

export function decodeJson(value: any): $.youtube.Hashtag {
  const result = getDefaultValue();
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  return result;
}

export function encodeBinary(value: $.youtube.Hashtag): Uint8Array {
  const result: WireMessage = [];
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [93, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Hashtag {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(93);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.params = value;
  }
  return result;
}
