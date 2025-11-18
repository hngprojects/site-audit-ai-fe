// hero component for the landing page

import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto font-sans">
      <div className="px-20 flex items-center gap-5">
        <div className="flex flex-col gap-10  max-w-[632px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[64px] font-bold leading-20">
              Improve Your Website With An Instant AI Audit
            </h1>
            <p className="text-2xl text-gray-500 font-normal leading-8">
              Paste your website URL and get a complete free website audit in
              seconds that instantly identifies performance, accessibility, SEO,
              and design problems, then connects you with verified professionals
              to fix them fast.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/assets/images/hero/g-playstore.svg"
                alt="Google Play Store"
                width={100}
                height={100}
                className="w-[160px] h-auto"
                // style={{ objectFit: "contain" }}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/images/hero/a-appstore.svg"
                alt="App Store"
                width={100}
                height={100}
                className="w-[160px] h-auto"
                // style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 items-center space-x-3 ">
              <div className="flex flex-col gap-1 items-center">
                <h1 className="text-[28px] font-bold leading-8">8K +</h1>
                <p className="text-base font-normal leading-6 text-gray-500">
                  Active testers
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1 items-center">
                <h1 className="text-[28px] font-bold leading-8">10K +</h1>
                <p className="text-base font-normal leading-6 text-gray-500">
                  Downloads
                </p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-1 items-center">
                <h1 className="text-[28px] font-bold leading-8">12K +</h1>
                <p className="text-base font-normal leading-6 text-gray-500">
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/assets/images/hero/hero-image.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-[606px] h-[630px]"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
