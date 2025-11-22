import React from "react";
import Image from "next/image";

const InstantAuditCTA = () => {
  return (
    <section className="relative w-full h-[570px] flex items-center justify-center text-center py-20">
      {/* Background Image */}
      <Image
        src="/assets/images/about/cta-background.jpg"
        alt="Workers in an office"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl px-4 space-y-6">
        <h2 className="text-5xl font-bold text-[#FF5A3D] leading-tight">
          Audit Your Website Instantly
        </h2>
        <p className="text-xl text-white">
          Download the app and let AI analyze your site, uncover opportunities,
          and boost performance, all in seconds.
        </p>
        <button className="bg-[#FF5A3D] text-white font-medium py-4 px-8 rounded-xl text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default InstantAuditCTA;
