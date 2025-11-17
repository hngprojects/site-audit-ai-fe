"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/waitlist/", label: "Home" },
  { href: "/waitlist/benefits", label: "Benefits" },
];

const WaitlistHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({
    href,
    label,
    onClick,
    mobile,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
    mobile: boolean;
  }) =>
    mobile ? (
      <Link
        href={href}
        className="text-[#1C1C1C] font-medium hover:text-[#FF5A3D] transition-colors"
        onClick={onClick}
      >
        {label}
      </Link>
    ) : (
      <Link
        key={label}
        href={href}
        className="text-[#1C1C1C] text-lg font-medium"
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    );

  return (
    <header className="p-4 flex justify-between items-center relative bg-white z-50 md:grid md:grid-cols-3 md:items-center md:px-12 md:py-6">
      <Image
        src="/assets/images/logo.png"
        alt="Site Audit AI Logo"
        width={140}
        height={140}
      />

      {/* Desktop Navigation */}
      <nav className="hidden absolute left-1/2 transform -translate-x-1/2 w-45 md:flex md:justify-between text-base">
        {navLinks.map(({ href, label }) => (
          <NavLink
            key={label}
            href={href}
            label={label}
            onClick={() => setIsOpen(false)}
            mobile={false}
          />
        ))}
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A3D]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 gap-4 border-t border-gray-200 transition-transform duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={label}
              href={href}
              label={label}
              onClick={() => setIsOpen(false)}
              mobile={true}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default WaitlistHeader;
