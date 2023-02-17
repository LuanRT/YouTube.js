import {
  Type as Preference,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(NotificationPreferences)/Preference.ts";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.ts";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.ts";
import {
  default as serialize,
} from "../../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.ts";

export declare namespace $.youtube {
  export type NotificationPreferences = {
    channelId: string;
    prefId?: Preference;
    number0?: number;
    number1?: number;
  }
}

export type Type = $.youtube.NotificationPreferences;

export function getDefaultValue(): $.youtube.NotificationPreferences {
  return {
    channelId: "",
    prefId: undefined,
    number0: undefined,
    number1: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.NotificationPreferences>): $.youtube.NotificationPreferences {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.NotificationPreferences): unknown {
  const result: any = {};
  if (value.channelId !== undefined) result.channelId = tsValueToJsonValueFns.string(value.channelId);
  if (value.prefId !== undefined) result.prefId = encodeJson_1(value.prefId);
  if (value.number0 !== undefined) result.number0 = tsValueToJsonValueFns.int32(value.number0);
  if (value.number1 !== undefined) result.number1 = tsValueToJsonValueFns.int32(value.number1);
  return result;
}

export function decodeJson(value: any): $.youtube.NotificationPreferences {
  const result = getDefaultValue();
  if (value.channelId !== undefined) result.channelId = jsonValueToTsValueFns.string(value.channelId);
  if (value.prefId !== undefined) result.prefId = decodeJson_1(value.prefId);
  if (value.number0 !== undefined) result.number0 = jsonValueToTsValueFns.int32(value.number0);
  if (value.number1 !== undefined) result.number1 = jsonValueToTsValueFns.int32(value.number1);
  return result;
}

export function encodeBinary(value: $.youtube.NotificationPreferences): Uint8Array {
  const result: WireMessage = [];
  if (value.channelId !== undefined) {
    const tsValue = value.channelId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.prefId !== undefined) {
    const tsValue = value.prefId;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.number0 !== undefined) {
    const tsValue = value.number0;
    result.push(
      [3, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.number1 !== undefined) {
    const tsValue = value.number1;
    result.push(
      [4, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.NotificationPreferences {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.channelId = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.prefId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number0 = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.number1 = value;
  }
  return result;
}
