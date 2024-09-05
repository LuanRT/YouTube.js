export declare namespace $.youtube.api.pfiinnertube.ClientInfo {
  export type UserInterfaceTheme =
    | "USER_INTERFACE_THEME_DARK"
    | "USER_INTERFACE_THEME_LIGHT";
}

export type Type = $.youtube.api.pfiinnertube.ClientInfo.UserInterfaceTheme;

export const num2name = {
  0: "USER_INTERFACE_THEME_DARK",
  1: "USER_INTERFACE_THEME_LIGHT",
} as const;

export const name2num = {
  USER_INTERFACE_THEME_DARK: 0,
  USER_INTERFACE_THEME_LIGHT: 1,
} as const;
