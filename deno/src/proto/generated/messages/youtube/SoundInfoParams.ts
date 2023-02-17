import {
  Type as Sound,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(SoundInfoParams)/Sound.ts";
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
  export type SoundInfoParams = {
    sound?: Sound;
  }
}

export type Type = $.youtube.SoundInfoParams;

export function getDefaultValue(): $.youtube.SoundInfoParams {
  return {
    sound: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.SoundInfoParams>): $.youtube.SoundInfoParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SoundInfoParams): unknown {
  const result: any = {};
  if (value.sound !== undefined) result.sound = encodeJson_1(value.sound);
  return result;
}

export function decodeJson(value: any): $.youtube.SoundInfoParams {
  const result = getDefaultValue();
  if (value.sound !== undefined) result.sound = decodeJson_1(value.sound);
  return result;
}

export function encodeBinary(value: $.youtube.SoundInfoParams): Uint8Array {
  const result: WireMessage = [];
  if (value.sound !== undefined) {
    const tsValue = value.sound;
    result.push(
      [94, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(94);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sound = value;
  }
  return result;
}
