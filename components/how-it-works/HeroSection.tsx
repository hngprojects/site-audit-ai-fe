import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="relative w-full max-w-[1440px] mx-auto bg-white overflow-hidden
                        h-[597px] md:h-[597px] lg:h-[779px] px-4 md:px-8 lg:px-0"
    >
      {" "}
      {/* Responsive height and padding */}
      {/* Text Content */}
      <div
        className="absolute top-[13px] left-1/2 -translate-x-1/2 w-[calc(100%-32px)] text-center
                      md:top-[13px] md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-32px)] md:text-center
                      lg:top-[208px] lg:left-[80px] lg:translate-x-0 lg:w-[620px] lg:text-left
                      flex flex-col items-center lg:items-start
                      gap-[24px] md:gap-[24px] lg:gap-[40px]"
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-[16px] md:gap-[16px] lg:gap-[24px]">
          <h1
            className="font-bold text-[#1C1C1C]
                         text-[32px] leading-[38px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[80px]"
          >
            Boost Your Website With A Simple Guided AI Audit
          </h1>
          <p
            className="font-normal text-[#676767]
                        text-[16px] leading-[20px] md:text-[18px] md:leading-[22px] lg:text-[24px] lg:leading-[28px]"
          >
            Understand how our AI audits your website, uncovers hidden problems,
            and helps you resolve them before they cost you traffic or revenue.
          </p>
        </div>

        <Button
          size="lg"
          className="bg-[#FF5A3D] hover:bg-[#E85238] text-white
                     w-full h-[56px] px-[24px] py-[14px] rounded-[10.725px]
                     md:w-[342.71px] lg:w-[155px] font-medium text-[14px] leading-[16px]
                     flex justify-center items-center"
        >
          Get Started
        </Button>
      </div>
      {/* Image Content */}
      <div
        className="absolute w-[379px] h-[339px] top-[319px] left-1/2 -translate-x-1/2
                      md:w-[481.92px] md:h-[414px] md:top-[340.04px] md:left-1/2 md:-translate-x-1/2
                      lg:w-[781.51px] lg:h-[688.65px] lg:top-[80px] lg:left-[695.99px] lg:translate-x-0"
      >
        {/* Placeholder for smaller screens, using the composite image */}
        <div className="lg:hidden w-full h-full relative">
          <Image
            src="/assets/images/how-it-works/how-it-works-hero.png"
            alt="How it works illustration"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop-only precise composition */}
        <div className="hidden lg:block w-full h-full relative">
          {/* Background Rotated Shape */}
          <div
            className="absolute w-[480px] h-[519px] top-0 left-0 -z-0 bg-[#F9FAFB]"
            style={{ transform: "rotate(55.83deg)" }}
          ></div>

          {/* Auditing Screen 1 */}
          <div
            className="absolute w-[368px] h-[442px] top-[120px] left-[146px] rounded-[16px]"
            style={{ filter: "drop-shadow(0px 10px 36px rgba(0, 0, 0, 0.16))" }}
          >
            <Image
              src="/assets/images/how-it-works/auditing-screen.png"
              alt="Auditing Screen"
              fill
              className="rounded-[16px]"
            />
          </div>

          {/* Dark Blue Frame with SEO Screen */}
          <div
            className="absolute w-[390px] h-[351px] top-[242px] left-[392px] bg-[#1A2373] rounded-[16px] p-[20px]"
            style={{
              boxShadow:
                "0px 50px 100px -20px rgba(50, 50, 93, 0.16), 0px 30px 60px -30px rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/assets/images/how-it-works/seo-details-screen.png"
                alt="SEO Details Screen"
                fill
                className="rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
