import {
  Type as Criticality,
  name2num,
  num2name,
} from "./Criticality.js";
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

export declare namespace $.youtube.api.pfiinnertube.RequestInfo {
  export type RequestQoS = {
    criticality?: Criticality;
  }
}

export type Type = $.youtube.api.pfiinnertube.RequestInfo.RequestQoS;

export function getDefaultValue(): $.youtube.api.pfiinnertube.RequestInfo.RequestQoS {
  return {
    criticality: undefined,
  };
}

export function createValue(partialValue: Partial<$.youtube.api.pfiinnertube.RequestInfo.RequestQoS>): $.youtube.api.pfiinnertube.RequestInfo.RequestQoS {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.youtube.api.pfiinnertube.RequestInfo.RequestQoS): unknown {
  const result: any = {};
  if (value.criticality !== undefined) result.criticality = tsValueToJsonValueFns.enum(value.criticality);
  return result;
}

export function decodeJson(value: any): $.youtube.api.pfiinnertube.RequestInfo.RequestQoS {
  const result = getDefaultValue();
  if (value.criticality !== undefined) result.criticality = jsonValueToTsValueFns.enum(value.criticality) as Criticality;
  return result;
}

export function encodeBinary(value: $.youtube.api.pfiinnertube.RequestInfo.RequestQoS): Uint8Array {
  const result: WireMessage = [];
  if (value.criticality !== undefined) {
    const tsValue = value.criticality;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.youtube.api.pfiinnertube.RequestInfo.RequestQoS {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.criticality = value;
  }
  return result;
}
