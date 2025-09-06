"use client";
import { useState } from "react";
import Step0Intro from "./StepZeroIntro";
import Step1VisitorDetails from "./StepOneVisitorDetails";
import StepTwoWelcome from "./StepTwoWelcome";
import StepThreeTheme from "./StepThreeTheme";

export default function Intro() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="flex flex-col items-center justify-center">
      {step === 0 && <Step0Intro onNext={() => setStep(1)} />}
      {step === 1 && (
        <Step1VisitorDetails
          userName={userName}
          setUserName={setUserName}
          gender={gender}
          setGender={setGender}
          onNextStep={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <StepTwoWelcome
          userName={userName}
          gender={gender}
          onNextStep={() => setStep(3)}
        />
      )}
      {step === 3 && (
        <StepThreeTheme 
          gender={gender} 
          onNextStep={() => setStep(4)} 
        />
      )}
    </div>
  );
}
