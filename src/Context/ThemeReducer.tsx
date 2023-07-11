import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
}

export const lightTheme: ThemeState = {
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

type ThemeAction = 
| { type: "set_ligth_theme" } 
| { type: "set_dark_theme" };

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "set_ligth_theme":
      return {
        ...lightTheme,
      };
    default:
      return state;
  }
};
