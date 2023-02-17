import { encode as base64Encode, decode as base64Decode } from "../base64.ts";

type TsValueToJsonValue<T> = (tsValue: T) => unknown;
type JsonValueToTsValue<T> = (jsonValue: any) => T;

interface TsValueToJsonValueFns {
  int32: TsValueToJsonValue<number>;
  int64: TsValueToJsonValue<string>;
  uint32: TsValueToJsonValue<number>;
  uint64: TsValueToJsonValue<string>;
  sint32: TsValueToJsonValue<number>;
  sint64: TsValueToJsonValue<string>;
  bool: TsValueToJsonValue<boolean>;
  double: TsValueToJsonValue<number>;
  float: TsValueToJsonValue<number>;
  fixed32: TsValueToJsonValue<number>;
  fixed64: TsValueToJsonValue<string>;
  sfixed32: TsValueToJsonValue<number>;
  sfixed64: TsValueToJsonValue<string>;
  string: TsValueToJsonValue<string>;
  bytes: TsValueToJsonValue<Uint8Array>;
  enum: TsValueToJsonValue<string>;
}

interface JsonValueToTsValueFns {
  int32: JsonValueToTsValue<number>;
  int64: JsonValueToTsValue<string>;
  uint32: JsonValueToTsValue<number>;
  uint64: JsonValueToTsValue<string>;
  sint32: JsonValueToTsValue<number>;
  sint64: JsonValueToTsValue<string>;
  bool: JsonValueToTsValue<boolean>;
  double: JsonValueToTsValue<number>;
  float: JsonValueToTsValue<number>;
  fixed32: JsonValueToTsValue<number>;
  fixed64: JsonValueToTsValue<string>;
  sfixed32: JsonValueToTsValue<number>;
  sfixed64: JsonValueToTsValue<string>;
  string: JsonValueToTsValue<string>;
  bytes: JsonValueToTsValue<Uint8Array>;
  enum: JsonValueToTsValue<string>;
}


export const tsValueToJsonValueFns: TsValueToJsonValueFns = {
  int32: (tsValue) => tsValue,
  int64: (tsValue) => tsValue,
  uint32: (tsValue) => tsValue,
  uint64: (tsValue) => tsValue,
  sint32: (tsValue) => tsValue,
  sint64: (tsValue) => tsValue,
  bool: (tsValue) => tsValue,
  double: (tsValue) => tsValue,
  float: (tsValue) => tsValue,
  fixed32: (tsValue) => tsValue,
  fixed64: (tsValue) => tsValue,
  sfixed32: (tsValue) => tsValue,
  sfixed64: (tsValue) => tsValue,
  string: (tsValue) => tsValue,
  bytes: (tsValue) => base64Encode(tsValue),
  enum: (tsValue) => tsValue,
};


export const jsonValueToTsValueFns: JsonValueToTsValueFns = {
  int32: (tsValue) => tsValue,
  int64: (tsValue) => tsValue,
  uint32: (tsValue) => tsValue,
  uint64: (tsValue) => tsValue,
  sint32: (tsValue) => tsValue,
  sint64: (tsValue) => tsValue,
  bool: (tsValue) => tsValue,
  double: (tsValue) => tsValue,
  float: (tsValue) => tsValue,
  fixed32: (tsValue) => tsValue,
  fixed64: (tsValue) => tsValue,
  sfixed32: (tsValue) => tsValue,
  sfixed64: (tsValue) => tsValue,
  string: (tsValue) => tsValue,
  bytes: (tsValue) => base64Decode(tsValue),
  enum: (tsValue) => tsValue,
};
