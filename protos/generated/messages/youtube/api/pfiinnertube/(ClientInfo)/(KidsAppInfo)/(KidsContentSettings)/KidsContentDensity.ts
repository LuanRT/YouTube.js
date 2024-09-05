export declare namespace $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  export type KidsContentDensity =
    | "YT_KIDS_CONTENT_DENSITY_VAL1"
    | "YT_KIDS_CONTENT_DENSITY_VAL2"
    | "YT_KIDS_CONTENT_DENSITY_VAL3";
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings.KidsContentDensity;

export const num2name = {
  0: "YT_KIDS_CONTENT_DENSITY_VAL1",
  1: "YT_KIDS_CONTENT_DENSITY_VAL2",
  2: "YT_KIDS_CONTENT_DENSITY_VAL3",
} as const;

export const name2num = {
  YT_KIDS_CONTENT_DENSITY_VAL1: 0,
  YT_KIDS_CONTENT_DENSITY_VAL2: 1,
  YT_KIDS_CONTENT_DENSITY_VAL3: 2,
} as const;
