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
    <>
      {landing && (
        <Link
          href={actionHref}
          className="bg-[#FF5A3D] py-3 px-7 text-white rounded-xl mt-3 sm:mt-0"
          onClick={onclick}
        >
          {actionText}
        </Link>
      )}
    </>
  );
};
