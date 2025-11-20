import React from "react";

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Decorative Ellipses */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[928px] h-[928px] opacity-50">
          <div className="absolute top-[48px] left-[256px] w-[928px] h-[928px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[125.33px] left-[333.33px] w-[773.33px] h-[773.33px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[202.67px] left-[410.67px] w-[618.67px] h-[618.67px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[280px] left-[488px] w-[464px] h-[464px] rounded-full border border-[#FFCCC3]"></div>
          <div className="absolute top-[357.33px] left-[565.33px] w-[309.33px] h-[309.33px] rounded-full border border-[#FFCCC3]"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-[130px]">
            {/* Left Content */}
            <div className="w-full lg:w-auto">
              <h1 className="font-bold text-[64px] leading-[80px] text-[#FF5A3D] mb-10">
                About Us
              </h1>
              {/* "Our Mission" section will go here in the next step */}
            </div>

            {/* Right Content (Images) will go here in a future step */}
            <div className="w-full lg:w-auto">
              {/* Placeholder for images */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
