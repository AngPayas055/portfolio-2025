"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import DialogueBox from "../ui/DialogueBox";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { useTheme } from "../theme/ThemeProvider";

export default function StepThreeTheme({
  gender,
  onNextStep,
}: {
  gender: string;
  onNextStep: () => void;
}) {
  const { setTheme } = useTheme();
  const [step, setStep] = useState<"intro" | "dark" | "retro" | "light" | "done">("intro");

  useEffect(() => {
    if (step === "intro") return;

    let timeout: NodeJS.Timeout;

    if (step === "dark") {
      setTheme("dark");
      timeout = setTimeout(() => setStep("retro"), 2500);
    } else if (step === "retro") {
      setTheme("retro");
      timeout = setTimeout(() => setStep("light"), 2500);
    } else if (step === "light") {
      setTheme("light");
      timeout = setTimeout(() => setStep("done"), 2500);
    }

    return () => clearTimeout(timeout);
  }, [step, setTheme]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <Image
          src="/me-wink.png"
          alt={gender}
          width={200}
          height={200}
          className="pixelated"
          priority
          style={{ width: "200px", height: "200px" }}
        />
        <div>
          <DialogueBox>
            {step === "intro" ? (
              <Typewriter
                speed={25}
                onComplete={() => {
                  setTimeout(() => setStep("dark"), 500);
                }}
              >
                Hold it right there!
                <br />
                Before we continue on this grand adventure…
                <br />
                there’s something important you should know!
                <br />
                You can change how this world looks — try switching between{" "}
                <span className="font-semibold">Light</span>,{" "}
                <span className="font-semibold">Dark</span>, and{" "}
                <span className="font-semibold">Retro</span> themes.
              </Typewriter>
            ) : (
              <>
                {step === "dark" && <Typewriter speed={25}>This is the Dark Theme</Typewriter>}
                {step === "retro" && <Typewriter speed={25}>Now, this is the Retro Theme 🎮</Typewriter>}
                {step === "light" && <Typewriter speed={25}>And we’re back to Light Theme ☀️</Typewriter>}
                {step === "done" && <p>All set! Try switching themes yourself below.</p>}
              </>
            )}
          </DialogueBox>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        <ThemeSwitcher />
        {step === "done" && (
          <button
            onClick={onNextStep}
            className="mt-2 px-6 py-2 rounded-xl font-bold bg-[var(--color-btn-primary)] text-[var(--color-bg)] shadow-lg hover:scale-105 transition"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
