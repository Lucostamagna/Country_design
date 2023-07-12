import { Theme } from "@react-navigation/native";

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,

  colors: {
    primary: "#F7DC6F",
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
    primary: "#000000",
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
