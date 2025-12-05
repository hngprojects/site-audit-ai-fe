import Link from "next/link";
import { usePathname } from "next/navigation";

export const CallToActionButtonHeader = ({
  landing,
  actionText,
  actionHref,
  onclick,
}: {
  landing: boolean;
  actionText: string;
  actionHref: string;
  onclick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <div className=" flex flex-col sm:flex-row sm:space-x-4 items-center">
      <Link
        href={`${pathname === "/scan" || pathname.includes("/scan/") ? "https://play.google.com/store/apps/details?id=net.emerj.sitelytics" : "/scan"}`}
        className="w-full bg-[#FF5A3D] py-3 px-7 text-white rounded-xl mt-3 sm:mt-0  text-center sm:w-[unset]"
      >
        {pathname === "/scan" || pathname.includes("/scan/")
          ? "Get the App"
          : "Scan Now"}
      </Link>
      {landing && (
        <Link
          href={actionHref}
          target="_blank"
          className="hidden bg-[#FF5A3D] py-3 px-7 text-white rounded-xl mt-3 sm:mt-0 w-[90%] text-center sm:w-[unset]"
          onClick={onclick}
        >
          {actionText}
        </Link>
      )}
    </div>
  );
};
