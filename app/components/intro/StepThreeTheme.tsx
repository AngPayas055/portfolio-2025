"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import DialogueBox from "../ui/DialogueBox";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";
import { useTheme } from "../theme/ThemeProvider";
import { useRouter } from "next/navigation";

export default function StepThreeTheme({
  gender,
}: {
  gender: string;
}) {
  const { setTheme } = useTheme();
  const [step, setStep] = useState<"intro" | "dark" | "retro" | "light" | "done">("intro");
  const router = useRouter();
  const handleContinue = () => {
    router.push("/hero");
  };

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
          
          {step !== "intro" && step !== "done" && (
            <div className="mb-3 rounded-lg border text-[var(--color-text)] border-[var(--color-text)] bg-[var(--color-bg-card)] p-3 w-full max-w-md text-sm leading-relaxed relative pb-5 transition-colors duration-500 shadow-lg">
              Hold it right there!
              <br />
              Before we set off on this grand adventure…
              <br />
              there’s something important you should know!
              <br />
              You can change how this world looks
            </div>
          )}
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
                Before we set off on this grand adventure…
                <br />
                there’s something important you should know!
                <br />
                You can change how this world looks
              </Typewriter>
            ) : (
              <>
                {step === "dark" && (
                  <div>                    
                    <Typewriter speed={25}>
                      This is the <span className="font-semibold">Dark Theme</span> 🌙
                    </Typewriter>
                  </div>
                )}
                {step === "retro" && (
                  <Typewriter speed={25}>
                    Now, feast your eyes on the <span className="font-semibold">Retro Theme</span> 🎮
                  </Typewriter>
                )}
                {step === "light" && (
                  <Typewriter speed={25}>
                    And finally… we’re back to the <span className="font-semibold">Light Theme</span> ☀️
                  </Typewriter>
                )}
                {step === "done" && (
                  <div>
                    All set! You can try it yourself using the switcher above or below.
                  </div>
                )}
              </>
            )}
          </DialogueBox>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3">
        
        {step !== "intro" && (
          <ThemeSwitcher />
        )}
        {step === "done" && (
          <button
            onClick={handleContinue}
            className="mt-2 px-6 py-2 rounded-xl font-bold bg-[var(--color-btn-primary)] text-[var(--color-bg)] shadow-lg hover:scale-105 transition"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
