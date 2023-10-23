import { useState, createContext, useContext } from "react";

interface iThemeContext  {
    darkMode: boolean;
    setDarkMode: () => void;
  };

export  const defaultState: iThemeContext = {
    darkMode: true,
    setDarkMode: () => {},
  };
  

// register the context
export const ThemeContext = createContext<iThemeContext>(defaultState);


// export a custom hook to use this specific context
export function useThemeContext() {
  return useContext(ThemeContext);
}