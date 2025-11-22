import React from "react";
import Image from "next/image";

const MobileApp = () => {
  return (
    <section className="bg-[#FFF9F8] py-20">
      <div className="container mx-auto px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2 w-full relative">
            <div className="relative pt-[73.22%]">
              <Image
                src="/assets/images/about/mobile-app-composition.png"
                alt="Mobile App Composition"
                layout="fill"
              />
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-[40px] font-bold text-[#1C1C1C] leading-tight">
              A Mobile App that fixes all your{" "}
              <span className="text-[#484F8F]">website</span> issues
            </h2>
            <p className="text-xl text-[#494949] text-justify">
              We know most business owners are not tech experts, and they do not
              have to be. Your website is your digital storefront, and when it
              is not performing, you lose customers.
            </p>
            <p className="text-xl text-[#494949] text-justify">
              That is why we created a mobile app that uses powerful AI to scan
              your website in seconds, break down issues in simple language, and
              show you exactly how to fix them.
            </p>
            <button className="bg-[#FF5A3D] text-white font-medium text-sm py-[14px] px-6 rounded-[12px]">
              Get your free Audit now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
