"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme && storedTheme !== null) {
      setTheme(storedTheme as "dark" | "light");
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
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
