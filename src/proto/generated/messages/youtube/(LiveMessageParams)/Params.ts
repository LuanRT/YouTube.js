import {
  Type as Ids,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Params)/Ids.js";
import {
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.LiveMessageParams {
  export type Params = {
    ids?: Ids;
  }
}

export type Type = $.youtube.LiveMessageParams.Params;

export function getDefaultValue(): $.youtube.LiveMessageParams.Params {
  return {
    ids: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.LiveMessageParams.Params>): $.youtube.LiveMessageParams.Params {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.LiveMessageParams.Params): unknown {
  const result: any = {};
  if (value.ids !== undefined) result.ids = encodeJson_1(value.ids);
  return result;
}

export function decodeJson(value: any): $.youtube.LiveMessageParams.Params {
  const result = getDefaultValue();
  if (value.ids !== undefined) result.ids = decodeJson_1(value.ids);
  return result;
}

export function encodeBinary(value: $.youtube.LiveMessageParams.Params): Uint8Array {
  const result: WireMessage = [];
  if (value.ids !== undefined) {
    const tsValue = value.ids;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.LiveMessageParams.Params {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.ids = value;
  }
  return result;
}
