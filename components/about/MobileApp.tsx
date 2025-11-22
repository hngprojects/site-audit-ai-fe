import React from "react";
import Image from "next/image";

const MobileApp = () => {
  return (
    <section className="bg-[#FFF9F8] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Image section */}
          <div className="relative w-[668px] h-[489px]">
            {/* Ellipse 28 */}
            <div
              className="absolute bg-[#FFEFEC] rounded-full"
              style={{
                width: "215px",
                height: "215px",
                left: "307px",
                top: "44px",
              }}
            ></div>
            {/* Ellipse 29 */}
            <div
              className="absolute bg-[#FFEFEC]"
              style={{
                width: "315px",
                height: "109px",
                left: "107px",
                top: "380px",
                borderRadius: "9999px", // Explicitly set border-radius for a perfect ellipse
              }}
            ></div>
            {/* Image 1 */}
            <Image
              src="/assets/images/about/mobile-app-1.png"
              alt="Mobile App Screenshot 1"
              width={215}
              height={443}
              className="absolute z-10"
              style={{ left: "433px", top: "37px" }}
            />
            {/* Image 2 */}
            <Image
              src="/assets/images/about/mobile-app-2.png"
              alt="Mobile App Screenshot 2"
              width={379}
              height={480}
              className="absolute z-10"
              style={{ left: "80px", top: "0px" }}
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#1C1C1C] leading-tight">
              A Mobile App that fixes all your website issues
            </h2>
            <p className="text-lg text-[#494949] text-justify">
              We know most business owners are not tech experts, and they do not
              have to be. Your website is your digital storefront, and when it
              is not performing, you lose customers.
            </p>
            <p className="text-lg text-[#494949] text-justify">
              That is why we created a mobile app that uses powerful AI to scan
              your website in seconds, break down issues in simple language, and
              show you exactly how to fix them.
            </p>
            <button className="bg-[#FF5A3D] text-white font-medium py-3 px-6 rounded-xl">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
