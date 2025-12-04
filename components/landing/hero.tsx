import Image from "next/image";
import { GetApp } from "./get-app";
import React from "react";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto font-sans">
      <div className="px-4 md:px-8 lg:px-0 lg:pl-12 pt-10 md:pt-15 lg:pt-20 flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-16 lg:gap-5">
        <div className="flex flex-col items-center  lg:items-start gap-5 md:gap-10 max-w-[632px] w-full lg:w-auto text-center lg:text-left">
          {/* hero text content  */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-tight lg:leading-14 xl:leading-20">
              <span className="text-[#1A2373]">Improve</span> Your Website With
              An Instant AI Audit
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-gray-500 font-normal leading-6 md:leading-7 lg:leading-8">
              Paste your site URL and get a quick, free audit that shows
              what&apos;s working, what&apos;s not, and connects you with
              experts who can fix it.
            </p>
          </div>
          {/* download app links  */}
          <GetApp />

          {/* hero stats  */}
          <div className="w-full flex items-center justify-center lg:justify-start gap-4 sm:gap-3 py-4">
            {[
              { value: "8K +", label: "Active testers" },
              { value: "10K +", label: "Audits" },
              { value: "12K +", label: "Reviews" },
            ].map((item, idx) => (
              <React.Fragment key={item.label}>
                <div className="flex flex-col gap-1 items-center text-center min-w-[62px] md:min-w-[103px]">
                  <p className="font-bold text-xl md:text-[28px] md:leading-8.5 text-center">
                    {item.value}
                  </p>
                  <p className="text-[#676767] text-xs leading-3.5 md:text-base md:leading-5">
                    {item.label}
                  </p>
                </div>
                {idx < 2 && <span className="block w-px h-7 bg-[#676767]" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* hero image  */}
        <div className="w-full relative lg:w-auto  min-w-[294px] md:min-w-[680px] lg:min-w-[687px]">
          <Image
            src="/assets/images/landing/hand-phone-mobile.svg"
            alt="Hero Image"
            width={500}
            height={660}
            className="w-full full object-contain"
          />
          <div className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
