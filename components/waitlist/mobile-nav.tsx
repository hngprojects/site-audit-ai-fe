import { CallToActionButtonHeader } from "./call-to-action-button-header";
import NavLink from "./nav-link";

export const MobileNav = ({
  isOpen,
  links_data,
  onclick,
  landing,
  actionText,
  actionHref,
  pathname,
}: {
  isOpen: boolean;
  links_data: Array<Record<string, string>>;
  onclick: () => void;
  landing: boolean;
  actionText: string;
  actionHref: string;
  pathname: string;
}) => {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-white shadow-md sm:hidden flex flex-col items-center py-4 gap-4 border-t border-gray-200 transition-all duration-300
    ${isOpen ? "opacity-100 translate-y-0 z-50" : "opacity-0 -translate-y-2 pointer-events-none -z-10"}
  `}
    >
      {links_data.map(({ href, label }) => (
        <NavLink
          key={label}
          href={href}
          label={label}
          onClick={onclick}
          mobile={true}
          pathname={pathname}
        />
      ))}

      <CallToActionButtonHeader
        landing={landing}
        actionText={actionText}
        actionHref={actionHref}
        onclick={onclick}
      />
    </div>
  );
};
