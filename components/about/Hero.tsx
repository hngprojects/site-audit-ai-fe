import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FEFFFF] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center">
              <h4 className="text-2xl font-medium text-[#1C1C1C]">About us</h4>
              <Image
                src="/assets/images/about/about-us-vector.png"
                alt="Decorative vector line"
                width={50} // Required for Next.js Image, but will be overridden by className
                height={50} // Required for Next.js Image, but will be overridden by className
                className="w-12 h-auto ml-2" // Responsive sizing with Tailwind
              />
            </div>
            <h1 className="text-5xl font-bold text-[#1C1C1C] leading-tight">
              Sitelytics was built with one mission: to help small businesses
              succeed online
            </h1>
            <p className="text-lg text-[#494949] text-justify">
              Without the stress, cost, or confusion of traditional website
              audits. We believe your online success should be simple, powerful
              and accessible.
            </p>
            <div className="bg-[rgba(252,82,35,0.1)] rounded-md w-fit px-4 py-1 text-[#FF5A3D]">
              No tech skills needed
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/assets/images/about/hero.jpg"
              alt="People working in an office"
              width={649} // Approximate desktop width from Figma
              height={433} // Approximate desktop height from Figma
              className="w-full h-auto object-cover rounded-xl border-8 border-[#FFEFEC]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
