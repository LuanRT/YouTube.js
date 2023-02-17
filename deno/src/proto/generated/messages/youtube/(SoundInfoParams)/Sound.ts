import {
  Type as Params,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Sound)/Params.ts";
import {
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.ts";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.ts";

export declare namespace $.youtube.SoundInfoParams {
  export type Sound = {
    params?: Params;
  }
}

export type Type = $.youtube.SoundInfoParams.Sound;

export function getDefaultValue(): $.youtube.SoundInfoParams.Sound {
  return {
    params: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.SoundInfoParams.Sound>): $.youtube.SoundInfoParams.Sound {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SoundInfoParams.Sound): unknown {
  const result: any = {};
  if (value.params !== undefined) result.params = encodeJson_1(value.params);
  return result;
}

export function decodeJson(value: any): $.youtube.SoundInfoParams.Sound {
  const result = getDefaultValue();
  if (value.params !== undefined) result.params = decodeJson_1(value.params);
  return result;
}

export function encodeBinary(value: $.youtube.SoundInfoParams.Sound): Uint8Array {
  const result: WireMessage = [];
  if (value.params !== undefined) {
    const tsValue = value.params;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams.Sound {
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
  return result;
}
