"use client";
import { useTheme, Theme } from "./ThemeProvider";

const themes: { name: string; value: Theme; icon: string }[] = [
  { name: "Light", value: "light", icon: "☀️" },
  { name: "Dark", value: "dark", icon: "🌙" },
  { name: "Retro", value: "retro", icon: "🎮" },
];

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const activeIndex = themes.findIndex(t => t.value === theme);

  return (
    <div className="relative inline-flex border border-[var(--color-primary)] rounded-lg overflow-hidden">
      <div
        className="absolute top-0 bottom-0 transition-all duration-300 rounded-md"
        style={{
          left: `calc(${activeIndex} * 100% / ${themes.length})`,
          width: `calc(100% / ${themes.length})`,
        }}
      />

      {themes.map((t) => {
        const isActive = theme === t.value;
        return (
          <button
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`relative z-10 flex items-center justify-center gap-2 px-2 font-small text-xs transition-colors`}
            style={{ flex: 1, minHeight: "40px" }}
          >
            <span className="pb-1">{t.icon}</span>
            {isActive && <span>{t.name}</span>}
          </button>
        );
      })}
    </div>
  );
};
