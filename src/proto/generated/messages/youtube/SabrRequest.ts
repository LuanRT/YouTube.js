import {
  Type as MediaInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./MediaInfo.js";
import {
  Type as FormatId,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./FormatId.js";
import {
  Type as Zpa,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Zpa.js";
import {
  Type as Lo,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Lo.js";
import {
  Type as Upa,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Upa.js";
import {
  Type as OQa,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./OQa.js";
import {
  Type as Pqa,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./Pqa.js";
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
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.youtube {
  export type SabrRequest = {
    mediaInfo?: MediaInfo;
    formatIds: FormatId[];
    ud: Zpa[];
    videoPlaybackUstreamerConfig?: Uint8Array;
    lo?: Lo;
    formatIds2: FormatId[];
    formatIds3: FormatId[];
    sc?: Upa;
    field21?: OQa;
    field22?: number;
    field23?: number;
    field1000: Pqa[];
  }
}

export type Type = $.youtube.SabrRequest;

export function getDefaultValue(): $.youtube.SabrRequest {
  return {
    mediaInfo: undefined,
    formatIds: [],
    ud: [],
    videoPlaybackUstreamerConfig: undefined,
    lo: undefined,
    formatIds2: [],
    formatIds3: [],
    sc: undefined,
    field21: undefined,
    field22: undefined,
    field23: undefined,
    field1000: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.SabrRequest>): $.youtube.SabrRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.SabrRequest): unknown {
  const result: any = {};
  if (value.mediaInfo !== undefined) result.mediaInfo = encodeJson_1(value.mediaInfo);
  result.formatIds = value.formatIds.map(value => encodeJson_2(value));
  result.ud = value.ud.map(value => encodeJson_3(value));
  if (value.videoPlaybackUstreamerConfig !== undefined) result.videoPlaybackUstreamerConfig = tsValueToJsonValueFns.bytes(value.videoPlaybackUstreamerConfig);
  if (value.lo !== undefined) result.lo = encodeJson_4(value.lo);
  result.formatIds2 = value.formatIds2.map(value => encodeJson_2(value));
  result.formatIds3 = value.formatIds3.map(value => encodeJson_2(value));
  if (value.sc !== undefined) result.sc = encodeJson_5(value.sc);
  if (value.field21 !== undefined) result.field21 = encodeJson_6(value.field21);
  if (value.field22 !== undefined) result.field22 = tsValueToJsonValueFns.int32(value.field22);
  if (value.field23 !== undefined) result.field23 = tsValueToJsonValueFns.int32(value.field23);
  result.field1000 = value.field1000.map(value => encodeJson_7(value));
  return result;
}

export function decodeJson(value: any): $.youtube.SabrRequest {
  const result = getDefaultValue();
  if (value.mediaInfo !== undefined) result.mediaInfo = decodeJson_1(value.mediaInfo);
  result.formatIds = value.formatIds?.map((value: any) => decodeJson_2(value)) ?? [];
  result.ud = value.ud?.map((value: any) => decodeJson_3(value)) ?? [];
  if (value.videoPlaybackUstreamerConfig !== undefined) result.videoPlaybackUstreamerConfig = jsonValueToTsValueFns.bytes(value.videoPlaybackUstreamerConfig);
  if (value.lo !== undefined) result.lo = decodeJson_4(value.lo);
  result.formatIds2 = value.formatIds2?.map((value: any) => decodeJson_2(value)) ?? [];
  result.formatIds3 = value.formatIds3?.map((value: any) => decodeJson_2(value)) ?? [];
  if (value.sc !== undefined) result.sc = decodeJson_5(value.sc);
  if (value.field21 !== undefined) result.field21 = decodeJson_6(value.field21);
  if (value.field22 !== undefined) result.field22 = jsonValueToTsValueFns.int32(value.field22);
  if (value.field23 !== undefined) result.field23 = jsonValueToTsValueFns.int32(value.field23);
  result.field1000 = value.field1000?.map((value: any) => decodeJson_7(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.SabrRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.mediaInfo !== undefined) {
    const tsValue = value.mediaInfo;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.formatIds) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.ud) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.videoPlaybackUstreamerConfig !== undefined) {
    const tsValue = value.videoPlaybackUstreamerConfig;
    result.push(
      [5, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.lo !== undefined) {
    const tsValue = value.lo;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  for (const tsValue of value.formatIds2) {
    result.push(
      [16, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.formatIds3) {
    result.push(
      [17, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.sc !== undefined) {
    const tsValue = value.sc;
    result.push(
      [19, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.field21 !== undefined) {
    const tsValue = value.field21;
    result.push(
      [21, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  if (value.field22 !== undefined) {
    const tsValue = value.field22;
    result.push(
      [22, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field23 !== undefined) {
    const tsValue = value.field23;
    result.push(
      [23, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  for (const tsValue of value.field1000) {
    result.push(
      [1000, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.SabrRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.mediaInfo = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.formatIds = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.ud = value as any;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.videoPlaybackUstreamerConfig = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.lo = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 16).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.formatIds2 = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 17).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.formatIds3 = value as any;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sc = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field21 = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field22 = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field23 = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1000).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.field1000 = value as any;
  }
  return result;
}
