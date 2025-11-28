import Image from "next/image";

export const Hero = () => {
  return (
    <div className="my-4 flex flex-col gap-8 items-center sm:flex-row">
      <div className="flex flex-col gap-4 sm:w-3/4 md:w-[65%]">
        <h1 className="text-2xl font-semibold sm:text-4xl sm:leading-12 md:text-6xl md:leading-17 md:font-bold">
          <span className="text-[#1A2373]">Scan</span> your website in second,{" "}
          <span className="text-[#1A2373]">Fix</span> what&apos;s holding you
          back
        </h1>
        <p className="text-[#494949] text-lg leading-6 md:text-2xl md:leading-8">
          Unlock a free AI-powered audit that reveals errors, performance
          issues, and quick wins to boost your site instantly.
        </p>
      </div>

      <Image
        src="/assets/images/squeeze/hero.svg"
        width={280}
        height={280}
        alt="Hero Image"
        className="w-[90%] mx-auto mt-4 sm:w-1/4 h-full sm:scale-120 md:scale-100 object-contain md:w-[35%] md:mt-0 md:h-[60vh]"
      />
    </div>
  );
};
