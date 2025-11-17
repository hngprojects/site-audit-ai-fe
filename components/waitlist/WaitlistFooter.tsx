import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialIcons = [
  {
    icon: Facebook,
    name: "Facebook",
    link: "https://facebook.com/side-audit-ai",
  },
  { icon: Twitter, name: "Twitter", link: "https://x.com/side-audit-ai" },
  {
    icon: Linkedin,
    name: "LinkedIn",
    link: "https://linkedin.com/side-audit-ai",
  },
  {
    icon: Instagram,
    name: "Instagram",
    link: "https://instagram.com/side-audit-ai",
  },
];

const WaitlistFooter = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 h-32 md:flex-row md:justify-between md:px-12">
      <p className="text-[#676767] text-sm md:text-xl">
        &copy;{new Date().getFullYear()} HNG Tech Limited. All rights reserved.
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
                <Icon
                  size={16}
                  className="md:w-5 md:h-5 w-4 h-4 text-white"
                  fill={
                    name == "Facebook" || name == "LinkedIn"
                      ? "white"
                      : "#FF5A3D"
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default WaitlistFooter;
