import React from "react";
import Image from "next/image";

const keyValues = [
  {
    icon: "/assets/icons/about/zoom-out.svg",
    title: "Clarity First",
    description:
      "We turn complex website issues into simple, human-friendly explanations anyone can understand.",
    bgClass: "bg-[#1A2373] text-white",
    iconBgClass: "bg-[#969ABF]",
  },
  {
    icon: "/assets/icons/about/forward.svg",
    title: "Speed & Efficiency",
    description:
      "Our AI scans your website in seconds so you can spot problems and fix them faster than ever.",
    bgClass: "bg-[#F5F5F5] text-[#1C1C1C]",
    iconBgClass: "bg-[#1A2373]",
  },
  {
    icon: "/assets/icons/about/bag.svg",
    title: "Built for Businesses",
    description:
      "We design with the everyday business owner in mind, no tech background needed.",
    bgClass: "bg-[#F5F5F5] text-[#1C1C1C]",
    iconBgClass: "bg-[#1A2373]",
  },
  {
    icon: "/assets/icons/about/verified.svg",
    title: "Trust & Transparency",
    description:
      "No hidden jargon, no confusion. You always know what’s wrong, why it matters, and how to fix it.",
    bgClass: "bg-[#F5F5F5] text-[#1C1C1C]",
    iconBgClass: "bg-[#1A2373]",
  },
  {
    icon: "/assets/icons/about/icon.svg",
    title: "Expert Support on Demand",
    description:
      "When you need hands-on help, we connect you to vetted, reliable professionals instantly.",
    bgClass: "bg-[#F5F5F5] text-[#1C1C1C]",
    iconBgClass: "bg-[#1A2373]",
  },
  {
    icon: "/assets/icons/about/arrow-up.svg",
    title: "Continuous Improvement",
    description:
      "Your website should grow with your business. Sitelytics helps you improve it step-by-step, anytime.",
    bgClass: "bg-[#F5F5F5] text-[#1C1C1C]",
    iconBgClass: "bg-[#1A2373]",
  },
];

const KeyValues = () => {
  return (
    <section className="bg-white py-16 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="text-2xl md:text-[32px] lg:text-[40px] font-bold text-[#1C1C1C] mb-16">
          Our Key Values: the foundation of our work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {keyValues.map((value, index) => (
            <div
              key={index}
              className="
    group
    flex flex-col p-7 rounded-[10px] bg-[#F5F5F5] text-[#1C1C1C]
    hover:bg-[#1A2373] hover:text-white transition-all
  "
            >
              <div
                className="
      w-10 h-10 rounded-full flex items-center justify-center mb-4 
      bg-[#1A2373] transition-all duration-200 
      group-hover:bg-[#969ABF]
    "
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={24}
                  height={24}
                />
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                {value.title}
              </h3>

              <p className="text-sm opacity-90 group-hover:text-white">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyValues;
