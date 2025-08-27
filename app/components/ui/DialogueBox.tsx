"use client";
import { useState, useEffect } from "react";

export default function DialogueBox({ children }: { children: React.ReactNode }) {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setShowArrow((prev) => !prev);
      }, 500);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="border-4 border-black bg-white p-3 w-full max-w-md text-sm leading-relaxed relative pb-5">
      {children}
      <span className="absolute bottom-2 right-3">
        {showArrow ? "▶" : ""}
      </span>
    </div>
  );
}
