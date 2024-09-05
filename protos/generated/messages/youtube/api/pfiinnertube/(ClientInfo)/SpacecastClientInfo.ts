import {
  Type as SpacecastAppliance,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(SpacecastClientInfo)/SpacecastAppliance.js";
import {
  Type as SpacecastInteractionLevel,
  name2num,
  num2name,
} from "./(SpacecastClientInfo)/SpacecastInteractionLevel.js";
import {
  tsValueToJsonValueFns,
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
  default as Long,
} from "../../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type SpacecastClientInfo = {
    appliances?: SpacecastAppliance;
    interactionLevel?: SpacecastInteractionLevel;
  }
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo {
  return {
    appliances: undefined,
    interactionLevel: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo>): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo): unknown {
  const result: any = {};
  if (value.appliances !== undefined) result.appliances = encodeJson_1(value.appliances);
  if (value.interactionLevel !== undefined) result.interactionLevel = tsValueToJsonValueFns.enum(value.interactionLevel);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo {
  const result = getDefaultValue();
  if (value.appliances !== undefined) result.appliances = decodeJson_1(value.appliances);
  if (value.interactionLevel !== undefined) result.interactionLevel = jsonValueToTsValueFns.enum(value.interactionLevel) as SpacecastInteractionLevel;
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.appliances !== undefined) {
    const tsValue = value.appliances;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.interactionLevel !== undefined) {
    const tsValue = value.interactionLevel;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.ClientInfo.SpacecastClientInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.appliances = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.interactionLevel = value;
  }
  return result;
}
