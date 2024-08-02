"use client";
import React ,{useState} from "react";
import { Meteors } from "@/components/ui/meteors";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
 
const Page = () => {
    const [name,setName] = useState("")
    const [text,setText] = useState("");
  const getHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log('name', name);
    console.log('text', text);

    setName('');
    setText('');
  };

  return (
    <div className="min-h-screen bg-gray-900 relative pt-28">
      <Meteors number={100} />
      <div className="flex flex-col items-center mx-auto px-4 max-w-2xl">
        <h1 className="text-lg md:text-6xl z-10 font-sans font-bold mb-6 text-white text-center">
          Contact Us
        </h1>

        <p className="text-base font-extralight text-white text-center mb-10">
          We're here to help. For any kind of assistance, drop us a text below
          and we will reach out to you. Give us the opportunity to help you in
          your musical journey.
        </p>

        <div className="w-full">
          <form
            onSubmit={getHandler}
            className="flex flex-col items-center gap-6"
          >
            <LabelInputContainer className="w-full">
              <Input
                id="firstname"
                name="firstname"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange = {(e) => setName(e.target.value)}
                className="dark:bg-black w-full text-md font-mono py-4"
              />
            </LabelInputContainer>
            <LabelInputContainer className="w-full">
              <Input
                id="enquiry"
                name="enquiry"
                placeholder="Your enquiry"
                type="text"
                value={text}
                onChange = {(e) => setText(e.target.value)}
                className="border-0 dark:bg-black w-full text-md font-mono pb-36 pt-4 overflow-auto"
              />
            </LabelInputContainer>
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 self-start" type="submit">
          Submit
        </button>
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Page;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
