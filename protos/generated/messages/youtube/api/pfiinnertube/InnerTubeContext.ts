import {
  Type as ClientInfo,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ClientInfo.js";
import {
  Type as UserInfo,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./UserInfo.js";
import {
  Type as CapabilityInfo,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./CapabilityInfo.js";
import {
  Type as RequestInfo,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./RequestInfo.js";
import {
  Type as ClickTrackingInfo,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(InnerTubeContext)/ClickTrackingInfo.js";
import {
  Type as ThirdPartyInfo,
  encodeJson as encodeJson_6,
  decodeJson as decodeJson_6,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
} from "./ThirdPartyInfo.js";
import {
  Type as AdSignalsInfo,
  encodeJson as encodeJson_7,
  decodeJson as decodeJson_7,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
} from "./(InnerTubeContext)/AdSignalsInfo.js";
import {
  Type as ExperimentalData,
  encodeJson as encodeJson_8,
  decodeJson as decodeJson_8,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
} from "./(InnerTubeContext)/ExperimentalData.js";
import {
  Type as ActivePlayerInfo,
  encodeJson as encodeJson_9,
  decodeJson as decodeJson_9,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
} from "./(InnerTubeContext)/ActivePlayerInfo.js";
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
  export type InnerTubeContext = {
    client?: ClientInfo;
    user?: UserInfo;
    capabilities?: CapabilityInfo;
    request?: RequestInfo;
    clickTracking?: ClickTrackingInfo;
    thirdParty?: ThirdPartyInfo;
    remoteClient?: ClientInfo;
    adSignalsInfo?: AdSignalsInfo;
    experimentalData?: ExperimentalData;
    clientScreenNonce?: string;
    activePlayers: ActivePlayerInfo[];
  }
}

export type Type = $.youtube.api.pfiinnertube.InnerTubeContext;

export function getDefaultValue(): $.youtube.api.pfiinnertube.InnerTubeContext {
  return {
    client: undefined,
    user: undefined,
    capabilities: undefined,
    request: undefined,
    clickTracking: undefined,
    thirdParty: undefined,
    remoteClient: undefined,
    adSignalsInfo: undefined,
    experimentalData: undefined,
    clientScreenNonce: undefined,
    activePlayers: [],
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.InnerTubeContext>): $.youtube.api.pfiinnertube.InnerTubeContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.InnerTubeContext): unknown {
  const result: any = {};
  if (value.client !== undefined) result.client = encodeJson_1(value.client);
  if (value.user !== undefined) result.user = encodeJson_2(value.user);
  if (value.capabilities !== undefined) result.capabilities = encodeJson_3(value.capabilities);
  if (value.request !== undefined) result.request = encodeJson_4(value.request);
  if (value.clickTracking !== undefined) result.clickTracking = encodeJson_5(value.clickTracking);
  if (value.thirdParty !== undefined) result.thirdParty = encodeJson_6(value.thirdParty);
  if (value.remoteClient !== undefined) result.remoteClient = encodeJson_1(value.remoteClient);
  if (value.adSignalsInfo !== undefined) result.adSignalsInfo = encodeJson_7(value.adSignalsInfo);
  if (value.experimentalData !== undefined) result.experimentalData = encodeJson_8(value.experimentalData);
  if (value.clientScreenNonce !== undefined) result.clientScreenNonce = tsValueToJsonValueFns.string(value.clientScreenNonce);
  result.activePlayers = value.activePlayers.map(value => encodeJson_9(value));
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.InnerTubeContext {
  const result = getDefaultValue();
  if (value.client !== undefined) result.client = decodeJson_1(value.client);
  if (value.user !== undefined) result.user = decodeJson_2(value.user);
  if (value.capabilities !== undefined) result.capabilities = decodeJson_3(value.capabilities);
  if (value.request !== undefined) result.request = decodeJson_4(value.request);
  if (value.clickTracking !== undefined) result.clickTracking = decodeJson_5(value.clickTracking);
  if (value.thirdParty !== undefined) result.thirdParty = decodeJson_6(value.thirdParty);
  if (value.remoteClient !== undefined) result.remoteClient = decodeJson_1(value.remoteClient);
  if (value.adSignalsInfo !== undefined) result.adSignalsInfo = decodeJson_7(value.adSignalsInfo);
  if (value.experimentalData !== undefined) result.experimentalData = decodeJson_8(value.experimentalData);
  if (value.clientScreenNonce !== undefined) result.clientScreenNonce = jsonValueToTsValueFns.string(value.clientScreenNonce);
  result.activePlayers = value.activePlayers?.map((value: any) => decodeJson_9(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.InnerTubeContext): Uint8Array {
  const result: WireMessage = [];
  if (value.client !== undefined) {
    const tsValue = value.client;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.user !== undefined) {
    const tsValue = value.user;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.capabilities !== undefined) {
    const tsValue = value.capabilities;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.request !== undefined) {
    const tsValue = value.request;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.clickTracking !== undefined) {
    const tsValue = value.clickTracking;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  if (value.thirdParty !== undefined) {
    const tsValue = value.thirdParty;
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_6(tsValue) }],
    );
  }
  if (value.remoteClient !== undefined) {
    const tsValue = value.remoteClient;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.adSignalsInfo !== undefined) {
    const tsValue = value.adSignalsInfo;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_7(tsValue) }],
    );
  }
  if (value.experimentalData !== undefined) {
    const tsValue = value.experimentalData;
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_8(tsValue) }],
    );
  }
  if (value.clientScreenNonce !== undefined) {
    const tsValue = value.clientScreenNonce;
    result.push(
      [11, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.activePlayers) {
    result.push(
      [12, { type: WireType.LengthDelimited as const, value: encodeBinary_9(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.InnerTubeContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.client = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.user = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.capabilities = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.request = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.clickTracking = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_6(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.thirdParty = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.remoteClient = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_7(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.adSignalsInfo = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_8(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.experimentalData = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientScreenNonce = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 12).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_9(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.activePlayers = value as any;
  }
  return result;
}
