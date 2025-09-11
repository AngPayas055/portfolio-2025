"use client";
import About from "./sections/about";
import { ExperienceList } from "./sections/experienceList";

export default function Sections() {
  return (
    <div className="pt-20 md:w-7/12 ">
      <About></About>
      <div className="mt-10 space-y-6">
        <h3 className="sticky top-0 px-3 bg-[var(--color-bg)] pt-5 pb-5 z-10 text-[var(--color-text)]">Experience</h3>
        <div className="px-1">
          <ExperienceList></ExperienceList>
        </div>
      </div>
    </div>
  );
}