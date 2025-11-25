import { landingBuiltforData } from "@/lib/landing-built-for-data";
import BuiltForCard from "./built-for-card";
import Image from "next/image";
const BuiltFor = () => {
  const column1 = landingBuiltforData.slice(0, 2);
  const column2 = landingBuiltforData.slice(2, 3);
  const column3 = landingBuiltforData.slice(3, 5);
  return (
    <section className="max-w-[1344px] mx-auto pt-10 md:pt-20 pb-6 md:pb-25 px-4 md:px-12 2xl:px-0 relative min-h-screen font-sans">
      <div className=" mx-auto flex flex-col items-center justify-center gap-4 md:gap-10 px-0  ">
        <div className="flex flex-col gap-2 md:gap-4 items-center text-center">
          <h2 className="text-2xl md:text-[40px] leading-10 font-semibold ">
            Why Choose <span className="text-[#1A2373]">Sitelytics</span>
          </h2>
          <p className="text-sm md:text-lg leading-6 max-w-sm md:max-w-sm lg:max-w-3xl text-gray-500 font-normal">
            No technical skills required—Sitelytics gives beginners,
            freelancers, and professionals the clarity they need to improve
            website performance.
          </p>
        </div>
        <div className="h-[316px] bg-[#FFEFEC] rounded-2xl flex lg:hidden w-full  ">
          <Image
            src="/assets/images/landing/iPhone14-Pro-Max.png"
            alt="Decorative Background"
            width={300}
            height={300}
            className="w-full sm:w-[400px] h-auto mx-auto overflow-clip"
          />
        </div>

        <div className="w-full mx-auto flex flex-col lg:flex-row justify-center gap-6 lg:gap-8  ">
          {/* Column 1 */}

          <div className="max-w-sm mx-auto flex-1 flex flex-col gap-6 lg:gap-10 px-4 md:px-0">
            {column1.map((item) => (
              <BuiltForCard key={item.id} {...item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="max-w-sm mx-auto flex-1 flex flex-col  lg:gap-10 px-4 md:px-0">
            {/* Empty space for first box */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-10">
              {/* Empty space for first box */}
              <div className="flex-1 flex flex-col gap-6 lg:gap-10">
                {/* Box with padding - Fixed version */}
                <div className="h-[316px] bg-[#FFEFEC] rounded-2xl lg:flex hidden md:w-full">
                  <Image
                    src="/assets/images/landing/iPhone14-Pro-Max.png"
                    alt="Decorative Background"
                    width={400}
                    height={400}
                    className="w-[400px] h-auto mx-auto overflow-clip"
                  />
                </div>
              </div>
            </div>

            {column2.map((item) => (
              <BuiltForCard key={item.id} {...item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className=" mx-auto  max-w-sm lg:flex-1 flex flex-col gap-6 lg:gap-10 px-4 md:px-0">
            {column3.map((item) => (
              <BuiltForCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltFor;
