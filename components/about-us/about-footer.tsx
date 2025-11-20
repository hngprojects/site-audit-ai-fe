import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutFooter = () => {
  return (
    <footer className="bg-[#0A0A0B] text-white pt-16 pb-8">
      <div className="container mx-auto px-8">
        {/* Top Section: Logo and Links */}
        <div className="flex flex-wrap justify-between gap-10 mb-20">
          {/* Logo */}
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/images/Logo.svg"
                alt="Sitelytics Logo"
                width={135}
                height={58}
              />
            </Link>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap gap-10">
            <div>
              <h3 className="font-bold text-2xl mb-4">Overview</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/waitlist"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    Waitlist
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-[#9FA1A2] hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-[#9FA1A2] hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Socials */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            ©2025 HNG Tech Limited. All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {/* Placeholders for social icons */}
            <a href="#">
              <Image
                src="/assets/images/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/x.svg"
                alt="X (formerly Twitter)"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/assets/images/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
