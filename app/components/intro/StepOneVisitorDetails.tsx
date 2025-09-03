"use client";
import { useState } from "react";
import Image from "next/image";
import DialogueBox from "../ui/DialogueBox";
import Typewriter from "../ui/Typewriter";

export default function Step1VisitorDetails({
  userName,
  setUserName,
  gender,
  setGender,
}: {
  userName: string;
  setUserName: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
}) {
  const [chooseVisitorDetails, setChooseVisitorDetails] = useState(false);
  const [visitorTextFinished, setVisitorTextFinished] = useState(false);

  return (
    <div>
      <div className="flex justify-center mb-4 min-h-[205px]">        
        {!chooseVisitorDetails && (
          <Image
            src="/me-wink.png"
            alt={gender}
            width={200}
            height={200}
            className="pixelated"
            priority
            style={{ width: "200px", height: "200px" }}
          />
        )}
        {gender && (
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
            height={200}
            className="pixelated"
            priority
            style={{ width: "200px", height: "250px" }}
          />
        )}
      </div>

      <DialogueBox>
        <div className="flex flex-col items-center space-y-4 w-full">
          {!visitorTextFinished ? (
            <Typewriter
              speed={25}
              onComplete={() => {
                setTimeout(() => {
                  setChooseVisitorDetails(true);
                  setVisitorTextFinished(true);
                }, 500);
              }}
            >
              Awesome! Let&apos;s get to know you. What&apos;s your name and
              which character do you identify with? <br />
              <br />
            </Typewriter>
          ) : (
            <p>
              Awesome! Let&apos;s get to know you. What&apos;s your name and
              which character do you identify with? <br />
              <br />
            </p>
          )}

          {chooseVisitorDetails && (
            <div className="w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full mb-3">
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
          )}
        </div>
      </DialogueBox>
    </div>
  );
}
