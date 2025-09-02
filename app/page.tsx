"use client";
import Intro from "./components/intro/intro";
import { ThemeSwitcher } from "./components/theme/ThemeSwitcher";
export default function Home() {


  return (
    <main className="min-h-screen transition-colors duration-500" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className="flex justify-end p-2">
        <ThemeSwitcher />
      </div>
      <div className="flex flex-col p-3 items-center justify-center space-y-6">
        <Intro />
      </div>
    </main>
  );
}
