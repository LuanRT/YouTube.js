import {
  Type as MediaCapabilities,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./(MediaInfo)/MediaCapabilities.js";
import {
  Type as MediaType,
  name2num,
  num2name,
} from "./(MediaInfo)/MediaType.js";
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
  default as Long,
} from "../../../../runtime/Long.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.youtube.api.pfiinnertube {
  export type MediaInfo = {
    timeSinceLastManualFormatSelectionMs?: number;
    lastManualDirection?: number;
    j?: number;
    detailedNetworkType?: number;
    B7?: number;
    A7?: number;
    iea?: number;
    r7?: number;
    sS?: number;
    zea?: number;
    visibility?: number;
    d8?: number;
    mediaCapabilities?: MediaCapabilities;
    yea?: number;
    mediaType?: MediaType;
    playerState?: number;
    a8?: boolean;
    Jda?: number;
    qw?: number;
    Ky?: number;
    Eq?: number;
    l?: boolean;
    G7?: number;
    No?: boolean;
    qj?: number;
    Hx?: number;
    isPrefetch?: boolean;
    Iz?: number;
    sabrLicenseConstraint?: Uint8Array;
    l2?: number;
    k2?: number;
    Tqb?: number;
    c?: number;
  }
}

export type Type = $.youtube.api.pfiinnertube.MediaInfo;

export function getDefaultValue(): $.youtube.api.pfiinnertube.MediaInfo {
  return {
    timeSinceLastManualFormatSelectionMs: undefined,
    lastManualDirection: undefined,
    j: undefined,
    detailedNetworkType: undefined,
    B7: undefined,
    A7: undefined,
    iea: undefined,
    r7: undefined,
    sS: undefined,
    zea: undefined,
    visibility: undefined,
    d8: undefined,
    mediaCapabilities: undefined,
    yea: undefined,
    mediaType: undefined,
    playerState: undefined,
    a8: undefined,
    Jda: undefined,
    qw: undefined,
    Ky: undefined,
    Eq: undefined,
    l: undefined,
    G7: undefined,
    No: undefined,
    qj: undefined,
    Hx: undefined,
    isPrefetch: undefined,
    Iz: undefined,
    sabrLicenseConstraint: undefined,
    l2: undefined,
    k2: undefined,
    Tqb: undefined,
    c: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.MediaInfo>): $.youtube.api.pfiinnertube.MediaInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.MediaInfo): unknown {
  const result: any = {};
  if (value.timeSinceLastManualFormatSelectionMs !== undefined) result.timeSinceLastManualFormatSelectionMs = tsValueToJsonValueFns.int32(value.timeSinceLastManualFormatSelectionMs);
  if (value.lastManualDirection !== undefined) result.lastManualDirection = tsValueToJsonValueFns.int32(value.lastManualDirection);
  if (value.j !== undefined) result.j = tsValueToJsonValueFns.int32(value.j);
  if (value.detailedNetworkType !== undefined) result.detailedNetworkType = tsValueToJsonValueFns.int32(value.detailedNetworkType);
  if (value.B7 !== undefined) result.B7 = tsValueToJsonValueFns.int32(value.B7);
  if (value.A7 !== undefined) result.A7 = tsValueToJsonValueFns.int32(value.A7);
  if (value.iea !== undefined) result.iea = tsValueToJsonValueFns.int32(value.iea);
  if (value.r7 !== undefined) result.r7 = tsValueToJsonValueFns.int32(value.r7);
  if (value.sS !== undefined) result.sS = tsValueToJsonValueFns.int32(value.sS);
  if (value.zea !== undefined) result.zea = tsValueToJsonValueFns.int32(value.zea);
  if (value.visibility !== undefined) result.visibility = tsValueToJsonValueFns.int32(value.visibility);
  if (value.d8 !== undefined) result.d8 = tsValueToJsonValueFns.int32(value.d8);
  if (value.mediaCapabilities !== undefined) result.mediaCapabilities = encodeJson_1(value.mediaCapabilities);
  if (value.yea !== undefined) result.yea = tsValueToJsonValueFns.int32(value.yea);
  if (value.mediaType !== undefined) result.mediaType = tsValueToJsonValueFns.enum(value.mediaType);
  if (value.playerState !== undefined) result.playerState = tsValueToJsonValueFns.int32(value.playerState);
  if (value.a8 !== undefined) result.a8 = tsValueToJsonValueFns.bool(value.a8);
  if (value.Jda !== undefined) result.Jda = tsValueToJsonValueFns.int32(value.Jda);
  if (value.qw !== undefined) result.qw = tsValueToJsonValueFns.int32(value.qw);
  if (value.Ky !== undefined) result.Ky = tsValueToJsonValueFns.int32(value.Ky);
  if (value.Eq !== undefined) result.Eq = tsValueToJsonValueFns.int32(value.Eq);
  if (value.l !== undefined) result.l = tsValueToJsonValueFns.bool(value.l);
  if (value.G7 !== undefined) result.G7 = tsValueToJsonValueFns.int32(value.G7);
  if (value.No !== undefined) result.No = tsValueToJsonValueFns.bool(value.No);
  if (value.qj !== undefined) result.qj = tsValueToJsonValueFns.int32(value.qj);
  if (value.Hx !== undefined) result.Hx = tsValueToJsonValueFns.int32(value.Hx);
  if (value.isPrefetch !== undefined) result.isPrefetch = tsValueToJsonValueFns.bool(value.isPrefetch);
  if (value.Iz !== undefined) result.Iz = tsValueToJsonValueFns.int32(value.Iz);
  if (value.sabrLicenseConstraint !== undefined) result.sabrLicenseConstraint = tsValueToJsonValueFns.bytes(value.sabrLicenseConstraint);
  if (value.l2 !== undefined) result.l2 = tsValueToJsonValueFns.int32(value.l2);
  if (value.k2 !== undefined) result.k2 = tsValueToJsonValueFns.int32(value.k2);
  if (value.Tqb !== undefined) result.Tqb = tsValueToJsonValueFns.int32(value.Tqb);
  if (value.c !== undefined) result.c = tsValueToJsonValueFns.int32(value.c);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.MediaInfo {
  const result = getDefaultValue();
  if (value.timeSinceLastManualFormatSelectionMs !== undefined) result.timeSinceLastManualFormatSelectionMs = jsonValueToTsValueFns.int32(value.timeSinceLastManualFormatSelectionMs);
  if (value.lastManualDirection !== undefined) result.lastManualDirection = jsonValueToTsValueFns.int32(value.lastManualDirection);
  if (value.j !== undefined) result.j = jsonValueToTsValueFns.int32(value.j);
  if (value.detailedNetworkType !== undefined) result.detailedNetworkType = jsonValueToTsValueFns.int32(value.detailedNetworkType);
  if (value.B7 !== undefined) result.B7 = jsonValueToTsValueFns.int32(value.B7);
  if (value.A7 !== undefined) result.A7 = jsonValueToTsValueFns.int32(value.A7);
  if (value.iea !== undefined) result.iea = jsonValueToTsValueFns.int32(value.iea);
  if (value.r7 !== undefined) result.r7 = jsonValueToTsValueFns.int32(value.r7);
  if (value.sS !== undefined) result.sS = jsonValueToTsValueFns.int32(value.sS);
  if (value.zea !== undefined) result.zea = jsonValueToTsValueFns.int32(value.zea);
  if (value.visibility !== undefined) result.visibility = jsonValueToTsValueFns.int32(value.visibility);
  if (value.d8 !== undefined) result.d8 = jsonValueToTsValueFns.int32(value.d8);
  if (value.mediaCapabilities !== undefined) result.mediaCapabilities = decodeJson_1(value.mediaCapabilities);
  if (value.yea !== undefined) result.yea = jsonValueToTsValueFns.int32(value.yea);
  if (value.mediaType !== undefined) result.mediaType = jsonValueToTsValueFns.enum(value.mediaType) as MediaType;
  if (value.playerState !== undefined) result.playerState = jsonValueToTsValueFns.int32(value.playerState);
  if (value.a8 !== undefined) result.a8 = jsonValueToTsValueFns.bool(value.a8);
  if (value.Jda !== undefined) result.Jda = jsonValueToTsValueFns.int32(value.Jda);
  if (value.qw !== undefined) result.qw = jsonValueToTsValueFns.int32(value.qw);
  if (value.Ky !== undefined) result.Ky = jsonValueToTsValueFns.int32(value.Ky);
  if (value.Eq !== undefined) result.Eq = jsonValueToTsValueFns.int32(value.Eq);
  if (value.l !== undefined) result.l = jsonValueToTsValueFns.bool(value.l);
  if (value.G7 !== undefined) result.G7 = jsonValueToTsValueFns.int32(value.G7);
  if (value.No !== undefined) result.No = jsonValueToTsValueFns.bool(value.No);
  if (value.qj !== undefined) result.qj = jsonValueToTsValueFns.int32(value.qj);
  if (value.Hx !== undefined) result.Hx = jsonValueToTsValueFns.int32(value.Hx);
  if (value.isPrefetch !== undefined) result.isPrefetch = jsonValueToTsValueFns.bool(value.isPrefetch);
  if (value.Iz !== undefined) result.Iz = jsonValueToTsValueFns.int32(value.Iz);
  if (value.sabrLicenseConstraint !== undefined) result.sabrLicenseConstraint = jsonValueToTsValueFns.bytes(value.sabrLicenseConstraint);
  if (value.l2 !== undefined) result.l2 = jsonValueToTsValueFns.int32(value.l2);
  if (value.k2 !== undefined) result.k2 = jsonValueToTsValueFns.int32(value.k2);
  if (value.Tqb !== undefined) result.Tqb = jsonValueToTsValueFns.int32(value.Tqb);
  if (value.c !== undefined) result.c = jsonValueToTsValueFns.int32(value.c);
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.MediaInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.timeSinceLastManualFormatSelectionMs !== undefined) {
    const tsValue = value.timeSinceLastManualFormatSelectionMs;
    result.push(
      [13, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.lastManualDirection !== undefined) {
    const tsValue = value.lastManualDirection;
    result.push(
      [14, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.j !== undefined) {
    const tsValue = value.j;
    result.push(
      [16, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.detailedNetworkType !== undefined) {
    const tsValue = value.detailedNetworkType;
    result.push(
      [17, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.B7 !== undefined) {
    const tsValue = value.B7;
    result.push(
      [18, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.A7 !== undefined) {
    const tsValue = value.A7;
    result.push(
      [19, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.iea !== undefined) {
    const tsValue = value.iea;
    result.push(
      [21, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.r7 !== undefined) {
    const tsValue = value.r7;
    result.push(
      [23, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.sS !== undefined) {
    const tsValue = value.sS;
    result.push(
      [28, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.zea !== undefined) {
    const tsValue = value.zea;
    result.push(
      [29, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.visibility !== undefined) {
    const tsValue = value.visibility;
    result.push(
      [34, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.d8 !== undefined) {
    const tsValue = value.d8;
    result.push(
      [36, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.mediaCapabilities !== undefined) {
    const tsValue = value.mediaCapabilities;
    result.push(
      [38, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.yea !== undefined) {
    const tsValue = value.yea;
    result.push(
      [39, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.mediaType !== undefined) {
    const tsValue = value.mediaType;
    result.push(
      [40, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.playerState !== undefined) {
    const tsValue = value.playerState;
    result.push(
      [44, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.a8 !== undefined) {
    const tsValue = value.a8;
    result.push(
      [46, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.Jda !== undefined) {
    const tsValue = value.Jda;
    result.push(
      [48, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.qw !== undefined) {
    const tsValue = value.qw;
    result.push(
      [50, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.Ky !== undefined) {
    const tsValue = value.Ky;
    result.push(
      [51, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.Eq !== undefined) {
    const tsValue = value.Eq;
    result.push(
      [54, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.l !== undefined) {
    const tsValue = value.l;
    result.push(
      [56, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.G7 !== undefined) {
    const tsValue = value.G7;
    result.push(
      [57, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.No !== undefined) {
    const tsValue = value.No;
    result.push(
      [58, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.qj !== undefined) {
    const tsValue = value.qj;
    result.push(
      [59, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.Hx !== undefined) {
    const tsValue = value.Hx;
    result.push(
      [60, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.isPrefetch !== undefined) {
    const tsValue = value.isPrefetch;
    result.push(
      [61, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.Iz !== undefined) {
    const tsValue = value.Iz;
    result.push(
      [62, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.sabrLicenseConstraint !== undefined) {
    const tsValue = value.sabrLicenseConstraint;
    result.push(
      [63, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.l2 !== undefined) {
    const tsValue = value.l2;
    result.push(
      [64, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.k2 !== undefined) {
    const tsValue = value.k2;
    result.push(
      [66, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.Tqb !== undefined) {
    const tsValue = value.Tqb;
    result.push(
      [67, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.c !== undefined) {
    const tsValue = value.c;
    result.push(
      [68, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.MediaInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.timeSinceLastManualFormatSelectionMs = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.lastManualDirection = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.j = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.detailedNetworkType = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.B7 = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.A7 = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.iea = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.r7 = value;
  }
  field: {
    const wireValue = wireFields.get(28);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.sS = value;
  }
  field: {
    const wireValue = wireFields.get(29);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.zea = value;
  }
  field: {
    const wireValue = wireFields.get(34);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.visibility = value;
  }
  field: {
    const wireValue = wireFields.get(36);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.d8 = value;
  }
  field: {
    const wireValue = wireFields.get(38);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.mediaCapabilities = value;
  }
  field: {
    const wireValue = wireFields.get(39);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.yea = value;
  }
  field: {
    const wireValue = wireFields.get(40);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.mediaType = value;
  }
  field: {
    const wireValue = wireFields.get(44);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.playerState = value;
  }
  field: {
    const wireValue = wireFields.get(46);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.a8 = value;
  }
  field: {
    const wireValue = wireFields.get(48);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Jda = value;
  }
  field: {
    const wireValue = wireFields.get(50);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.qw = value;
  }
  field: {
    const wireValue = wireFields.get(51);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Ky = value;
  }
  field: {
    const wireValue = wireFields.get(54);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Eq = value;
  }
  field: {
    const wireValue = wireFields.get(56);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.l = value;
  }
  field: {
    const wireValue = wireFields.get(57);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.G7 = value;
  }
  field: {
    const wireValue = wireFields.get(58);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.No = value;
  }
  field: {
    const wireValue = wireFields.get(59);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.qj = value;
  }
  field: {
    const wireValue = wireFields.get(60);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Hx = value;
  }
  field: {
    const wireValue = wireFields.get(61);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isPrefetch = value;
  }
  field: {
    const wireValue = wireFields.get(62);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Iz = value;
  }
  field: {
    const wireValue = wireFields.get(63);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.sabrLicenseConstraint = value;
  }
  field: {
    const wireValue = wireFields.get(64);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.l2 = value;
  }
  field: {
    const wireValue = wireFields.get(66);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.k2 = value;
  }
  field: {
    const wireValue = wireFields.get(67);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.Tqb = value;
  }
  field: {
    const wireValue = wireFields.get(68);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.c = value;
  }
  return result;
}
