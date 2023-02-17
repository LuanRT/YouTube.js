import Long from "../Long.ts";

export type WireMessage = [FieldNumber, Field][];
export type FieldNumber = number;
export type Field =
  | Varint
  | Fixed64
  | LengthDelimited
  | StartGroup
  | EndGroup
  | Fixed32;

export enum WireType {
  Varint = 0,
  Fixed64 = 1,
  LengthDelimited = 2,
  StartGroup = 3,
  EndGroup = 4,
  Fixed32 = 5,
}

interface FieldBase<T extends WireType> {
  type: T;
}
export interface Varint extends FieldBase<WireType.Varint> {
  value: Long;
}
export interface Fixed64 extends FieldBase<WireType.Fixed64> {
  value: Long;
}
export interface LengthDelimited extends FieldBase<WireType.LengthDelimited> {
  value: Uint8Array;
}
export interface StartGroup extends FieldBase<WireType.StartGroup> {}
export interface EndGroup extends FieldBase<WireType.EndGroup> {}
export interface Fixed32 extends FieldBase<WireType.Fixed32> {
  value: number;
}
