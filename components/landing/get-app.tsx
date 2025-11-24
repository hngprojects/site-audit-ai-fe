import Image from "next/image";
import Link from "next/link";
import React from "react";

export const GetApp = () => {
  return (
    <div className="flex flex-row gap-4 mt-6 md:mt-0">
      <Link
        href="#"
        className="bg-black text-white px-2 py-1 xl:px-6 xl:py-3 rounded-lg flex items-center gap-2 text-xs md:text-[11px]"
      >
        <Image
          src="/assets/images/google-play.svg"
          alt="Google Play"
          width={24}
          height={24}
        />
        <div>
          Get it on{" "}
          <p className="text-sm md:text-base font-semibold">Google Play</p>
        </div>
      </Link>
      <Link
        href="#"
        className="bg-black  text-white px-2 py-1 xl:px-6 xl:py-3 rounded-lg flex items-center gap-2 text-xs md:text-[11px]"
      >
        <Image
          src="/assets/images/apple.svg"
          alt="App Store"
          width={24}
          height={24}
        />
        <div>
          Download on the{" "}
          <p className="text-xs md:text-base font-semibold">App Store</p>
        </div>
      </Link>
    </div>
  );
};
