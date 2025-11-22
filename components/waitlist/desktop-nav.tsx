import NavLink from "./nav-link";

const DesktopNav = ({
  links_data,
  pathname,
}: {
  links_data: Array<Record<string, string>>;
  pathname: string;
}) => {
  return (
    <nav className="hidden absolute left-1/2 transform -translate-x-1/2 sm:flex sm:justify-center sm:gap-8 text-base">
      {links_data.map(({ href, label }) => (
        <NavLink
          key={label}
          href={href}
          label={label}
          mobile={false}
          pathname={pathname}
        />
      ))}
    </nav>
  );
};

export default DesktopNav;
