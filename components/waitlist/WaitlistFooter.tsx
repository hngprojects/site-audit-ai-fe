"use client";

import { usePathname } from "next/navigation";
import LandingFooter from "./landing-footer";

const WaitlistFooter = () => {
  const pathname = usePathname();

  if (pathname === "/waitlist") {
    return (
      <div
        id="footer-nav"
        className=" max-w-[1440px] mx-auto font-sans py-8 flex flex-col items-center justify-center gap-6 min:h-32 sm:flex-row sm:justify-between sm:px-12 md:my-12"
      >
        <p className="text-[#676767] text-sm sm:text-base md:text-xl">
          &copy;{new Date().getFullYear()} HNG Tech Limited. All rights
          reserved.
        </p>
      </div>
    );
  } else if (pathname === "/maintenance") {
    return <></>;
  } else {
    return <LandingFooter />;
  }
};

export default WaitlistFooter;
