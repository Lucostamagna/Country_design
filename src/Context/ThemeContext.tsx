import React, { createContext, useReducer } from "react";
import { ThemeReducer, ThemeState,lightTheme } from "./ThemeReducer";

//¿que quiero que se exponga?
interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  
const [theme, dispatch]=useReducer(ThemeReducer, lightTheme) 

  const setDarkTheme = () => {
    dispatch({type:'set_dark_theme'})
    console.log("setDarkTheme");
  };
  const setLightTheme = () => {
  dispatch({type:'set_ligth_theme'})
    console.log("setLightTheme");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
    }
