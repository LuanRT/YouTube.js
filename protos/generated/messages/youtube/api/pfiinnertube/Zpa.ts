import {
  Type as FormatId,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./FormatId.js";
import {
  Type as Kob,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Kob.js";
import {
  Type as YPa,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./YPa.js";
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
  export type Zpa = {
    formatId?: FormatId;
    startTimeMs?: number;
    durationMs?: number;
    field4?: number;
    field5?: number;
    field9?: Kob;
    field11?: YPa;
    field12?: YPa;
  }
}

export type Type = $.youtube.api.pfiinnertube.Zpa;

export function getDefaultValue(): $.youtube.api.pfiinnertube.Zpa {
  return {
    formatId: undefined,
    startTimeMs: undefined,
    durationMs: undefined,
    field4: undefined,
    field5: undefined,
    field9: undefined,
    field11: undefined,
    field12: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.Zpa>): $.youtube.api.pfiinnertube.Zpa {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.Zpa): unknown {
  const result: any = {};
  if (value.formatId !== undefined) result.formatId = encodeJson_1(value.formatId);
  if (value.startTimeMs !== undefined) result.startTimeMs = tsValueToJsonValueFns.int32(value.startTimeMs);
  if (value.durationMs !== undefined) result.durationMs = tsValueToJsonValueFns.int32(value.durationMs);
  if (value.field4 !== undefined) result.field4 = tsValueToJsonValueFns.int32(value.field4);
  if (value.field5 !== undefined) result.field5 = tsValueToJsonValueFns.int32(value.field5);
  if (value.field9 !== undefined) result.field9 = encodeJson_2(value.field9);
  if (value.field11 !== undefined) result.field11 = encodeJson_3(value.field11);
  if (value.field12 !== undefined) result.field12 = encodeJson_3(value.field12);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.Zpa {
  const result = getDefaultValue();
  if (value.formatId !== undefined) result.formatId = decodeJson_1(value.formatId);
  if (value.startTimeMs !== undefined) result.startTimeMs = jsonValueToTsValueFns.int32(value.startTimeMs);
  if (value.durationMs !== undefined) result.durationMs = jsonValueToTsValueFns.int32(value.durationMs);
  if (value.field4 !== undefined) result.field4 = jsonValueToTsValueFns.int32(value.field4);
  if (value.field5 !== undefined) result.field5 = jsonValueToTsValueFns.int32(value.field5);
  if (value.field9 !== undefined) result.field9 = decodeJson_2(value.field9);
  if (value.field11 !== undefined) result.field11 = decodeJson_3(value.field11);
  if (value.field12 !== undefined) result.field12 = decodeJson_3(value.field12);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.Zpa): Uint8Array {
  const result: WireMessage = [];
  if (value.formatId !== undefined) {
    const tsValue = value.formatId;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.startTimeMs !== undefined) {
    const tsValue = value.startTimeMs;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.durationMs !== undefined) {
    const tsValue = value.durationMs;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field4 !== undefined) {
    const tsValue = value.field4;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field5 !== undefined) {
    const tsValue = value.field5;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.field9 !== undefined) {
    const tsValue = value.field9;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.field11 !== undefined) {
    const tsValue = value.field11;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.field12 !== undefined) {
    const tsValue = value.field12;
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.Zpa {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.formatId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.startTimeMs = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.durationMs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field4 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.field5 = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field9 = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field11 = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.field12 = value;
  }
  return result;
}
