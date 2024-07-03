import {
  Type as ReadaheadPolicy,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(PlaybackStartPolicy)/ReadaheadPolicy.js";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type PlaybackStartPolicy = {
    startMinReadaheadPolicy?: ReadaheadPolicy;
    resumeMinReadaheadPolicy?: ReadaheadPolicy;
  }
}

export type Type = $.youtube.PlaybackStartPolicy;

export function getDefaultValue(): $.youtube.PlaybackStartPolicy {
  return {
    startMinReadaheadPolicy: undefined,
    resumeMinReadaheadPolicy: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.PlaybackStartPolicy>): $.youtube.PlaybackStartPolicy {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.PlaybackStartPolicy): unknown {
  const result: any = {};
  if (value.startMinReadaheadPolicy !== undefined) result.startMinReadaheadPolicy = encodeJson_1(value.startMinReadaheadPolicy);
  if (value.resumeMinReadaheadPolicy !== undefined) result.resumeMinReadaheadPolicy = encodeJson_1(value.resumeMinReadaheadPolicy);
  return result;
}

export function decodeJson(value: any): $.youtube.PlaybackStartPolicy {
  const result = getDefaultValue();
  if (value.startMinReadaheadPolicy !== undefined) result.startMinReadaheadPolicy = decodeJson_1(value.startMinReadaheadPolicy);
  if (value.resumeMinReadaheadPolicy !== undefined) result.resumeMinReadaheadPolicy = decodeJson_1(value.resumeMinReadaheadPolicy);
  return result;
}

export function encodeBinary(value: $.youtube.PlaybackStartPolicy): Uint8Array {
  const result: WireMessage = [];
  if (value.startMinReadaheadPolicy !== undefined) {
    const tsValue = value.startMinReadaheadPolicy;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.resumeMinReadaheadPolicy !== undefined) {
    const tsValue = value.resumeMinReadaheadPolicy;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.PlaybackStartPolicy {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.startMinReadaheadPolicy = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.resumeMinReadaheadPolicy = value;
  }
  return result;
}
