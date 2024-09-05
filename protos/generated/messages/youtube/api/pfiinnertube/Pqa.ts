import {
  Type as FormatId,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FormatId.js";
import {
  Type as Zpa,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Zpa.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type Pqa = {
    formatIds: FormatId[];
    ud: Zpa[];
    clipId?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.Pqa;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Pqa {
  return {
    formatIds: [],
    ud: [],
    clipId: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Pqa>): $.youtube.api.pfiinnertube.Pqa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Pqa): unknown {
  const result: any = {};
  result.formatIds = value.formatIds.map(value => encodeJson_1(value));
  result.ud = value.ud.map(value => encodeJson_2(value));
  if (value.clipId !== undefined) result.clipId = tsValueToJsonValueFns.string(value.clipId);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Pqa {
  const result = getDefaultValue();
  result.formatIds = value.formatIds?.map((value: any) => decodeJson_1(value)) ?? [];
  result.ud = value.ud?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.clipId !== undefined) result.clipId = jsonValueToTsValueFns.string(value.clipId);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Pqa): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.formatIds) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.ud) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.clipId !== undefined) {
    const tsValue = value.clipId;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Pqa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.formatIds = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.ud = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clipId = value;
  }
  return result;
}
