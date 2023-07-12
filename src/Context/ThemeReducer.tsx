import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,

  colors: {
    primary: "#F39C12",
    background: "#FEF5E7",
    card: "#F1C40F",
    text: "yellow",
    border: "yellow",
    notification: "#000000",
  },
};
export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,

  colors: {
    primary: "#273746",
    background: "#D5DBDB",
    card: "#34495E",
    text: "red",
    border: "green",
    notification: "#FFFFFF",
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
      case "set_dark_theme":
        return {
          ...darkTheme,
        };
    default:
      return state;
  }
};
