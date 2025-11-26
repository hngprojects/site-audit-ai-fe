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
      className={`
    fixed inset-0
    bg-white 
    flex flex-col items-center justify-start
    pt-24 pb-10 gap-8
    transition-all duration-300
    z-50
    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
    >
      <div
        className="flex-1 flex flex-col items-center gap-8 mt-15
"
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
      </div>

      <CallToActionButtonHeader
        landing={landing}
        actionText={actionText}
        actionHref={actionHref}
        onclick={onclick}
      />
    </div>
  );
};
