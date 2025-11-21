import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[1344px] px-4 md:px-12 2xl:px-0 mx-auto font-sans">
      <div className="px-4  md:px-0 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-5">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[632px] w-full lg:w-auto text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-[64px] font-bold leading-tight lg:leading-20">
              <span className="text-[#1A2373]">Improve</span> Your Website With
              An Instant AI Audit
            </h1>
            <p className="text-base md:text-lg lg:text-2xl text-gray-500 font-normal leading-6 md:leading-7 lg:leading-8">
              Paste your site URL and get a quick, free audit that shows
              what&apos;s working, what&apos;s not, and connects you with
              experts who can fix it.
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-4 w-full">
            <Link
              href="/waitlist"
              className="bg-[#FF5A3D] hover:bg-[#FF5A3D]/90 py-3 px-7 text-white rounded-xl w-full lg:w-auto text-center"
            >
              Join waitlist
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <Image
            src="/assets/images/hero/hero-image.svg"
            alt="Hero Image"
            width={500}
            height={600}
            className="w-full max-w-[606px] h-auto lg:w-full lg:h-auto"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
