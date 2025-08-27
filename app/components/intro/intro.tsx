"use client";
import { useState } from "react";
import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import DialogueBox from "../ui/DialogueBox";

export default function Intro() {
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState("");

  const handleStart = () => {
    setStep(1);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#f8f4d8] text-[#000000] min-h-screen">
      <div className="flex flex-col items-center justify-center">
        {step === 0 && (
          <>
            <Image
              src="/ash_retro.png"
              alt="Ash Avatar"
              width={120}
              height={120}
              className="pixelated mb-4"
              priority
            /> 
            <DialogueBox>
              <Typewriter speed={25}>
                Hello there! 👋 <br />
                Welcome to the world of retro web adventures! <br /><br />
                My name is <span className="text-red-600">JMendiola</span>. <br />
                But people also call me a <span className="font-bold">Developer 💻</span>. <br /><br />
                This is my portfolio. <br />
                <span
                  className="text-green-600 cursor-pointer hover:underline"
                  onClick={handleStart}
                >
                  Press START
                </span> to continue...
              </Typewriter>
            </DialogueBox>
          </>
        )}

        {step === 1 && (
          <DialogueBox>
            <div className="flex flex-col space-y-4 w-full">
              {/* Instruction text */}
              <Typewriter speed={25}>
                Great! Before we begin, tell me your name and gender. <br /><br />
              </Typewriter>

              {/* Name input */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <label htmlFor="name" className="font-semibold">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name"
                  className="border border-gray-400 rounded px-2 py-1 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Gender radio buttons */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="font-semibold">Gender:</span>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-blue-500"
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-pink-500"
                  />
                  <span>Female</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                    className="accent-purple-500"
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
          </DialogueBox>
        )}
      </div>
    </div>
  );
}