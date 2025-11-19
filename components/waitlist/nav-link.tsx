"use client";

import Link from "next/link";

const NavLink = ({
  href,
  label,
  onClick,
  mobile,
  pathname,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  mobile: boolean;
  pathname: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    // Handle smooth scroll for hash links
    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      // If we're on the same page, prevent default and scroll
      if (path === pathname || (path === "/" && pathname === "/")) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      // For cross-page navigation, let Next.js handle it naturally
      // The browser will handle the hash scroll after navigation
    }
  };

  return (
    <Link
      href={href}
      className={`${pathname === href ? "text-[#FF5A3D]" : "text-[#1C1C1C]"} font-medium ${mobile ? "transition-colors" : pathname === href ? "hover:text-[#1C1C1C] text-lg" : "hover:text-[#FF5A3D] text-lg"}`}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

export default NavLink;
