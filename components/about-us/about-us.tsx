import React from "react";
import Image from "next/image";

const AboutUsHeroMissionSection = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[928px] h-[928px] opacity-50 hidden lg:block">
          <div className="absolute top-[48px] left-[256px] w-[928px] h-[928px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[125.33px] left-[333.33px] w-[773.33px] h-[773.33px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[202.67px] left-[410.67px] w-[618.67px] h-[618.67px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[280px] left-[488px] w-[464px] h-[464px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[357.33px] left-[565.33px] w-[309.33px] h-[309.33px] rounded-full border border-[#FFCCC3]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-[130px]">
            <div className="w-full lg:w-[473px] flex-shrink-0 order-1">
              <h1 className="font-bold text-3xl md:text-4xl lg:text-[64px] lg:leading-[80px] text-[#FF5A3D] mb-10 text-center lg:text-left">
                About Us
              </h1>

              <div className="flex flex-col items-center lg:items-start gap-5">
                <div className="flex flex-col items-center lg:items-start gap-px text-center lg:text-left">
                  <p className="font-semibold text-base md:text-lg lg:text-xl text-[#1C1C1C]">
                    Sitelytics was built with one mission
                  </p>
                  <p className="text-sm md:text-base lg:text-lg text-justify text-[#1C1C1C] lg:leading-[22px]">
                    To help small businesses succeed online without the stress,
                    cost, or confusion of traditional website audits. We know
                    most business owners are not tech experts, and they do not
                    have to be. Your website is your digital storefront, and
                    when it is not performing, you lose customers. That is why
                    we created a mobile app that uses powerful AI to scan your
                    website in seconds, break down issues in simple language,
                    and show you exactly how to fix them. And when you need
                    hands-on help, Sitelytics connects you to trusted
                    professionals who can handle everything for you, quickly,
                    affordably, and transparently. We believe every small
                    business deserves a website that works as hard as they do.
                    Sitelytics makes that possible.
                  </p>
                </div>
                <button className="bg-white text-[#FF5A3D] border border-[#FF5A3D] text-sm font-medium py-[14px] px-6 rounded-xl w-full lg:w-auto">
                  EXPLORE MORE
                </button>
              </div>
            </div>

            <div className="relative w-full max-w-[316px] h-[261px] md:max-w-[384px] md:h-[317px] lg:max-w-none lg:w-[646px] lg:h-[533px] order-2 mt-10 lg:mt-0">
              <div className="absolute w-[124.76px] h-[235.38px] md:w-[151.53px] md:h-[285.89px] lg:w-[254.77px] lg:h-[480.69px] left-[191.77px] md:left-[232.91px] lg:left-[391.62px] top-[18.35px] md:top-[22.28px] lg:top-[37.46px]">
                <Image
                  src="/assets/images/about-us/about-phone-1.png"
                  alt="Hand holding phone showing Site-Audit AI"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="absolute w-[193.07px] h-[248.27px] md:w-[234.49px] md:h-[301.54px] lg:w-[394.27px] lg:h-[507px] left-[11.32px] md:left-[13.74px] lg:left-[23.11px] top-0">
                <Image
                  src="/assets/images/about-us/about-phone-2.png"
                  alt="Hand holding phone showing Site-Audit AI"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHeroMissionSection;
