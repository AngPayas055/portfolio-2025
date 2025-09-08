"use client";
import Navigation from "./Navigation";
import Sections from "./Sections";

export default function Hero() {
  return (
    <div className="flex justify-center w-full  transition-colors duration-500 bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-primary)]">      
      <div className="max-w-[1100px] w-full flex">
        <Navigation></Navigation>
        <Sections></Sections>
      </div>
    </div>
  );
}