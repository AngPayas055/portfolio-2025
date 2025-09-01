"use client";
import { useTheme, Theme } from "./ThemeProvider";

const themes: { name: string; value: Theme; icon: string }[] = [
  { name: "Light", value: "light", icon: "☀️" },
  { name: "Dark", value: "dark", icon: "🌙" },
  { name: "Retro", value: "retro", icon: "🎮" },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-3">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`flex items-center space-x-1 px-3 py-2 rounded-full font-semibold transition
            ${theme === t.value ? "bg-[var(--color-primary)] text-[var(--color-bg)]" : "bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-primary)]"}
          `}
        >
          <span>{t.icon}</span>
          <span className="hidden sm:inline">{t.name}</span>
        </button>
      ))}
    </div>
  );
};
