"use client";
import Navigation from "./Navigation";
import Sections from "./Sections";

export default function Hero() {
  return (
    <div className="flex justify-center w-full  transition-colors duration-500 bg-[var(--color-bg)]">      
      <div className="max-w-sm md:max-w-[1100px] mx-auto  w-full md:flex md:gap-3">
        <Navigation></Navigation>
        <Sections></Sections>
      </div>
    </div>
  );
}