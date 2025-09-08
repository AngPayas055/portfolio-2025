"use client";

import { ThemeSwitcher } from "../components/theme/ThemeSwitcher";

export default function Navigation() {
  // Pick one:
  // 1) Short & cheeky
  // const bio = "Writes clean code, drinks too much coffee, and fixes bugs with duct tape (software edition).";
  // 2) Quirky & playful
  // const bio = "Full-stack magician: I make pixels behave, APIs sing, and if something breaks, blame the cat.";
  // 3) Bike-themed (default)
  const bio =
    "Writes clean code, drinks too much coffee, and fixes bugs with duct tape (software edition).";

  return (
    <div className="w-5/12 min-h-screen px-3 py-20 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-[var(--color-text)]">JMendiola</h1>
        <h3 className="text-lg text-[var(--color-text)] py-3">Full Stack Developer</h3>
        <p className="mt-2 text-sm text-[var(--color-text)]/90 mb-5">{bio}</p>
        <ThemeSwitcher />
      </div>
      <div>
        <ul>
          <li className=" text-[var(--color-text)]">ABOUT</li>
          <li className=" text-[var(--color-text)]">EXPERIENCE</li>
          <li className=" text-[var(--color-text)]">PROJECTS</li>
          <li className=" text-[var(--color-text)]">CONTACT</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className=" text-[var(--color-text)]">GH</li>
          <li className=" text-[var(--color-text)]">LI</li>
          <li className=" text-[var(--color-text)]">RE</li>
        </ul>
      </div>
    </div>
  );
}
