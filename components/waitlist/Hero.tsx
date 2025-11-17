"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useCountdown } from "@/hooks/use-countdown";
import { useState } from "react"; // ADDED: For internal state management
import axios from "axios"; // ADDED: For Axios error checking
import { submitWaitlistEmail } from "@/lib/api"; // ADDED: Import new API function

// REMOVED: HeroProps interface, as state is now managed internally
// interface HeroProps { ... }

// MODIFIED: Hero component no longer accepts props
const Hero = () => {
  const timeLeft = useCountdown("2025-12-15T00:00:00");

  // ADDED: State management directly to Hero component
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  // ADDED: validateEmail function
  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ADDED: handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    try {
      await submitWaitlistEmail(email); // MODIFIED: Call our new API function

      setMessage("Successfully joined the waitlist!");
      setEmail("");
    } catch (error) {
      let errorMessage = "Failed to join the waitlist. Please try again.";
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message || error.message;
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessage(errorMessage);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto px-4 mt-16 font-sans gap-13">
      <div className="md:max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-2 items-center mb-8">
          <div className="inline-flex items-center justify-center w-[103px] h-[22px]  py-1 text-[12px]  font-semibold text-[#FF5A3D] bg-[#FFEFEC] rounded-[12px] tracking-normal font-sans">
            COMING SOON
          </div>

          <h1 className="text-2xl md:text-[64px] font-semibold text-[#1C1C1C] font-sans">
            Get Early Access
          </h1>
          <p className="font-sans text-sm md:text-base text-[#676767] max-w-[600px] font-normal px-4 md:px-0">
            Join the SiteMate AI waitlist and be the first to access simple
            audits, clear explanations, and instant help from verified
            professionals.
          </p>
        </div>
        {/* MODIFIED: form now uses its own state and handleSubmit */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2 mx-auto max-w-[343px] md:max-w-[600px]">
            <Input
              type="email"
              placeholder="Enter your email..."
              name="email"
              className="w-full h-12 p-4 rounded-[12px] border border-[#C7C8C9] font-sans font-medium text-base"
              value={email} // MODIFIED: Binds to internal state
              onChange={(e) => setEmail(e.target.value)} // MODIFIED: Updates internal state
              disabled={isLoading} // MODIFIED: Disables based on internal state
            />
            <Button
              className="md:w-[148px] h-12 bg-[#FF5A3D] rounded-[12px] pt-3.5 pr-6 pb-3.5 pl-6 text-white text-[14px] font-medium font-sans hover:bg-[#FF5A3D]/90"
              type="submit"
              disabled={isLoading} // MODIFIED: Disables based on internal state
            >
              {isLoading ? "Joining..." : "Join the waitlist"}{" "}
              {/* MODIFIED: Updates button text based on internal state */}
            </Button>
          </div>
        </form>
        {/* ADDED: Message display directly within Hero */}
        {message && (
          <div className="text-center mt-4">
            <p className={isError ? "text-red-500" : "text-green-500"}>
              {message}
            </p>
          </div>
        )}
        <div className="flex justify-center items-center gap-2  mt-6">
          <div className="flex -space-x-2 items-center justify-center ">
            <Avatar className="border border-white">
              <AvatarImage
                src="/assets/images/avatar-1.jpg"
                alt="User 1"
                className="w-11 h-11"
              />
            </Avatar>
            <Avatar className="border border-white">
              <AvatarImage
                src="/assets/images/avatar-2.jpg"
                alt="User 2"
                className="w-11 h-11"
              />
            </Avatar>
            <Avatar className="border border-white">
              <AvatarImage
                src="/assets/images/avatar-3.jpg"
                alt="User 3"
                className="w-11 h-11"
              />
            </Avatar>
          </div>

          <p className="text-xs text-[#494949] leading-3.5 font-sans font-semibold">
            Join 4.5K+ others on the waitlist
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-5 mt-6 font-sans">
          <div className="w-16 md:w-[100px] h-16 md:h-[100px] bg-[#FCFCFC] border border-[#BBBCBC] rounded-2xl flex flex-col items-center justify-center">
            <span className="text-xl md:text-3xl font-bold text-[#1C1C1C]">
              {timeLeft.days.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-[#494949]">Days</span>
          </div>
          <span className="text-[32px] font-bold">:</span>
          <div className="w-16 md:w-[100px] h-16 md:h-[100px] border bg-[#FCFCFC] border-[#BBBCBC] rounded-2xl flex flex-col items-center justify-center">
            <span className="text-xl md:text-3xl font-bold text-[#1C1C1C]">
              {timeLeft.hours.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-[#494949]">Hours</span>
          </div>
          <span className="text-[32px] font-bold">:</span>
          <div className="w-16 md:w-[100px] h-16 md:h-[100px] border bg-[#FCFCFC] border-[#BBBCBC] rounded-2xl flex flex-col items-center justify-center">
            <span className="text-xl md:text-3xl font-bold text-[#1C1C1C]">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-[#494949]">Minutes</span>
          </div>
          <span className="text-[32px] font-bold">:</span>
          <div className="w-16 md:w-[100px] h-16 md:h-[100px] border bg-[#FCFCFC] border-[#BBBCBC] rounded-2xl flex flex-col items-center justify-center">
            <span className="text-xl md:text-3xl font-bold text-[#1C1C1C]">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm text-[#494949]">Seconds</span>
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/iPhone_16.svg"
        alt="iPhone 16"
        width={100}
        height={100}
        className="w-full h-automax-w-xs md:max-w-sm"
      />
    </section>
  );
};

export default Hero;
