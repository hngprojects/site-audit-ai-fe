import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GetApp = () => {
  const buttons = [
    {
      href: "https://drive.google.com/drive/u/2/folders/1O40Rnk4bMHYN9vEcyQYzrnNaUgO3m-zs?usp=drive_link",
      imgSrc: "/assets/images/google-play.svg",
      alt: "Google Play",
      line1: "Get it on",
      line2: "Google Play",
    },
    {
      href: "https://drive.google.com/drive/u/2/folders/1O40Rnk4bMHYN9vEcyQYzrnNaUgO3m-zs?usp=drive_link",
      imgSrc: "/assets/images/apple.svg",
      alt: "App Store",
      line1: "Download on the",
      line2: "App Store",
    },
  ];

  return (
    <div className="flex gap-5 md:gap-4 items-center">
      {buttons.map(({ href, imgSrc, alt, line1, line2 }) => (
        <Link
          key={alt}
          href={href}
          className="bg-black text-white flex items-center gap-2 rounded-[9.75px] md:rounded-xl px-4 py-2 max-w-40"
          aria-label={alt}
        >
          <Image
            src={imgSrc}
            alt={alt}
            width={24}
            height={24}
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[8px] font-light md:text-[10px] uppercase">
              {line1}
            </span>
            <span className="text-[12px] leading-3.5 md:text-base font-semibold md:leading-5">
              {line2}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
