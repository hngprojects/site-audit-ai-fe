import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FEFFFF] py-20">
      <div className="container mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[63px]">
          <div className="md:w-1/2 max-w-[515px] space-y-2.5">
            <div className="relative w-fit">
              <Image
                src="/assets/images/about/about-us-title-and-vector.png"
                alt="About us"
                width={153}
                height={34}
              />
            </div>
            <h1 className="text-5xl font-bold text-[#1C1C1C] leading-tight">
              Sitelytics was built with{" "}
              <span
                className="text-[#FF5A3D] tracking-normal underline"
                style={{
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "2px",
                }}
              >
                one mission:
              </span>{" "}
              to help small businesses succeed online
            </h1>
            <p className="text-xl text-[#494949] text-justify">
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

          <div className="md:w-1/2">
            <Image
              src="/assets/images/about/hero.jpg"
              alt="People working in an office"
              width={649}
              height={433}
              className="w-full h-auto object-cover rounded-xl border-[6px] border-[#FFEFEC]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
