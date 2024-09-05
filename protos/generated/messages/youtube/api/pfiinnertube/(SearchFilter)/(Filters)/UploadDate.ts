export declare namespace $.youtube.api.pfiinnertube.SearchFilter.Filters {
  export type UploadDate =
    | "ANY_DATE"
    | "HOUR"
    | "TODAY"
    | "WEEK"
    | "MONTH"
    | "YEAR";
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.Filters.UploadDate;

export const num2name = {
  0: "ANY_DATE",
  1: "HOUR",
  2: "TODAY",
  3: "WEEK",
  4: "MONTH",
  5: "YEAR",
} as const;

export const name2num = {
  ANY_DATE: 0,
  HOUR: 1,
  TODAY: 2,
  WEEK: 3,
  MONTH: 4,
  YEAR: 5,
} as const;
