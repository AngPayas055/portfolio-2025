"use client";
import Intro from "./components/intro/intro";
import { ThemeSwitcher } from "./components/theme/ThemeSwitcher";
export default function Home() {


  return (
    <main className="flex flex-col min-h-screen p-3 items-center justify-center bg-[var(--color-bg)] text-[var(--color-text)] space-y-6">
      <ThemeSwitcher />
      <Intro />
    </main>
  );
}
