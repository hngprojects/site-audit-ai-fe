import Link from "next/link";
import VideoPlayer from "./video-player";
// import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[1344px] px-4 md:px-12 2xl:px-0 mx-auto font-sans pt-16 pb-[27px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-10">
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 max-w-[632px] w-full lg:w-auto text-center lg:text-left">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-[64px] font-bold leading-tight lg:leading-20">
              <span className="text-[rgb(26,35,115)]">Improve</span> Your
              Website With An Instant AI Audit
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
        <VideoPlayer />
      </div>
    </section>
  );
};

export default Hero;
