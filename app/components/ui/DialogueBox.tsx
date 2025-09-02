"use client";
import { useState, useEffect, ReactNode } from "react";
import { useTheme } from "../theme/ThemeProvider";

interface DialogueBoxProps {
  children: ReactNode;
  className?: string;
}

export default function DialogueBox({ children, className = "" }: DialogueBoxProps) {
  const { theme } = useTheme();
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
    <div
      className={`border-3 rounded-lg border-[var(--color-primary)] p-3 w-full max-w-md text-sm leading-relaxed relative pb-5 transition-colors duration-500 ${className}`}
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text)",
      }}
    >
      {children}
      <span className="absolute bottom-2 right-3">{showArrow ? "▶" : ""}</span>
    </div>
  );
}
