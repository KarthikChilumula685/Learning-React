import React, { useContext, createContext } from 'react';

// 1. Create context
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// 2. Export the Provider
export const ThemeProvider = ThemeContext.Provider;

// 3. Custom hook to use the context
export default function useTheme() {
  return useContext(ThemeContext);
}
