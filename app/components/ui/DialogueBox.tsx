"use client";
import { useState, useEffect } from "react";

export default function DialogueBox({ children }: { children: React.ReactNode }) {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowArrow((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-4 border-black bg-white p-3 w-full max-w-md text-sm leading-relaxed relative">
      {children}
      <span className="absolute bottom-2 right-3">
        {showArrow ? "▶" : ""}
      </span>
    </div>
  );
}
