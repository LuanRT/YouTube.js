import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.youtube.SoundInfoParams.Sound.Params {
  export type Ids = {
    id1: string;
    id2: string;
    id3: string;
  }
}

export type Type = $.youtube.SoundInfoParams.Sound.Params.Ids;

export function getDefaultValue(): $.youtube.SoundInfoParams.Sound.Params.Ids {
  return {
    id1: "",
    id2: "",
    id3: "",
  };
}

export function createValue(partialValue: Partial<$.youtube.SoundInfoParams.Sound.Params.Ids>): $.youtube.SoundInfoParams.Sound.Params.Ids {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SoundInfoParams.Sound.Params.Ids): unknown {
  const result: any = {};
  if (value.id1 !== undefined) result.id1 = tsValueToJsonValueFns.string(value.id1);
  if (value.id2 !== undefined) result.id2 = tsValueToJsonValueFns.string(value.id2);
  if (value.id3 !== undefined) result.id3 = tsValueToJsonValueFns.string(value.id3);
  return result;
}

export function decodeJson(value: any): $.youtube.SoundInfoParams.Sound.Params.Ids {
  const result = getDefaultValue();
  if (value.id1 !== undefined) result.id1 = jsonValueToTsValueFns.string(value.id1);
  if (value.id2 !== undefined) result.id2 = jsonValueToTsValueFns.string(value.id2);
  if (value.id3 !== undefined) result.id3 = jsonValueToTsValueFns.string(value.id3);
  return result;
}

export function encodeBinary(value: $.youtube.SoundInfoParams.Sound.Params.Ids): Uint8Array {
  const result: WireMessage = [];
  if (value.id1 !== undefined) {
    const tsValue = value.id1;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.id2 !== undefined) {
    const tsValue = value.id2;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.id3 !== undefined) {
    const tsValue = value.id3;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SoundInfoParams.Sound.Params.Ids {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id1 = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id2 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.id3 = value;
  }
  return result;
}
