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
    <div className="relative inline-flex border border-[var(--color-text)] rounded-lg overflow-hidden py-1 bg-[var(--color-bg-card)]">
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
            className={`relative z-10 flex items-center justify-center gap-2 px-1 font-small text-xs transition-colors`}
            style={{ flex: 1 }}
          >
            {!isActive &&               
              <span className="pb-1">
                {t.icon}
              </span>}
            {isActive && 
              <span className="rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] min-h-[30px] flex items-center px-1">            
                <span className="pb-1 me-2">
                  {t.icon}
                </span>
                <span className="pe-1">
                  {t.name}
                </span>
              </span>}
          </button>
        );
      })}
    </div>
  );
};
