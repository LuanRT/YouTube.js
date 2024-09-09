export declare namespace $.youtube.api.pfiinnertube.MediaInfo {
  export type MediaType =
    | "MEDIA_TYPE_DEFAULT"
    | "MEDIA_TYPE_AUDIO"
    | "MEDIA_TYPE_VIDEO";
}

export type Type = $.youtube.api.pfiinnertube.MediaInfo.MediaType;

export const num2name = {
  0: "MEDIA_TYPE_DEFAULT",
  1: "MEDIA_TYPE_AUDIO",
  2: "MEDIA_TYPE_VIDEO",
} as const;

export const name2num = {
  MEDIA_TYPE_DEFAULT: 0,
  MEDIA_TYPE_AUDIO: 1,
  MEDIA_TYPE_VIDEO: 2,
} as const;
