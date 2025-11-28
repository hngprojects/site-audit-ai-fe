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
    <div className="flex gap-[9px] w-[177px] h-[34px] md:gap-2 lg:gap-4 items-center md:w-[168px] md:h-[32px] lg:w-[325px] lg:h-[62px]">
      {buttons.map(({ href, imgSrc, alt, line1, line2 }) => (
        <Link
          key={alt}
          href={href}
          className="bg-black text-white flex items-center gap-2 w-[84px] h-[28px] rounded-[5px] px-[8px] py-[5px]
            md:gap-2 md:rounded-[5px] md:px-[8px] md:py-[5px] md:w-[80px] md:h-[28px]
            lg:gap-4 lg:rounded-[10px] lg:px-[15px] lg:py-[10px] lg:w-[154px] lg:h-[52px]"
          aria-label={alt}
        >
          <Image
            src={imgSrc}
            alt={alt}
            width={24}
            height={24}
            className="w-[13px] h-[13px] md:w-[13px] md:h-[13px] lg:w-6 lg:h-6"
          />
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[6px] leading-[7px] font-light md:text-[4.5px] md:leading-none lg:text-[8.5px] lg:leading-[12.11px] uppercase">
              {line1}
            </span>
            <span className="text-[8px] leading-[9px] font-semibold md:text-[8px] md:leading-none lg:text-[14px] lg:leading-[16.14px">
              {line2}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};
