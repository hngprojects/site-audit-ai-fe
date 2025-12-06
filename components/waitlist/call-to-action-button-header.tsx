import Link from "next/link";

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
  return (
    <div className=" flex flex-col sm:flex-row sm:space-x-4 items-center">
      {landing && (
        <Link
          href={actionHref}
          target="_blank"
          className=" bg-[#FF5A3D] py-3 px-7 text-white rounded-xl mt-3 sm:mt-0 w-[90%] text-center sm:w-[unset]"
          onClick={onclick}
        >
          {actionText}
        </Link>
      )}
    </div>
  );
};
