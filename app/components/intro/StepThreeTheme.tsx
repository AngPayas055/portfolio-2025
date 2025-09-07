"use client";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import DialogueBox from "../ui/DialogueBox";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export default function StepThreeTheme({
  gender,
  onNextStep,
}: {
  gender: string;
  onNextStep: () => void;
}) {
  const [textFinished, setTextFinished] = useState(false);
  const [showButton, setShowButton] = useState(false);

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

        <DialogueBox>
          <div className="flex flex-col items-center space-y-4">
            {!textFinished ? (
              <Typewriter
                speed={25}
                onComplete={() => {
                  setTimeout(() => {
                    setShowButton(true);
                    setTextFinished(true);
                  }, 500);
                }}
              >
                Hold it right there!  
                Before we continue on this grand adventure…  
                there’s something important you should know!  
                You can change how this world looks — try switching between{" "}
                <span className="font-semibold">Light</span>,{" "}
                <span className="font-semibold">Dark</span>, and{" "}
                <span className="font-semibold">Retro</span> themes.  
              </Typewriter>
            ) : (
              <p>
                Hold it right there!  
                Before we continue on this grand adventure…  
                there’s something important you should know!  
                You can change how this world looks — try switching between{" "}
                <span className="font-semibold">Light</span>,{" "}
                <span className="font-semibold">Dark</span>, and{" "}
                <span className="font-semibold">Retro</span> themes.  
              </p>
            )}
          </div>
        </DialogueBox>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <ThemeSwitcher />
        {showButton && (
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
