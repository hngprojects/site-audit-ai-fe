import Image from "next/image";
import { GetApp } from "./get-app";
import React from "react";
// import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[1344px] px-4 md:px-12 2xl:px-0 mx-auto font-sans pt-16 pb-[27px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[632px] w-full lg:w-auto text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-[64px] font-bold leading-tight lg:leading-20">
              <span className="text-[rgb(26,35,115)]">Improve</span> Your
              Website With An Instant AI Audit
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-gray-500 font-normal leading-6 md:leading-7 lg:leading-8">
              Paste your site URL and get a quick, free audit that shows
              what&apos;s working, what&apos;s not, and connects you with
              experts who can fix it.
            </p>
          </div>
          <div className="flex items-center flex-col justify-center md:items-start gap-8 w-full">
            <GetApp />
            <div className="flex items-center justify-center sm:justify-between gap-4 sm:gap-8 w-full max-w-4xl mx-auto py-4 sm:max-w-[80%] md:mx-[unset]">
              {[
                { value: "8K +", label: "Active testers" },
                { value: "10K +", label: "Downloads" },
                { value: "12K +", label: "Reviews" },
              ].map((item, idx) => (
                <React.Fragment key={item.label}>
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1">
                    <p className="font-bold text-2xl sm:text-3xl">
                      {item.value}
                    </p>
                    <p className="text-[#676767] text-sm sm:text-base">
                      {item.label}
                    </p>
                  </div>
                  {idx < 2 && <span className="block w-px h-8 bg-[#676767]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="grid place-content-center max-w-[325px] max-h-[290px] sm:max-w-[100vw] sm:w-full sm:h-full sm:max-h-full overflow-hidden justify-center my-8">
          <Image
            src="/assets/images/hero-wavey-iphone.svg"
            width={300}
            height={290}
            alt="Wavey Iphone Hero"
            className="w-full scale-170 m-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
