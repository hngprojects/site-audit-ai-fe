"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinksLanding, navLinksWaitlist } from "../../lib/nav-link-data";
import DesktopNav from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { CallToActionButtonHeader } from "./call-to-action-button-header";
import { usePathname } from "next/navigation";

const WaitlistHeader = () => {
  const pathname = usePathname();
  const landing = pathname !== "/waitlist";
  const [isOpen, setIsOpen] = useState(false);

  const actionText =
    pathname === "/"
      ? "Join waitlist"
      : pathname === "/how-it-works"
        ? "Get the App"
        : "Get the App";
  const actionHref =
    pathname === "/" ? "/waitlist" : pathname === "/how-it-works" ? "#" : "";

  const links = (() => {
    if (pathname === "/about" || "/terms-of-use") {
      return [
        { href: "/why-sutelytics", label: "Why Sitelytics" },
        { href: "/how-it-works", label: "How It Works" },
        { href: "/faq", label: "FAQ" },
      ];
    }
    return landing ? navLinksLanding : navLinksWaitlist;
  })();

  return (
    <header className="max-w-[1440px] mx-auto font-sans font-medium p-4 flex justify-between items-center bg-white border-b-2 z-50 px-4 md:px-12 sm:py-6 sticky top-0 sm:h-20">
      <Link href="/" onClick={() => setIsOpen(false)}>
        <Image
          src="/assets/images/Logo.svg"
          alt="Site Audit AI Logo"
          width={140}
          height={140}
        />
      </Link>

      {links && links.length && (
        <DesktopNav links_data={links} pathname={pathname} />
      )}

      <button
        className="sm:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A3D] z-55"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {links && links.length && (
        <MobileNav
          links_data={links}
          onclick={() => setIsOpen(false)}
          isOpen={isOpen}
          landing={landing}
          actionText={actionText}
          actionHref={actionHref}
          pathname={pathname}
        />
      )}

      <span className="hidden sm:flex sm:ml-auto sm:justify-self-end">
        <CallToActionButtonHeader
          landing={landing}
          actionText={actionText}
          actionHref={actionHref}
        />
      </span>
    </header>
  );
};

export default WaitlistHeader;
