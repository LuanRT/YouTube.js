import {
  Type as KeyValuePair,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./KeyValuePair.js";
import {
  Type as ReauthRequestInfo,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./(RequestInfo)/ReauthRequestInfo.js";
import {
  Type as SessionInfo,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./(RequestInfo)/SessionInfo.js";
import {
  Type as AttestationResponseData,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./AttestationResponseData.js";
import {
  Type as RequestQoS,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./(RequestInfo)/RequestQoS.js";
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
  export type RequestInfo = {
    thirdPartyDigest?: string;
    useSsl?: boolean;
    returnErrorDetail?: boolean;
    ifNoneMatch?: string;
    returnLogEntry?: boolean;
    isPrefetch?: boolean;
    internalExperimentFlags: KeyValuePair[];
    returnDebugData?: boolean;
    innertubez?: string;
    traceProto?: boolean;
    returnLogEntryJson?: boolean;
    sherlogUsername?: string;
    reauthRequestInfo?: ReauthRequestInfo;
    sessionInfo?: SessionInfo;
    returnLogEntryProto?: boolean;
    externalPrequestContext?: string;
    attestationResponseData?: AttestationResponseData;
    eats?: Uint8Array;
    requestQos?: RequestQoS;
  }
}

export type Type = $.youtube.api.pfiinnertube.RequestInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.RequestInfo {
  return {
    thirdPartyDigest: undefined,
    useSsl: undefined,
    returnErrorDetail: undefined,
    ifNoneMatch: undefined,
    returnLogEntry: undefined,
    isPrefetch: undefined,
    internalExperimentFlags: [],
    returnDebugData: undefined,
    innertubez: undefined,
    traceProto: undefined,
    returnLogEntryJson: undefined,
    sherlogUsername: undefined,
    reauthRequestInfo: undefined,
    sessionInfo: undefined,
    returnLogEntryProto: undefined,
    externalPrequestContext: undefined,
    attestationResponseData: undefined,
    eats: undefined,
    requestQos: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.RequestInfo>): $.youtube.api.pfiinnertube.RequestInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.RequestInfo): unknown {
  const result: any = {};
  if (value.thirdPartyDigest !== undefined) result.thirdPartyDigest = tsValueToJsonValueFns.string(value.thirdPartyDigest);
  if (value.useSsl !== undefined) result.useSsl = tsValueToJsonValueFns.bool(value.useSsl);
  if (value.returnErrorDetail !== undefined) result.returnErrorDetail = tsValueToJsonValueFns.bool(value.returnErrorDetail);
  if (value.ifNoneMatch !== undefined) result.ifNoneMatch = tsValueToJsonValueFns.string(value.ifNoneMatch);
  if (value.returnLogEntry !== undefined) result.returnLogEntry = tsValueToJsonValueFns.bool(value.returnLogEntry);
  if (value.isPrefetch !== undefined) result.isPrefetch = tsValueToJsonValueFns.bool(value.isPrefetch);
  result.internalExperimentFlags = value.internalExperimentFlags.map(value => encodeJson_1(value));
  if (value.returnDebugData !== undefined) result.returnDebugData = tsValueToJsonValueFns.bool(value.returnDebugData);
  if (value.innertubez !== undefined) result.innertubez = tsValueToJsonValueFns.string(value.innertubez);
  if (value.traceProto !== undefined) result.traceProto = tsValueToJsonValueFns.bool(value.traceProto);
  if (value.returnLogEntryJson !== undefined) result.returnLogEntryJson = tsValueToJsonValueFns.bool(value.returnLogEntryJson);
  if (value.sherlogUsername !== undefined) result.sherlogUsername = tsValueToJsonValueFns.string(value.sherlogUsername);
  if (value.reauthRequestInfo !== undefined) result.reauthRequestInfo = encodeJson_2(value.reauthRequestInfo);
  if (value.sessionInfo !== undefined) result.sessionInfo = encodeJson_3(value.sessionInfo);
  if (value.returnLogEntryProto !== undefined) result.returnLogEntryProto = tsValueToJsonValueFns.bool(value.returnLogEntryProto);
  if (value.externalPrequestContext !== undefined) result.externalPrequestContext = tsValueToJsonValueFns.string(value.externalPrequestContext);
  if (value.attestationResponseData !== undefined) result.attestationResponseData = encodeJson_4(value.attestationResponseData);
  if (value.eats !== undefined) result.eats = tsValueToJsonValueFns.bytes(value.eats);
  if (value.requestQos !== undefined) result.requestQos = encodeJson_5(value.requestQos);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.RequestInfo {
  const result = getDefaultValue();
  if (value.thirdPartyDigest !== undefined) result.thirdPartyDigest = jsonValueToTsValueFns.string(value.thirdPartyDigest);
  if (value.useSsl !== undefined) result.useSsl = jsonValueToTsValueFns.bool(value.useSsl);
  if (value.returnErrorDetail !== undefined) result.returnErrorDetail = jsonValueToTsValueFns.bool(value.returnErrorDetail);
  if (value.ifNoneMatch !== undefined) result.ifNoneMatch = jsonValueToTsValueFns.string(value.ifNoneMatch);
  if (value.returnLogEntry !== undefined) result.returnLogEntry = jsonValueToTsValueFns.bool(value.returnLogEntry);
  if (value.isPrefetch !== undefined) result.isPrefetch = jsonValueToTsValueFns.bool(value.isPrefetch);
  result.internalExperimentFlags = value.internalExperimentFlags?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.returnDebugData !== undefined) result.returnDebugData = jsonValueToTsValueFns.bool(value.returnDebugData);
  if (value.innertubez !== undefined) result.innertubez = jsonValueToTsValueFns.string(value.innertubez);
  if (value.traceProto !== undefined) result.traceProto = jsonValueToTsValueFns.bool(value.traceProto);
  if (value.returnLogEntryJson !== undefined) result.returnLogEntryJson = jsonValueToTsValueFns.bool(value.returnLogEntryJson);
  if (value.sherlogUsername !== undefined) result.sherlogUsername = jsonValueToTsValueFns.string(value.sherlogUsername);
  if (value.reauthRequestInfo !== undefined) result.reauthRequestInfo = decodeJson_2(value.reauthRequestInfo);
  if (value.sessionInfo !== undefined) result.sessionInfo = decodeJson_3(value.sessionInfo);
  if (value.returnLogEntryProto !== undefined) result.returnLogEntryProto = jsonValueToTsValueFns.bool(value.returnLogEntryProto);
  if (value.externalPrequestContext !== undefined) result.externalPrequestContext = jsonValueToTsValueFns.string(value.externalPrequestContext);
  if (value.attestationResponseData !== undefined) result.attestationResponseData = decodeJson_4(value.attestationResponseData);
  if (value.eats !== undefined) result.eats = jsonValueToTsValueFns.bytes(value.eats);
  if (value.requestQos !== undefined) result.requestQos = decodeJson_5(value.requestQos);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.RequestInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.thirdPartyDigest !== undefined) {
    const tsValue = value.thirdPartyDigest;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.useSsl !== undefined) {
    const tsValue = value.useSsl;
    result.push(
      [7, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.returnErrorDetail !== undefined) {
    const tsValue = value.returnErrorDetail;
    result.push(
      [9, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.ifNoneMatch !== undefined) {
    const tsValue = value.ifNoneMatch;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.returnLogEntry !== undefined) {
    const tsValue = value.returnLogEntry;
    result.push(
      [13, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isPrefetch !== undefined) {
    const tsValue = value.isPrefetch;
    result.push(
      [14, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  for (const tsValue of value.internalExperimentFlags) {
    result.push(
      [15, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.returnDebugData !== undefined) {
    const tsValue = value.returnDebugData;
    result.push(
      [16, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.innertubez !== undefined) {
    const tsValue = value.innertubez;
    result.push(
      [18, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.traceProto !== undefined) {
    const tsValue = value.traceProto;
    result.push(
      [23, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.returnLogEntryJson !== undefined) {
    const tsValue = value.returnLogEntryJson;
    result.push(
      [24, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.sherlogUsername !== undefined) {
    const tsValue = value.sherlogUsername;
    result.push(
      [25, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.reauthRequestInfo !== undefined) {
    const tsValue = value.reauthRequestInfo;
    result.push(
      [29, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.sessionInfo !== undefined) {
    const tsValue = value.sessionInfo;
    result.push(
      [30, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.returnLogEntryProto !== undefined) {
    const tsValue = value.returnLogEntryProto;
    result.push(
      [31, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.externalPrequestContext !== undefined) {
    const tsValue = value.externalPrequestContext;
    result.push(
      [32, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.attestationResponseData !== undefined) {
    const tsValue = value.attestationResponseData;
    result.push(
      [34, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  if (value.eats !== undefined) {
    const tsValue = value.eats;
    result.push(
      [35, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.requestQos !== undefined) {
    const tsValue = value.requestQos;
    result.push(
      [36, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.RequestInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.thirdPartyDigest = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.useSsl = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.returnErrorDetail = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ifNoneMatch = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.returnLogEntry = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isPrefetch = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 15).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.internalExperimentFlags = value as any;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.returnDebugData = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.innertubez = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.traceProto = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.returnLogEntryJson = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.sherlogUsername = value;
  }
  field: {
    const wireValue = wireFields.get(29);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.reauthRequestInfo = value;
  }
  field: {
    const wireValue = wireFields.get(30);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.sessionInfo = value;
  }
  field: {
    const wireValue = wireFields.get(31);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.returnLogEntryProto = value;
  }
  field: {
    const wireValue = wireFields.get(32);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.externalPrequestContext = value;
  }
  field: {
    const wireValue = wireFields.get(34);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.attestationResponseData = value;
  }
  field: {
    const wireValue = wireFields.get(35);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.eats = value;
  }
  field: {
    const wireValue = wireFields.get(36);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.requestQos = value;
  }
  return result;
}
