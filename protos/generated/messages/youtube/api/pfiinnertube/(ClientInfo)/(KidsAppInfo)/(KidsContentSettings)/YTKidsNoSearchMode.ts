export declare namespace $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings {
  export type YTKidsNoSearchMode =
    | "YT_KIDS_NO_SEARCH_MODE_OFF"
    | "YT_KIDS_NO_SEARCH_MODE_ON";
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.KidsAppInfo.KidsContentSettings.YTKidsNoSearchMode;

export const num2name = {
  0: "YT_KIDS_NO_SEARCH_MODE_OFF",
  1: "YT_KIDS_NO_SEARCH_MODE_ON",
} as const;

export const name2num = {
  YT_KIDS_NO_SEARCH_MODE_OFF: 0,
  YT_KIDS_NO_SEARCH_MODE_ON: 1,
} as const;
