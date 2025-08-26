import Image from "next/image";
import Typewriter from "../ui/Typewriter";
import DialogueBox from "../ui/DialogueBox";

export default function Intro() {
  return (  
    <div className="p-3">   
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f4d8] text-[#000000]">
        <Image
          src="/ash_retro.png"
          alt="Ash Avatar"
          width={120}
          height={120}
          className="pixelated mb-4"
        />        
        <DialogueBox>
          <Typewriter speed={25}>
            Hello there! 👋 <br />
            Welcome to the world of retro web adventures! <br /><br />
            My name is <span className="text-red-600">JMendiola</span>. <br />
            But people also call me a <span className="font-bold">Developer 💻</span>. <br /><br />
            This is my portfolio. <br />
            <span className="text-green-600">Press START</span> to continue...
          </Typewriter>

        </DialogueBox>
      </div>

    </div>    
  );
}