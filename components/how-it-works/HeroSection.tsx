import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 py-12 lg:py-24 max-w-[1440px]">
        {/* Text Content */}
        <div className="lg:w-[620px] flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            <h1
              className="font-sans font-bold text-[#1C1C1C] mt-8
                           text-[32px] leading-[38px] md:text-5xl lg:text-[64px] lg:leading-[76px]"
            >
              Boost Your Website With A Simple Guided AI Audit
            </h1>
            <p
              className="font-sans font-normal text-[#676767] 
                          text-[16px] leading-[20px] lg:text-[25px] lg:leading-[30px]"
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
                       md:w-[342.71px] lg:w-[155px] font-sans font-medium text-base leading-tight"
          >
            <a href="https://drive.google.com/drive/u/2/folders/1O40Rnk4bMHYN9vEcyQYzrnNaUgO3m-zs?usp=drive_link">
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
          <div className="relative w-full h-[688px] hidden lg:block">
            <Image
              src="/assets/images/how-it-works/how-it-works-hero-complete.png"
              alt="How it works illustration (Desktop)"
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
