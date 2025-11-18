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
}) => (
  <Link
    href={href}
    className={`${pathname === href ? "text-[#FF5A3D]" : "text-[#1C1C1C]"} font-medium ${mobile ? "transition-colors" : pathname === href ? "hover:text-[#1C1C1C] text-lg" : "hover:text-[#FF5A3D] text-lg"}`}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default NavLink;
