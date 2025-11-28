import VideoPlayer from "@/components/landing/video-player";
import SignupComponent from "@/components/squeeze/signup-form";
import Image from "next/image";

const page = () => {
  const list = [
    {
      image: "/assets/images/squeeze/icon.svg",
      title: "Spot Issues Instantly",
      description:
        "Get a clear breakdown of errors slowing your site down, delivered in seconds.",
    },
    {
      image: "/assets/images/squeeze/icon.svg",
      title: "Improve Your Site’s Performance Fast",
      description:
        "See quick-win suggestions that boost speed, SEO, and user experience immediately.",
    },
    {
      image: "/assets/images/squeeze/icon.svg",
      title: "Understand What’s Wrong",
      description:
        "Your audit comes in simple language anyone can understand — no developer needed.",
    },
  ];
  return (
    <main
      className="font-sans p-4 max-w-[1440px] mx-auto 
  flex flex-col gap-8 items-center sm:px-8 md:w-[90%] md:mx-auto"
    >
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

      <VideoPlayer src="/assets/videos/compressed ad video.mp4" />

      <div className="my-4 flex flex-col gap-4 md:flex-row md:gap-8">
        {list.map(({ image, title, description }) => (
          <div
            key={title}
            className="border border-gray-100 rounded-2xl p-8 flex flex-col text-center gap-4 items-center sm:max-w-[55%] sm:mx-auto"
          >
            <span className="bg-[#EFEFF1] rounded-full p-3">
              <Image src={image} alt={title} width={25} height={25} />
            </span>

            <h3 className="text-[#1A2373] font-semibold">{title}</h3>
            <p className="text-[#494949] text-sm leading-5">{description}</p>
          </div>
        ))}
      </div>

      <SignupComponent />
    </main>
  );
};

export default page;
