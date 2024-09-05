export declare namespace $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  export type YTKidsAgeUpMode =
    | "YT_KIDS_AGE_UP_MODE_OFF"
    | "YT_KIDS_AGE_UP_MODE_ON";
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings.YTKidsAgeUpMode;

export const num2name = {
  0: "YT_KIDS_AGE_UP_MODE_OFF",
  1: "YT_KIDS_AGE_UP_MODE_ON",
} as const;

export const name2num = {
  YT_KIDS_AGE_UP_MODE_OFF: 0,
  YT_KIDS_AGE_UP_MODE_ON: 1,
} as const;
