export declare namespace $.youtube.api.pfiinnertube.RequestInfo {
  export type Criticality =
    | "CRITICALITY_UNSPECIFIED"
    | "CRITICALITY_CRITICAL"
    | "CRITICALITY_NON_CRITICAL";
}

export type Type = $.youtube.api.pfiinnertube.RequestInfo.Criticality;

export const num2name = {
  0: "CRITICALITY_UNSPECIFIED",
  1: "CRITICALITY_CRITICAL",
  2: "CRITICALITY_NON_CRITICAL",
} as const;

export const name2num = {
  CRITICALITY_UNSPECIFIED: 0,
  CRITICALITY_CRITICAL: 1,
  CRITICALITY_NON_CRITICAL: 2,
} as const;
