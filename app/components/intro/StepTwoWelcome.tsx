"use client";
import { useState } from "react";
import Image from "next/image";
import DialogueBox from "../ui/DialogueBox";
import Typewriter from "../ui/Typewriter";

export default function StepTwoWelcome({
  userName,
  gender,
  onNextStep,
}: {
  userName: string;
  gender: string;
  onNextStep: () => void;
}) {
  const [showButton, setShowButton] = useState(false);
  const [visitorTextFinished, setVisitorTextFinished] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex justify-center mb-4 min-h-[205px]">
        <Image
          src={
            gender === "male"
              ? "/boy.png"
              : gender === "female"
              ? "/girl.png"
              : "/other.png"
          }
          alt={gender}
          width={200}
          height={250}
          className="pixelated"
          priority
          style={{ width: "200px", height: "250px" }}
        />
      </div>

      <DialogueBox>
        <div className="flex flex-col items-center space-y-4">
          
          {!visitorTextFinished ? (
          <Typewriter speed={25} 
            onComplete={() => {
              setTimeout(() => {
                setShowButton(true);
                setVisitorTextFinished(true);
              }, 500);
            }}>
            <span className="font-bold">{userName}</span>... 🌟  
            Welcome to this world of creativity and code!  
            Here, you&apos;ll discover the projects, skills, and ideas I&apos;ve brought to life.  
            Ready to explore my portfolio? ⚡
          </Typewriter>

          ): (
            <p>
              <span className="font-bold">{userName}</span>... 🌟  
              Welcome to this world of creativity and code!  
              Here, you&apos;ll discover the projects, skills, and ideas I&apos;ve brought to life.  
              Ready to explore my portfolio? ⚡
            </p>
          )}

          {showButton && (
            <button
              onClick={onNextStep}
              className="px-4 py-2 rounded-lg font-semibold transition bg-[var(--color-btn-primary)] text-white hover:opacity-90 active:scale-95"
            >
              Yes! Let&apos;s Go →
            </button>
          )}
        </div>
      </DialogueBox>
    </div>
  );
}
