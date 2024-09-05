export declare namespace $.youtube.api.pfiinnertube.SearchFilter {
  export type SortBy =
    | "RELEVANCE"
    | "RATING"
    | "UPLOAD_DATE"
    | "VIEW_COUNT";
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.SortBy;

export const num2name = {
  0: "RELEVANCE",
  1: "RATING",
  2: "UPLOAD_DATE",
  3: "VIEW_COUNT",
} as const;

export const name2num = {
  RELEVANCE: 0,
  RATING: 1,
  UPLOAD_DATE: 2,
  VIEW_COUNT: 3,
} as const;
