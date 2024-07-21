import {
  Type as ClientInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Upa)/ClientInfo.js";
import {
  Type as Fqa,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Upa)/Fqa.js";
import {
  Type as Gqa,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(Upa)/Gqa.js";
import {
  tsValueToJsonValueFns,
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type Upa = {
    clientInfo?: ClientInfo;
    poToken?: Uint8Array;
    playbackCookie?: Uint8Array;
    gp?: Uint8Array;
    field5: Fqa[];
    field6: number[];
    field7?: string;
    field8?: Gqa;
  }
}

export type Type = $.youtube.Upa;

export function getDefaultValue(): $.youtube.Upa {
  return {
    clientInfo: undefined,
    poToken: undefined,
    playbackCookie: undefined,
    gp: undefined,
    field5: [],
    field6: [],
    field7: undefined,
    field8: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.Upa>): $.youtube.Upa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Upa): unknown {
  const result: any = {};
  if (value.clientInfo !== undefined) result.clientInfo = encodeJson_1(value.clientInfo);
  if (value.poToken !== undefined) result.poToken = tsValueToJsonValueFns.bytes(value.poToken);
  if (value.playbackCookie !== undefined) result.playbackCookie = tsValueToJsonValueFns.bytes(value.playbackCookie);
  if (value.gp !== undefined) result.gp = tsValueToJsonValueFns.bytes(value.gp);
  result.field5 = value.field5.map(value => encodeJson_2(value));
  result.field6 = value.field6.map(value => tsValueToJsonValueFns.int32(value));
  if (value.field7 !== undefined) result.field7 = tsValueToJsonValueFns.string(value.field7);
  if (value.field8 !== undefined) result.field8 = encodeJson_3(value.field8);
  return result;
}

export function decodeJson(value: any): $.youtube.Upa {
  const result = getDefaultValue();
  if (value.clientInfo !== undefined) result.clientInfo = decodeJson_1(value.clientInfo);
  if (value.poToken !== undefined) result.poToken = jsonValueToTsValueFns.bytes(value.poToken);
  if (value.playbackCookie !== undefined) result.playbackCookie = jsonValueToTsValueFns.bytes(value.playbackCookie);
  if (value.gp !== undefined) result.gp = jsonValueToTsValueFns.bytes(value.gp);
  result.field5 = value.field5?.map((value: any) => decodeJson_2(value)) ?? [];
  result.field6 = value.field6?.map((value: any) => jsonValueToTsValueFns.int32(value)) ?? [];
  if (value.field7 !== undefined) result.field7 = jsonValueToTsValueFns.string(value.field7);
  if (value.field8 !== undefined) result.field8 = decodeJson_3(value.field8);
  return result;
}

export function encodeBinary(value: $.youtube.Upa): Uint8Array {
  const result: WireMessage = [];
  if (value.clientInfo !== undefined) {
    const tsValue = value.clientInfo;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.poToken !== undefined) {
    const tsValue = value.poToken;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.playbackCookie !== undefined) {
    const tsValue = value.playbackCookie;
    result.push(
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.gp !== undefined) {
    const tsValue = value.gp;
    result.push(
      [4, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  for (const tsValue of value.field5) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.field6) {
    result.push(
      [6, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field7 !== undefined) {
    const tsValue = value.field7;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.field8 !== undefined) {
    const tsValue = value.field8;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Upa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.clientInfo = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.poToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.playbackCookie = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.gp = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.field5 = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.int32(wireValues));
    if (!value.length) break collection;
    result.field6 = value as any;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.field7 = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field8 = value;
  }
  return result;
}
