"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { socialIcons } from "@/lib/social-icon-data";
import { footerLinks } from "@/lib/footer-links-data";

const LandingFooter = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer>
      <div
        className={`${pathname === "/faq" || pathname === "/about" ? "hidden" : ""}`}
      >
        <div
          id="footer-app"
          className=" max-w-6xl md:max-h-[410px] bg-[#E85238] rounded-4xl mx-auto relative top-24 font-sans flex flex-col md:flex-row md:items-center gap-5 justify-between"
        >
          {/* left column */}
          <div className="md:w-3/4 flex-1 p-8 md:p-12 flex flex-col  h-full gap-6">
            <div className="">
              <h2 className="text-2xl md:text-[clamp(24px,3.35vw+0.2px,48px)] max-w-[500px] font-sans font-semibold text-white md:leading-12">
                Audit Your Website Instantly
              </h2>
              <p className="text-sm lg:text-[18px] max-w-[497px] text-white mt-4">
                Download the app and let AI analyze your site, uncover
                opportunities, and boost performance, all in seconds.
              </p>
            </div>
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
                  <p className="text-sm md:text-base font-semibold">
                    Google Play
                  </p>
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
                  <p className="text-xs md:text-base font-semibold">
                    App Store
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* right coluumn */}
          {/* Right side - Responsive phone images */}
          <div className="flex-1 flex items-center justify-end">
            <Image
              src="/assets/images/landing/appstore.svg"
              alt="Footer"
              width={400}
              height={400}
              className="absolute bottom-0 right-0 hidden md:block"
            />
            <div className="md:hidden relative w-full max-w-sm aspect-video">
              <Image
                src="/assets/images/landing/appstore.svg"
                alt="Sitelytics mobile app screens"
                fill
                className="w-full h-full object-contain absolute bottom-0 right-0"
              />
            </div>
          </div>
        </div>
      </div>

      <section
        className={`bg-[#0A0A0B] ${pathname === "/faq" ? "pt-16" : "pt-40"}`}
      >
        <div className="flex items-start justify-between max-w-[1440px] mx-auto font-sans py-8 px-11 md:px-12  flex-col sm:flex-row md:justify-between md:mb-20 gap-8">
          <div>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hidden xl:flex items-center gap-2"
            >
              <Image
                src="/assets/images/footer-logo.svg"
                alt="Site Audit AI Logo"
                width={346}
                height={108}
                className=""
              />
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hidden md:flex xl:hidden items-center gap-2"
            >
              <Image
                src="/assets/images/footer-logo.svg"
                alt="Site Audit AI Logo"
                width={207}
                height={108}
                className=""
              />
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="md:hidden flex items-center gap-2"
            >
              <Image
                src="/assets/images/footer-logo.svg"
                alt="Site Audit AI Logo"
                width={207}
                height={108}
                className=""
              />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row  gap-8 sm:gap-20">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg md:text-[16px] xl:text-[32px] text-[#FEFFFF] font-bold sm:mb-[16.45px]">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm lg:text-[20px] text-[#B9B9B9] font-medium hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className=" max-w-[1440px] mx-auto px-11 md:px-12 ">
          <div
            id="footer-nav"
            className=" font-sans  flex flex-col items-center justify-center gap-6 min:h-32 md:flex-row md:justify-between border-b border-b-[#f5e9e9]/45 md:my-6 py-8 "
          >
            <p className="text-[#f5e9e9] text-sm md:text-[16px]">
              &copy;{new Date().getFullYear()} HNG Tech Limited. All rights
              reserved.
            </p>
            <nav>
              <ul className="flex gap-4">
                {socialIcons.map(({ icon: Icon, name, link: address }) => (
                  <li
                    key={name}
                    className="bg-[#FF5A3D] w-7 h-7 xl:w-[38.38px] xl:h-[38.38px] flex items-center justify-center rounded-full hover:bg-[#FF5A3D]/80"
                    aria-label={name}
                  >
                    <Link href={address}>
                      <Image
                        className="md:w-5 md:h-5 w-4 h-4 text-white"
                        src={Icon}
                        alt={`${name} icon`}
                        width={8}
                        height={8}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="h-4 "></div>
      </section>
    </footer>
  );
};

export default LandingFooter;
