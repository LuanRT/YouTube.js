import {
  Type as CredentialTransferToken,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(UserInfo)/CredentialTransferToken.js";
import {
  Type as DelegatePurchases,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(UserInfo)/DelegatePurchases.js";
import {
  Type as KidsParent,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(UserInfo)/KidsParent.js";
import {
  Type as DelegationContext,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./(UserInfo)/DelegationContext.js";
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
  export type UserInfo = {
    onBehalfOfUser?: string;
    enableSafetyMode?: boolean;
    credentialTransferTokens: CredentialTransferToken[];
    delegatePurchases?: DelegatePurchases;
    kidsParent?: KidsParent;
    isIncognito?: boolean;
    lockedSafetyMode?: boolean;
    delegationContext?: DelegationContext;
    serializedDelegationContext?: string;
  }
}

export type Type = $.youtube.api.pfiinnertube.UserInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.UserInfo {
  return {
    onBehalfOfUser: undefined,
    enableSafetyMode: undefined,
    credentialTransferTokens: [],
    delegatePurchases: undefined,
    kidsParent: undefined,
    isIncognito: undefined,
    lockedSafetyMode: undefined,
    delegationContext: undefined,
    serializedDelegationContext: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.UserInfo>): $.youtube.api.pfiinnertube.UserInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.UserInfo): unknown {
  const result: any = {};
  if (value.onBehalfOfUser !== undefined) result.onBehalfOfUser = tsValueToJsonValueFns.string(value.onBehalfOfUser);
  if (value.enableSafetyMode !== undefined) result.enableSafetyMode = tsValueToJsonValueFns.bool(value.enableSafetyMode);
  result.credentialTransferTokens = value.credentialTransferTokens.map(value => encodeJson_1(value));
  if (value.delegatePurchases !== undefined) result.delegatePurchases = encodeJson_2(value.delegatePurchases);
  if (value.kidsParent !== undefined) result.kidsParent = encodeJson_3(value.kidsParent);
  if (value.isIncognito !== undefined) result.isIncognito = tsValueToJsonValueFns.bool(value.isIncognito);
  if (value.lockedSafetyMode !== undefined) result.lockedSafetyMode = tsValueToJsonValueFns.bool(value.lockedSafetyMode);
  if (value.delegationContext !== undefined) result.delegationContext = encodeJson_4(value.delegationContext);
  if (value.serializedDelegationContext !== undefined) result.serializedDelegationContext = tsValueToJsonValueFns.string(value.serializedDelegationContext);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.UserInfo {
  const result = getDefaultValue();
  if (value.onBehalfOfUser !== undefined) result.onBehalfOfUser = jsonValueToTsValueFns.string(value.onBehalfOfUser);
  if (value.enableSafetyMode !== undefined) result.enableSafetyMode = jsonValueToTsValueFns.bool(value.enableSafetyMode);
  result.credentialTransferTokens = value.credentialTransferTokens?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.delegatePurchases !== undefined) result.delegatePurchases = decodeJson_2(value.delegatePurchases);
  if (value.kidsParent !== undefined) result.kidsParent = decodeJson_3(value.kidsParent);
  if (value.isIncognito !== undefined) result.isIncognito = jsonValueToTsValueFns.bool(value.isIncognito);
  if (value.lockedSafetyMode !== undefined) result.lockedSafetyMode = jsonValueToTsValueFns.bool(value.lockedSafetyMode);
  if (value.delegationContext !== undefined) result.delegationContext = decodeJson_4(value.delegationContext);
  if (value.serializedDelegationContext !== undefined) result.serializedDelegationContext = jsonValueToTsValueFns.string(value.serializedDelegationContext);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.UserInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.onBehalfOfUser !== undefined) {
    const tsValue = value.onBehalfOfUser;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.enableSafetyMode !== undefined) {
    const tsValue = value.enableSafetyMode;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  for (const tsValue of value.credentialTransferTokens) {
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.delegatePurchases !== undefined) {
    const tsValue = value.delegatePurchases;
    result.push(
      [13, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.kidsParent !== undefined) {
    const tsValue = value.kidsParent;
    result.push(
      [14, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.isIncognito !== undefined) {
    const tsValue = value.isIncognito;
    result.push(
      [15, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.lockedSafetyMode !== undefined) {
    const tsValue = value.lockedSafetyMode;
    result.push(
      [16, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.delegationContext !== undefined) {
    const tsValue = value.delegationContext;
    result.push(
      [17, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.serializedDelegationContext !== undefined) {
    const tsValue = value.serializedDelegationContext;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.UserInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.onBehalfOfUser = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enableSafetyMode = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 12).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.credentialTransferTokens = value as any;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.delegatePurchases = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.kidsParent = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isIncognito = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.lockedSafetyMode = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.delegationContext = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.serializedDelegationContext = value;
  }
  return result;
}
