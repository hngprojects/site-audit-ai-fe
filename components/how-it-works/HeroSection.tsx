import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className="max-w-[1344px] mx-auto w-full bg-white xl:min-h-[650px] relative bg-right bg-no-repeat
           lg:bg-[url('/assets/images/how-it-works/how-it-works-hero-complete.png')]
           lg:bg-size-[50%_auto] xl:bg-contain"
      style={{
        backgroundPosition: "right center",
      }}
    >
      <div className="mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12  sm:px-8 md:px-12 py-12 lg:py-24 max-w-[1344px]">
        {/* Text Content */}
        <div className="px-4 sm:px-0 w-full lg:w-[620px] lg:h-[450px] flex flex-col items-start text-left gap-10">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h1
              className="font-sans font-bold text-[#1C1C1C] mt-8
                           text-[32px] leading-[38px] md:text-5xl 
                           lg:text-[64px] lg:leading-[80px] "
            >
              Boost Your Website With A Simple Guided AI Audit
            </h1>
            <p
              className="font-sans font-normal text-[#676767] 
                          text-base leading-5 md:text-xl md:leading-6
                          lg:text-[24px] lg:leading-[30px] lg:w-[620px] "
            >
              Understand how our AI audits your website, uncovers hidden
              problems, and helps you resolve them before they cost you traffic
              or revenue.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-[#FF5A3D] hover:bg-[#E85238] text-white
                       w-full h-14 px-6 py-4 rounded-[10.725px] mt-2
                       md:w-[155px] md:mx-auto lg:w-[155px] lg:mx-0 lg:h-14 font-sans font-medium text-base leading-tight"
          >
            <a href="https://play.google.com/store/apps/details?id=com.tokugawa.sitelytics">
              Get the App
            </a>
          </Button>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full">
          {/* Mobile Image */}
          <div className="relative w-full h-[339px] sm:hidden">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-mobile.png"
              alt="How it works illustration (Mobile)"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Tablet Image */}
          <div className="relative w-full h-[414px] hidden sm:block lg:hidden">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-tablet.png"
              alt="How it works illustration (Tablet)"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
