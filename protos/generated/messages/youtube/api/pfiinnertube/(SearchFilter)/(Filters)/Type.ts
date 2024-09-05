export declare namespace $.youtube.api.pfiinnertube.SearchFilter.Filters {
  export type Type =
    | "ANY_TYPE"
    | "VIDEO"
    | "CHANNEL"
    | "PLAYLIST"
    | "MOVIE";
}

export type Type = $.youtube.api.pfiinnertube.SearchFilter.Filters.Type;

export const num2name = {
  0: "ANY_TYPE",
  1: "VIDEO",
  2: "CHANNEL",
  3: "PLAYLIST",
  4: "MOVIE",
} as const;

export const name2num = {
  ANY_TYPE: 0,
  VIDEO: 1,
  CHANNEL: 2,
  PLAYLIST: 3,
  MOVIE: 4,
} as const;
