import Image from "next/image";

export default function Intro() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f4d8] text-[#000000] p-4">      
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f4d8] text-[#000000]">
        <Image
          src="/ash_retro.png"
          alt="Ash Avatar"
          width={120}
          height={120}
          className="pixelated mb-4"
        />
        <p className="text-sm">▶ Hello, I’m Jhon!</p>
      </div>
    </div>
  );
}