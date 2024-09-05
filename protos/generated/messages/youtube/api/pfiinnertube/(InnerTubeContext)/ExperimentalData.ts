import {
  Type as KeyValuePair,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../KeyValuePair.js";
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

export declare namespace $.youtube.api.pfiinnertube.InnerTubeContext {
  export type ExperimentalData = {
    params: KeyValuePair[];
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData {
  return {
    params: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData>): $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData): unknown {
  const result: any = {};
  result.params = value.params.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData {
  const result = getDefaultValue();
  result.params = value.params?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.params) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeContext.ExperimentalData {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.params = value as any;
  }
  return result;
}
