export declare namespace $.youtube.MediaHeader {
  export type CompressionType =
    | "CompressionType_value_0"
    | "CompressionType_value_1"
    | "GZIP";
}

export type Type = $.youtube.MediaHeader.CompressionType;

export const num2name = {
  0: "CompressionType_value_0",
  1: "CompressionType_value_1",
  2: "GZIP",
} as const;

export const name2num = {
  CompressionType_value_0: 0,
  CompressionType_value_1: 1,
  GZIP: 2,
} as const;
