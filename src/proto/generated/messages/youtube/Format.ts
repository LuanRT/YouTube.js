import {
  Type as ItagData,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(Format)/ItagData.js";
import {
  Type as InitRange,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(Format)/InitRange.js";
import {
  Type as IndexRange,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(Format)/IndexRange.js";
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
  export type Format = {
    videoId: string;
    itagData?: ItagData;
    endTimeMs: number;
    kpb: number;
    mimeType: string;
    initRange?: InitRange;
    indexRange?: IndexRange;
    iP?: number;
    durationMs?: number;
    field10Ms?: number;
  }
}

export type Type = $.youtube.Format;

export function getDefaultValue(): $.youtube.Format {
  return {
    videoId: "",
    itagData: undefined,
    endTimeMs: 0,
    kpb: 0,
    mimeType: "",
    initRange: undefined,
    indexRange: undefined,
    iP: undefined,
    durationMs: undefined,
    field10Ms: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.Format>): $.youtube.Format {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.Format): unknown {
  const result: any = {};
  if (value.videoId !== undefined) result.videoId = tsValueToJsonValueFns.string(value.videoId);
  if (value.itagData !== undefined) result.itagData = encodeJson_1(value.itagData);
  if (value.endTimeMs !== undefined) result.endTimeMs = tsValueToJsonValueFns.int32(value.endTimeMs);
  if (value.kpb !== undefined) result.kpb = tsValueToJsonValueFns.int32(value.kpb);
  if (value.mimeType !== undefined) result.mimeType = tsValueToJsonValueFns.string(value.mimeType);
  if (value.initRange !== undefined) result.initRange = encodeJson_2(value.initRange);
  if (value.indexRange !== undefined) result.indexRange = encodeJson_3(value.indexRange);
  if (value.iP !== undefined) result.iP = tsValueToJsonValueFns.int32(value.iP);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.int32(value.durationMs);
  if (value.field10Ms !== undefined) result.field10Ms = tsValueToJsonValueFns.int32(value.field10Ms);
  return result;
}

export function decodeJson(value: any): $.youtube.Format {
  const result = getDefaultValue();
  if (value.videoId !== undefined) result.videoId = jsonValueToTsValueFns.string(value.videoId);
  if (value.itagData !== undefined) result.itagData = decodeJson_1(value.itagData);
  if (value.endTimeMs !== undefined) result.endTimeMs = jsonValueToTsValueFns.int32(value.endTimeMs);
  if (value.kpb !== undefined) result.kpb = jsonValueToTsValueFns.int32(value.kpb);
  if (value.mimeType !== undefined) result.mimeType = jsonValueToTsValueFns.string(value.mimeType);
  if (value.initRange !== undefined) result.initRange = decodeJson_2(value.initRange);
  if (value.indexRange !== undefined) result.indexRange = decodeJson_3(value.indexRange);
  if (value.iP !== undefined) result.iP = jsonValueToTsValueFns.int32(value.iP);
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.int32(value.durationMs);
  if (value.field10Ms !== undefined) result.field10Ms = jsonValueToTsValueFns.int32(value.field10Ms);
  return result;
}

export function encodeBinary(value: $.youtube.Format): Uint8Array {
  const result: WireMessage = [];
  if (value.videoId !== undefined) {
    const tsValue = value.videoId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.itagData !== undefined) {
    const tsValue = value.itagData;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.endTimeMs !== undefined) {
    const tsValue = value.endTimeMs;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.kpb !== undefined) {
    const tsValue = value.kpb;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.mimeType !== undefined) {
    const tsValue = value.mimeType;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.initRange !== undefined) {
    const tsValue = value.initRange;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.indexRange !== undefined) {
    const tsValue = value.indexRange;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.iP !== undefined) {
    const tsValue = value.iP;
    result.push(
      [8, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.durationMs !== undefined) {
    const tsValue = value.durationMs;
    result.push(
      [9, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field10Ms !== undefined) {
    const tsValue = value.field10Ms;
    result.push(
      [10, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.Format {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.videoId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.itagData = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.endTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.kpb = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mimeType = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.initRange = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.indexRange = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.iP = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.durationMs = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field10Ms = value;
  }
  return result;
}
