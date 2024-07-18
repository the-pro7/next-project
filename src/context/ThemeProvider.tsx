"use client";
import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  toggle: () => void;
};

const defaultContext: ThemeContextType = {
  theme: "light",
  toggle: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

// Custom hook for theme
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const themeValues = {
    theme,
    toggle,
  };

  return (
    <div className={`theme ${theme}`}>
      <ThemeContext.Provider value={themeValues}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
