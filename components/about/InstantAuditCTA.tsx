import React from "react";
import Image from "next/image";

const InstantAuditCTA = () => {
  return (
    <section className="relative w-full h-[570px] flex items-center justify-center text-center py-20">
      <Image
        src="/assets/images/about/cta-background.jpg"
        alt="Workers in an office"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-20 space-y-6">
        <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
          <span className="text-[#FF5A3D]">Audit</span> Your Website Instantly
        </h2>
        <p className="text-base md:text-2xl text-white">
          Download the app and let AI analyze your site, uncover opportunities,
          and boost performance, all in seconds.
        </p>
        <a
          className="bg-[#FF5A3D] text-white font-medium py-[0.975rem] px-[1.675rem] rounded-[0.8375rem] text-[0.975rem] flex items-center justify-center w-full max-w-64.75 md:w-[24rem] h-14 gap-[0.699rem]"
          href="https://play.google.com/store/apps/details?id=com.tokugawa.sitelytics"
        >
          Get the App
        </a>
      </div>
    </section>
  );
};

export default InstantAuditCTA;
