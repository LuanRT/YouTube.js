export declare namespace $.youtube.api.pfiinnertube.SearchFilter.Filters {
  export type Duration =
    | "ANY_DURATION"
    | "SHORT"
    | "LONG"
    | "MEDIUM";
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.Filters.Duration;

export const num2name = {
  0: "ANY_DURATION",
  1: "SHORT",
  2: "LONG",
  3: "MEDIUM",
} as const;

export const name2num = {
  ANY_DURATION: 0,
  SHORT: 1,
  LONG: 2,
  MEDIUM: 3,
} as const;
