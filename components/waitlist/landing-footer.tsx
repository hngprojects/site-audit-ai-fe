"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialIcons } from "@/lib/social-icon-data";
import { footerLinks } from "@/lib/footer-links-data";
import { GetApp } from "../landing/get-app";

const LandingFooter = () => {
  const pathname = usePathname();
  const HIDDEN_PATHS = [
    "/faq",
    "/about",
    "/cookie-policy",
    "/privacy-policy",
    "/terms-of-use",
    "/release",
    "/blog",
  ];

  const showFooterAppSection = !(
    HIDDEN_PATHS.includes(pathname ?? "") || pathname?.includes("/blog/")
  );

  return (
    <footer className="relative">
      <div
        className={`${pathname === "/faq" || pathname === "/about" || pathname === "/cookie-policy" || pathname === "/privacy-policy" || pathname === "/terms-of-use" || pathname === "/release" ? "hidden" : ""}`}
      >
        <div
          id="footer-app"
          className="bg-[#E85238] rounded-[30px] max-w-[1050px] mx-auto relative top-[50px] font-sans overflow-hidden
             h-[380px] mb-[-40px] z-10
             flex flex-col sm:flex-row gap-5 sm:items-stretch sm:justify-between"
        >
          {/* left column */}
          <div className="sm:w-[60%] py-8 px-4 sm:py-4 sm:px-6 flex flex-col h-full gap-6 md:px-10 md:py-12">
            <div>
              <h2 className="text-[32px] sm:text-[48px] font-bold text-white leading-tight sm:leading-[56px]">
                Audit Your Website <br /> Instantly
              </h2>

              <p className="text-sm leading-5 lg:text-[18px] max-w-[497px] text-white mt-4 sm:leading-[22px]">
                Download the app and let AI analyze your site, uncover
                opportunities, and boost performance, all in seconds.
              </p>
            </div>

            <GetApp />
          </div>

          {/* right column */}
          <div className="hidden sm:block flex-1 relative">
            {/* Individual Circles directly positioned */}
            <div className="absolute w-[202px] h-[202px] right-[89px] top-[91px] rounded-full border-[0.9px] border-[#FCB1A2]/30" />
            <div className="absolute w-[303px] h-[303px] right-[38.5px] top-[40.5px] rounded-full border-[0.9px] border-[#FCB1A2]/30" />
            <div className="absolute w-[404px] h-[404px] right-[-12px] top-[-10px] rounded-full border-[0.9px] border-[#FCB1A2]/30" />
            <div className="absolute w-[505px] h-[505px] right-[1050px - (607.5px + 505px)] right-[-62.5px] top-[-60.5px] rounded-full border-[0.9px] border-[#FCB1A2]/30" />
            <div className="absolute w-[606px] h-[606px] right-[1050px - (557px + 606px)] right-[-113px] top-[-111px] rounded-full border-[0.9px] border-[#FCB1A2]/30" />

            <Image
              src="/assets/images/landing/cta-phones.png"
              alt="Phone mockups"
              width={715.57}
              height={622.06}
              className="absolute top-[50px] right-[100px] z-10 scale-145"
            />
          </div>
          <div className="sm:hidden w-full">
            <Image
              src="/assets/images/landing/cta-phones.png"
              alt="Phone mockups"
              width={850}
              height={700}
            />
          </div>
        </div>
      </div>

      <section
        className={`bg-[#0A0A0B] h-[625px] ${pathname === "/faq" || pathname === "/cookie-policy" || pathname === "/privacy-policy" ? "pt-16" : "pt-40"}`}
      >
        <div className="flex items-start justify-between max-w-[1440px] mx-auto font-sans py-8 px-11 md:px-12  flex-col sm:flex-row md:justify-between md:mb-20 gap-8">
          <div>
            <Link href="/" className="hidden xl:flex items-center gap-2">
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
            <Link href="/" className="md:hidden flex items-center gap-2">
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
