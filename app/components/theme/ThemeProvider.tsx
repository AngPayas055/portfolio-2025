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
        "--color-bg": "#ffffff",
        "--color-bg-card": "#f2f2f2",
        "--color-text": "#060606",
        "--color-text-highlight": "#e7000b",
        "--color-primary": "#4a5568",
        "--color-btn-primary": "#2563eb",
      } as CSSProperties;

    case "dark":
      return {
        "--color-bg": "#0d171d",
        "--color-bg-card": "#2f4150",
        "--color-text": "#eeeeee",
        "--color-text-highlight": "#a855f7",
        "--color-primary": "#a855f7",
        "--color-btn-primary": "#3b82f6",
      } as CSSProperties;

    case "retro":
      return {
        "--color-bg": "#ea5337",
        "--color-bg-card": "#1a4ec4",
        "--color-text": "#e9cf22",
        "--color-text-highlight": "#1a4ec4",
        "--color-primary": "#ffcc00",   // Classic retro mustard (recommended)
        "--color-btn-primary": "#00bfa6", // complementary teal for buttons / accents
      } as CSSProperties;
  }
};

