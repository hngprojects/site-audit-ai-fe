import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div
        className="relative w-full max-w-[1440px] mx-auto overflow-hidden
                        h-[597px] md:h-[597px] lg:h-[779px] px-4 md:px-8 lg:px-0"
      >
        {" "}
        {/* Responsive height and padding */}
        {/* Text Content */}
        <div
          className="absolute top-[13px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] text-center
                        md:top-[13px] md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-32px)] md:text-center
                        lg:top-[208px] lg:left-[48px] lg:translate-x-0 lg:w-[620px] lg:text-left
                        flex flex-col items-center lg:items-start
                        gap-[24px] md:gap-[24px] lg:gap-[40px]"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[16px] md:gap-[16px] lg:gap-[24px]">
            <h1
              className="font-bold text-[#1C1C1C]
                           text-[28px] leading-[38px] sm:text-[45px] sm:leading-[56px] sm:text-[60px] lg:leading-[80px]"
            >
              Boost Your Website With A Simple Guided AI Audit
            </h1>
            <p
              className="font-normal text-[#676767]
                          text-[16px] leading-[20px] sm:text-[25px] sm:leading-[28px] sm:text-[24px] lg:leading-[28px]"
            >
              Understand how our AI audits your website, uncovers hidden
              problems, and helps you resolve them before they cost you traffic
              or revenue.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-[#FF5A3D] hover:bg-[#E85238] text-white
                       w-full h-[56px] px-[24px] py-[14px] rounded-[10.725px]
                       md:w-[342.71px] lg:w-[155px] font-medium text-[14px] leading-[16px]
                       flex justify-center items-center"
          >
            Get the App
          </Button>
        </div>
        {/* Image Content */}
        <div
          className="absolute w-[379px] h-[339px] top-[319px] left-[9.01px]
                        md:w-[481.92px] md:h-[414px] md:top-[340.04px] sm:left-1/4 sm:-translate-x-1/4
                        lg:w-[781.51px] lg:h-[688.65px] lg:top-[80px] sm:left-[600px] md:translate-x-1"
        >
          <Image
            src="/assets/images/how-it-works/how-it-works-hero-complete.png"
            alt="How it works illustration"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
