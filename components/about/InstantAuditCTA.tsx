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

      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-20 space-y-6">
        <h2 className="text-5xl font-bold text-white leading-tight">
          <span className="text-[#FF5A3D]">Audit</span> Your Website Instantly
        </h2>
        <p className="text-2xl text-white">
          Download the app and let AI analyze your site, uncover opportunities,
          and boost performance, all in seconds.
        </p>
        <button className="bg-[#FF5A3D] text-white font-medium py-[15.6px] px-[26.8px] rounded-[13.4px] text-[15.6px] flex items-center justify-center w-[384px] h-[56px] gap-[11.19px]">
          Get the App
        </button>
      </div>
    </section>
  );
};

export default InstantAuditCTA;
