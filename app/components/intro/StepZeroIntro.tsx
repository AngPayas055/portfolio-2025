"use client";
import Image from "next/image";
import DialogueBox from "../ui/DialogueBox";
import Typewriter from "../ui/Typewriter";

export default function Step0Intro({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/me-smile.png"
        alt="Avatar"
        width={200}
        height={200}
        className="pixelated mb-3"
        priority
        style={{ width: "200px", height: "200px" }}
      />
      <DialogueBox>
        <Typewriter speed={25}>
          Hello there! 👋 <br />
          Welcome to the world of retro web adventures! <br /><br />
          My name is <span className="text-red-600">JMendiola</span>. <br />
          But people also call me a <span className="font-bold">Developer 💻</span>. <br /><br />
          This is my portfolio. <br />
          <span
            className="text-green-600 cursor-pointer hover:underline animate-pulse"
            onClick={onNext}
          >
            Press START
          </span>{" "}
          to continue...
        </Typewriter>
      </DialogueBox>
    </div>
  );
}
