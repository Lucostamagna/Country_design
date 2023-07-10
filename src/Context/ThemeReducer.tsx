import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
}

const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,

  colors: {
    primary: "blue",
    background: "red",
    card: "yellow",
    text: "yellow",
    border: "yellow",
    notification: "yellow",
  },
};

type ThemeAction = { type: "ligth_theme" } | { type: "dark_theme" };

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "ligth_theme":
      return {
        ...lightTheme,
      };
    default:
      return state;
  }
};
