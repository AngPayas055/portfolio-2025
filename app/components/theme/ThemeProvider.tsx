"use client";
import { createContext, useContext, useState, ReactNode, CSSProperties } from "react";

export type Theme = "light" | "dark" | "retro";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="transition-colors duration-500 min-h-screen" style={getThemeVariables(theme)}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const getThemeVariables = (theme: Theme): CSSProperties => {
  switch (theme) {
    case "light":
      return {
        "--color-bg": "#f8f4d8",
        "--color-bg-card": "#ffffff",
        "--color-text": "#000000",
        "--color-primary": "#4a5568",
      } as CSSProperties;

    case "dark":
      return {
        "--color-bg": "#0d171d",
        "--color-bg-card": "#2f4150",
        "--color-text": "#eeeeee",
        "--color-primary": "#a855f7",
      } as CSSProperties;

    case "retro":
      return {
        "--color-bg": "#1c4587",
        "--color-bg-card": "#c9741a",
        "--color-text": "#f6dc62",
        "--color-primary": "#ffcc00",
      } as CSSProperties;
  }
};
