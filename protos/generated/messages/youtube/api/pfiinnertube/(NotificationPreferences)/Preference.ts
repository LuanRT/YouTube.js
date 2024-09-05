import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.NotificationPreferences {
  export type Preference = {
    index: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.NotificationPreferences.Preference;

export function getDefaultValue(): $.youtube.api.pfiinnertube.NotificationPreferences.Preference {
  return {
    index: 0,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.NotificationPreferences.Preference>): $.youtube.api.pfiinnertube.NotificationPreferences.Preference {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.NotificationPreferences.Preference): unknown {
  const result: any = {};
  if (value.index !== undefined) result.index = tsValueToJsonValueFns.int32(value.index);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.NotificationPreferences.Preference {
  const result = getDefaultValue();
  if (value.index !== undefined) result.index = jsonValueToTsValueFns.int32(value.index);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.NotificationPreferences.Preference): Uint8Array {
  const result: WireMessage = [];
  if (value.index !== undefined) {
    const tsValue = value.index;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.NotificationPreferences.Preference {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.index = value;
  }
  return result;
}
