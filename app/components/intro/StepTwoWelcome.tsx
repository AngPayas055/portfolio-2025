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
            <span className="font-bold text-[var(--color-primary)]">{userName}</span>... 🌟  
            Welcome to this <span className="text-[var(--color-btn-primary)] font-semibold">world of creativity</span> and
            <span className="text-[var(--color-text)] px-1 rounded"> code!</span>  
            Here, you&apos;ll discover the <span className="text-[var(--color-btn-primary)]">projects</span>,  
            <span className="text-[var(--color-btn-primary)]">skills</span>, and   
            <span className="text-[var(--color-btn-primary)]"> ideas</span> I&apos;ve brought to life.  
            Ready to explore my <span className="text-[var(--color-btn-primary)] font-bold">portfolio</span>? ⚡
          </Typewriter>

          ): (
            <p>
              <span className="font-bold text-[var(--color-primary)]">{userName}</span>... 🌟  
              Welcome to this <span className="text-[var(--color-btn-primary)] font-semibold">world of creativity</span> and
              <span className="text-[var(--color-text)] px-1 rounded"> code!</span>  
              Here, you&apos;ll discover the <span className="text-[var(--color-btn-primary)]">projects</span>,  
              <span className="text-[var(--color-btn-primary)]">skills</span>, and   
              <span className="text-[var(--color-btn-primary)]"> ideas</span> I&apos;ve brought to life.  
              Ready to explore my <span className="text-[var(--color-btn-primary)] font-bold">portfolio</span>? ⚡
            </p>
          )}

          {showButton && (
            <button
              onClick={onNextStep}
              className="btn-primary me-5"
            >
              Yes! Let&apos;s Go →
            </button>
          )}
        </div>
      </DialogueBox>
    </div>
  );
}
