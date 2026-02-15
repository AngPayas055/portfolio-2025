"use client";
import About from "./sections/about";
import { ExperienceList } from "./sections/experienceList";
import { ProjectList } from "./sections/projectsList";

export default function Sections() {
  return (
    <div className="pt-20 md:w-7/12 ">
      <About></About>
      <div className="mt-10 space-y-6">
        <h5 className="sticky top-0 px-3 bg-[var(--color-bg)] pt-5 pb-5 z-10 text-[var(--color-text)] text-xs">Experience</h5>
        <div className="px-1">
          <ExperienceList></ExperienceList>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <h5 className="sticky top-0 px-3 bg-[var(--color-bg)] pt-5 pb-5 z-10 text-[var(--color-text)] text-xs">Projects</h5>
        <div className="px-1">
          <ProjectList></ProjectList>
        </div>
      </div>
    </div>
  );
}