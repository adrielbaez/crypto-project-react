import React, { createContext, useEffect, useState } from "react";

export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window?.localStorage) {
    const storedPreferences = window.localStorage.getItem("color-theme");

    if (typeof storedPreferences === "string") {
      return storedPreferences;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
};

export const ThemeContext = createContext(
  {} as { theme: any; setTheme: (theme: any) => void }
);

export const ThemeProvider = ({ initialTheme, children }: any) => {
  const [theme, setTheme] = useState(getInitialTheme());

  const rawSetTheme = (theme: any) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("color-theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
