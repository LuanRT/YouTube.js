import {
  Type as Sound,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(SoundInfoParams)/Sound.js";
import {
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
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type SoundInfoParams = {
    sound?: Sound;
  }
}

export type Type = $.youtube.api.pfiinnertube.SoundInfoParams;

export function getDefaultValue(): $.youtube.api.pfiinnertube.SoundInfoParams {
  return {
    sound: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.SoundInfoParams>): $.youtube.api.pfiinnertube.SoundInfoParams {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.SoundInfoParams): unknown {
  const result: any = {};
  if (value.sound !== undefined) result.sound = encodeJson_1(value.sound);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.SoundInfoParams {
  const result = getDefaultValue();
  if (value.sound !== undefined) result.sound = decodeJson_1(value.sound);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.SoundInfoParams): Uint8Array {
  const result: WireMessage = [];
  if (value.sound !== undefined) {
    const tsValue = value.sound;
    result.push(
      [94, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.SoundInfoParams {
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
