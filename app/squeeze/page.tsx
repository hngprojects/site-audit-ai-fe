import VideoPlayer from "@/components/landing/video-player";
import { Hero } from "@/components/squeeze/hero";
import SignupComponent from "@/components/squeeze/signup-form";
import { SqueezeList } from "@/components/squeeze/squeeze-list";

const page = () => {
  return (
    <main
      className="font-sans p-4 max-w-[1440px] mx-auto 
  flex flex-col gap-8 items-center sm:px-8 md:w-[90%] md:mx-auto"
    >
      <Hero />
      <VideoPlayer src="/assets/videos/compressed ad video.mp4" />
      <SqueezeList />
      <SignupComponent />
    </main>
  );
};

export default page;
