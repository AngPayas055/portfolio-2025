"use client";
import { useEffect } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-primary)]">
      <div className="text-center animate-pulse">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">JMendiola</h1>
        <p className="text-sm text-[var(--color-text)]">Loading...</p>
      </div>
    </div>
  );
}
