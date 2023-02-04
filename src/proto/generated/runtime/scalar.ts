export type ScalarValueTypePath = `.${ScalarValueType}`;
export type ScalarValueTypes = Writable<typeof _scalarValueTypes>;
export type ScalarValueType = ScalarValueTypes[number];
export const _scalarValueTypes = [
  "double",
  "float",
  "int32",
  "int64",
  "uint32",
  "uint64",
  "sint32",
  "sint64",
  "fixed32",
  "fixed64",
  "sfixed32",
  "sfixed64",
  "bool",
  "string",
  "bytes",
] as const;
export const scalarValueTypes: ScalarValueTypes =
  _scalarValueTypes as ScalarValueTypes;

type Writable<T extends readonly string[]> = {
  -readonly [K in keyof T]: T[K];
};
