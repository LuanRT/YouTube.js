export declare namespace $.youtube.MediaHeader {
  export type Compression =
    | "VAL0"
    | "VAL1"
    | "GZIP";
}

export type Type = $.youtube.MediaHeader.Compression;

export const num2name = {
  0: "VAL0",
  1: "VAL1",
  2: "GZIP",
} as const;

export const name2num = {
  VAL0: 0,
  VAL1: 1,
  GZIP: 2,
} as const;
