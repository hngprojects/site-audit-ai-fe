import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-8 md:px-12 py-12 lg:py-24 max-h-[699px] max-w-[1440px]">
        {/* Text Content */}
        <div className="w-full lg:w-[620px] lg:h-[450px] flex flex-col items-start text-left gap-10">
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
                       w-full h-[56px] px-6 py-4 rounded-[10.725px] mt-2
                       md:w-[155px] md:mx-auto lg:w-[155px] lg:mx-0 lg:h-[56px] font-sans font-medium text-base leading-tight"
          >
            <a href="https://play.google.com/apps/test/RQDSjy_qH8w/ahAO29uNQV0s404Mz1WU1MPt9H2RT0HwXJtCELtPGNC_LHvAnQBRgrGqd0JIzeDQoW6ljvmU7v1UVTOAsTaSJQ3gyi">
              Get the App
            </a>
          </Button>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full">
          {/* Mobile Image */}
          <div className="relative w-full h-[339px] md:hidden">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-mobile.png"
              alt="How it works illustration (Mobile)"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Tablet Image */}
          <div className="relative w-full h-[414px] hidden md:block lg:hidden">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-tablet.png"
              alt="How it works illustration (Tablet)"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Desktop Image */}
          <div className="relative w-full lg:w-[636px] h-[688px] top-6 hidden lg:block">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-complete.png"
              alt="How it works illustration (Desktop)"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
