"use client";
import { useState } from "react";
import { HeroForm } from "./hero-form";
import Faq from "../landing/faq";
import { faqData2 } from "@/lib/faq-data";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center max-w-[1440px] mx-auto px-4 mt-8 font-sans gap-13 md:mt-15">
      <div className="md:max-w-4xl mx-auto text-center">
        <div className="flex flex-col gap-2 items-center mb-8 md:gap-6">
          <div className="inline-flex items-center justify-center w-[103px] h-[22px]  py-1 text-[12px]  font-semibold text-[#FF5A3D] bg-[#FFEFEC] rounded-[12px] tracking-normal font-sans">
            COMING SOON
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl font-bold text-[#1C1C1C] font-sans leading-9 sm:leading-12 sm:px-5 md:px-0 sm:w-[68%] md:w-full">
            Instantly Audit And Fix Your Website With AI, No Technical Hassle
          </h1>
          <p className="font-sans text-sm md:text-[18px] text-[#676767] max-w-[600px] md:max-w-full font-normal px-4 md:px-0">
            Sitelytics is launching soon. Join the waitlist to get early access
            to AI powered website audits, and our network of verified
            professionals ready to fix your issues.
          </p>
        </div>

        <HeroForm setMessage={setMessage} setIsError={setIsError} />

        {message && (
          <div className="text-center mt-4">
            <p className={isError ? "text-red-500" : "text-green-500"}>
              {message}
            </p>
          </div>
        )}
      </div>

      <Faq faqData={faqData2} />
    </section>
  );
};

export default Hero;
