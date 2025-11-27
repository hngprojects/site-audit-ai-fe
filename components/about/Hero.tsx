import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FEFFFF] py-13.5 md:py-6.5 lg:py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-15 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-[515px] space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-fit">
              <Image
                src="/assets/images/about/about-us-title-and-vector.png"
                alt="About us"
                width={137} // Tablet Figma width
                height={28} // Tablet Figma height
                className="w-[100px] md:w-[137px] lg:w-[153px] h-auto"
              />
            </div>
            <h1 className="text-2xl md:text-[35px] lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
              Sitelytics was built with{" "}
              <span
                className="text-[#FF5A3D] underline"
                style={{
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "2px",
                }}
              >
                one mission:
              </span>{" "}
              to help small businesses succeed online
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-[#494949] text-center lg:text-justify">
              Without the stress, cost, or confusion of traditional website
              audits. We believe{" "}
              <span
                style={{
                  backgroundColor: "rgba(252, 82, 35, 0.1)",
                  borderRadius: "5px",
                  padding: "2px 4px",
                }}
              >
                your online success
              </span>{" "}
              should be simple, powerful and accessible.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/assets/images/about/hero.jpg"
              alt="People working in an office"
              width={306} // Mobile Figma width
              height={204} // Mobile Figma height
              className="min-w-[306px] sm:h-[204px] md:h-[434px] lg:h-[433px] object-cover rounded-xl border-[6px] border-[#FFEFEC] md:w-[651px] lg:w-[649px]"
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
