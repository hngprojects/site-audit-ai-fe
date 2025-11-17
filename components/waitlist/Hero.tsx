"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center justify-cente min-h-[800px] px-4 mt-16 overflow-x-hidden">
      <div className="md:max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-2 items-center mb-8">
          <div className="inline-flex items-center justify-center w-[103px] h-[22px]  py-1 text-[12px]  font-semibold text-[#FF5A3D] bg-[#FFEFEC] rounded-[12px] tracking-normal font-sans">
            COMING SOON
          </div>

          <h1 className="text-2xl md:text-5xl font-semibold text-[#1C1C1C] font-sans">
            Get Early Access
          </h1>
          <p className="font-sans text-sm md:text-base text-[#676767] max-w-[600px] font-normal px-4 md:px-0">
            Join the SiteMate AI waitlist and be the first to access simple
            audits, clear explanations, and instant help from verified
            professionals.
          </p>
        </div>
        <form action="">
          <div className="flex flex-col sm:flex-row gap-2 mx-auto max-w-[343px] md:max-w-[600px] border">
            <Input
              type="email"
              placeholder="Enter your email..."
              name="email"
              className="w-full h-12 p-4 rounded-[12px] border border-[#C7C8C9] font-sans font-medium text-base"
            />
            <Button className="md:w-[148px] h-12 bg-[#FF5A3D] rounded-[12px] pt-3.5 pr-6 pb-3.5 pl-6 text-white text-[14px] font-medium font-sans hover:bg-[#FF5A3D]/90">
              Join the waitlist
            </Button>
          </div>
        </form>
        <div className="flex justify-center items-center gap-2  mt-2">
          <div className="flex -space-x-2 mt-4 items-center justify-center">
            <Avatar className="w-11 h-11 border border-white">
              <AvatarImage src="/assets/images/avatar-1.jpg" alt="User 1" />
            </Avatar>
            <Avatar className="w-11 h-11 border border-white">
              <AvatarImage src="/assets/images/avatar-2.jpg" alt="User 2" />
            </Avatar>
            <Avatar className="w-11 h-11 border border-white">
              <AvatarImage src="/assets/images/avatar-3.jpg" alt="User 3" />
            </Avatar>
          </div>

          <p className="text-xs text-[#494949] mt-4 font-sans ">
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
      <img
        src="/assets/images/iPhone_16.svg"
        alt="iPhone 16"
        className="mt-[53px] max-w-xs md:max-w-sm"
      />
    </section>
  );
};

export default Hero;
