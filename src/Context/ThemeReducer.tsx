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
    card: "#F1C40F",
    text: "yellow",
    border: "yellow",
    notification: "yellow",
  },
};
export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,

  colors: {
    primary: "red",
    background: "blue",
    card: "#34495E",
    text: "red",
    border: "green",
    notification: "orange",
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
