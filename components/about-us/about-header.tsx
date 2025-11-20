import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutHeader = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto px-8 py-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder for logo - we will add the real one next */}
          <Image
            src="/assets/images/Logo.svg"
            alt="Sitelytics Logo"
            width={135}
            height={58}
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-base font-medium text-[#1C1C1C]">
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-base font-medium text-[#1C1C1C]"
          >
            About
          </Link>
          <Link
            href="/how-it-works"
            className="text-base font-medium text-[#1C1C1C]"
          >
            How it works
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:block bg-[#FF5A3D] text-white text-lg font-medium py-4 px-8 rounded-xl">
          Get Started
        </button>

        {/* Mobile Menu Icon (placeholder) */}
        <div className="md:hidden">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="#1C1C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="#1C1C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="#1C1C1C"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
