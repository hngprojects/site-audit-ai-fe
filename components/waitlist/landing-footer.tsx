"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { socialIcons } from "@/lib/social-icon-data";
import { footerLinks } from "@/lib/footer-links-data";

const LandingFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer>
      <div
        id="footer-app"
        className="max-w-6xl h-[410px] bg-[#E85238] rounded-4xl mx-auto relative top-24 font-sans"
      >
        {/* left column */}
        <div className="p-8 md:p-12 flex flex-col items-cente justify-between h-full">
          <div className="flex-1">
            <h2 className="text-[48px] font-sans font-semibold text-white">
              Audit Your Website Instantly
            </h2>
            <p className="text-[18px] text-white mt-4">
              Download the app and let AI analyze your site, uncover
              opportunities, and boost performance, all in seconds.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-0">
            <Link
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 text-[11px]"
            >
              <Image
                src="/assets/images/google-play.svg"
                alt="Google Play"
                width={24}
                height={24}
              />
              <div>
                Get it on <p className="text-base font-semibold">Google Play</p>
              </div>
            </Link>
            <Link
              href="#"
              className="bg-black  text-white px-6 py-3 rounded-lg flex items-center gap-2 text-[11px]"
            >
              <Image
                src="/assets/images/apple.svg"
                alt="App Store"
                width={24}
                height={24}
              />
              <div>
                Download on the{" "}
                <p className="text-base font-semibold">App Store</p>
              </div>
            </Link>
          </div>
        </div>

        {/* right coluumn */}
        <div></div>
      </div>
      <section className="bg-[#0A0A0B] pt-40">
        <div className="flex items-start justify-between max-w-[1440px] mx-auto font-sans py-8 flex-col md:flex-row md:justify-between md:px-12 md:mb-20">
          <div>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/assets/images/Logo_single.svg"
                alt="Site Audit AI Logo"
                width={140}
                height={140}
                className="w-[63.5]"
              />
              <p className="font-sans text-[#ECE9EC] text-[40px] font-bold">
                Sitelytics
              </p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-20">
            {footerLinks.map((column) => (
              <div key={column.title}>
                <h3 className="text-[32px] text-[#E5E9EC] font-bold mb-[16.45px]">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-[21.9px] text-[#9FA1A2] font-medium"
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

        <div className=" max-w-[1440px] mx-auto md:px-12 ">
          <div
            id="footer-nav"
            className=" font-sans  flex flex-col items-center justify-center gap-6 min:h-32 md:flex-row md:justify-between border-b border-b-[#f5e9e9]/45 md:my-6 py-8 "
          >
            <p className="text-[#f5e9e9] text-sm md:text-xl">
              &copy;{new Date().getFullYear()} HNG Tech Limited. All rights
              reserved.
            </p>
            <nav>
              <ul className="flex gap-4">
                {socialIcons.map(({ icon: Icon, name, link: address }) => (
                  <li
                    key={name}
                    className="bg-[#FF5A3D] w-7 h-7 flex items-center justify-center rounded-full md:w-10 md:h-10"
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

        <div className="h-1"></div>
      </section>
    </footer>
  );
};

export default LandingFooter;
