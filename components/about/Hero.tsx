import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#FEFFFF] py-13.5 md:py-6.5 lg:py-5">
      <div className="container mx-auto px-4 md:px-10 lg:px-15">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-128.75 space-y-4 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative w-fit">
              <Image
                src="/assets/images/about/about-us-title-and-vector.png"
                alt="About us"
                width={137}
                height={28}
                className="w-25 md:w-34.25 lg:w-38.25 h-auto"
              />
            </div>

            <h1 className="text-2xl md:text-[35px] lg:text-5xl font-bold text-[#1C1C1C] leading-tight">
              Sitelytics was built with{" "}
              <span
                className="text-[#FF5A3D] underline"
                style={{
                  textDecorationThickness: "1px",
                  textUnderlineOffset: "2px",
                }}
              >
                one mission:
              </span>{" "}
              to help small businesses succeed online
            </h1>

            <p className="text-sm md:text-lg lg:text-xl text-[#494949] text-center lg:text-justify">
              Without the stress, cost, or confusion of traditional website
              audits. We believe{" "}
              <span
                style={{
                  backgroundColor: "rgba(252, 82, 35, 0.1)",
                  borderRadius: "0.3125rem",
                  padding: "0.125rem 0.25rem",
                }}
              >
                your online success
              </span>{" "}
              should be simple, powerful and accessible.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center sm:w-full">
            <Image
              src="/assets/images/about/hero.jpg"
              alt="People working in an office"
              width={306}
              height={204}
              className="sm:w-full md:h-108.5 lg:h-108.25 rounded-xl border-[0.375rem] border-[#FFEFEC] md:w-162.75 lg:w-162.25"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
