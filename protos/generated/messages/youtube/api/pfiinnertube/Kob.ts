import {
  Type as Pa,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Kob)/Pa.js";
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
  export type Kob = {
    EW: Pa[];
  }
}

export type Type = $.youtube.api.pfiinnertube.Kob;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Kob {
  return {
    EW: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Kob>): $.youtube.api.pfiinnertube.Kob {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Kob): unknown {
  const result: any = {};
  result.EW = value.EW.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Kob {
  const result = getDefaultValue();
  result.EW = value.EW?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Kob): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.EW) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Kob {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.EW = value as any;
  }
  return result;
}
