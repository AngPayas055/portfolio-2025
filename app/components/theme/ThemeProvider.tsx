"use client";
import { createContext, useContext, useState, ReactNode } from "react";

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
      <div className={`transition-colors duration-500 ${getThemeClasses(theme)}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const getThemeClasses = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "bg-[#f8f4d8] text-[#000000] bg-card-[#ffffff]";
    case "dark":
      return "bg-[#0d171d] text-[#eeeeee] bg-card-[#2f4150]";
    case "retro":
      return "bg-[#1c4587] text-[#f6dc62] bg-card-[#c9741a]";
  }
};
