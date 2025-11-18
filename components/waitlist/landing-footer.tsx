import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialIcons } from "@/lib/social-icon-data";

const LandingFooter = () => {
  return (
    <footer className="bg-[#0A0A0B] ">
      <div
        id="footer-nav"
        className=" max-w-[1440px] mx-auto font-sans py-8 flex flex-col items-center justify-center gap-6 min:h-32 md:flex-row md:justify-between md:px-12 md:my-12"
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
    </footer>
  );
};

export default LandingFooter;
