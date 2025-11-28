import { SocialLinks } from "../waitlist/social-links";
import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <Image
        src="/assets/images/maintenance/hero.svg"
        width={280}
        height={280}
        alt="Maintenance"
        className="w-[90%] mx-auto mt-4 sm:w-[75%] h-full object-contain md:mt-0 md:w-1/2 md:h-[70vh]"
      />

      <div
        className="flex flex-col items-center gap-4 mb-4 sm:my-8 sm:gap-8 py-4 
    md:justify-between md:py-6 md:px-4 
    md:items-start md:text-left md:my-0 md:w-1/2 md:h-[70vh]"
      >
        <div
          className="text-center flex items-center gap-4 flex-col 
      md:text-left md:gap-6 w-full"
        >
          <h1 className="font-bold text-[#1c1c1c] text-[2rem] leading-9 sm:leading-14 sm:text-[3rem] md:text-[3.4rem] md:leading-16">
            Website is currently under maintenance
          </h1>

          <p className="text-lg text-[hsl(0,0%,40%)] sm:w-[65%] md:w-full md:text-[1.5rem]">
            <span className="mb-4 block">Sorry for the inconvenience!</span>
            We&apos;re performing routine maintenance to improve speed,
            accuracy, and overall experience. We&apos;ll return at{" "}
            <span className="text-[#1A2373]">2pm GMT.</span>
          </p>
        </div>

        <div
          className="mx-auto flex flex-col items-center gap-2 
      md:items-start md:mr-auto md:ml-0 md:mt-auto"
        >
          <p className="text-[#1C1C1C] text-sm font-normal md:text-[1rem]">
            Visit us on social:
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  );
};
