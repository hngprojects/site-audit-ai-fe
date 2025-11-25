import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GetApp = () => {
  const buttons = [
    {
      href: "#",
      imgSrc: "/assets/images/google-play.svg",
      alt: "Google Play",
      line1: "Get it on",
      line2: "Google Play",
    },
    {
      href: "#",
      imgSrc: "/assets/images/apple.svg",
      alt: "App Store",
      line1: "Download on the",
      line2: "App Store",
    },
  ];

  return (
    <div className="flex gap-[16.14px] items-center">
      {buttons.map(({ href, imgSrc, alt, line1, line2 }) => (
        <Link
          key={alt}
          href={href}
          className="bg-black text-white flex items-center gap-[14.61px] rounded-[9.73989px] px-[15px] py-[10px] shrink-0"
          aria-label={alt}
        >
          <Image
            src={imgSrc}
            alt={alt}
            width={24.21}
            height={24.21}
            className="w-[24.21px] h-[24.21px] shrink-0"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[11px] leading-[12px] font-normal uppercase">
              {line1}
            </span>
            <span className="text-[15px] leading-[16px] font-semibold">
              {line2}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
