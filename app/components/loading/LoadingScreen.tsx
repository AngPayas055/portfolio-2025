"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-primary)]">
      <div className="text-center animate-pulse">
        <h1 className="text-3xl font-bold text-[var(--color-text)]">JMendiola</h1>
        <p className="text-sm text-[var(--color-text)]">Loading...</p>
      </div>
    </div>
  );
}
