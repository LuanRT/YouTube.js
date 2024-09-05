export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type ClientFormFactor =
    | "UNKNOWN_FORM_FACTOR"
    | "FORM_FACTOR_VAL1"
    | "FORM_FACTOR_VAL2";
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.ClientFormFactor;

export const num2name = {
  0: "UNKNOWN_FORM_FACTOR",
  1: "FORM_FACTOR_VAL1",
  2: "FORM_FACTOR_VAL2",
} as const;

export const name2num = {
  UNKNOWN_FORM_FACTOR: 0,
  FORM_FACTOR_VAL1: 1,
  FORM_FACTOR_VAL2: 2,
} as const;
