import { howItWorksData } from "@/lib/how-it-works-data";
import Image from "next/image";

const HowITWorks = () => {
  return (
    <section
      id="how-it-works"
      //   need to change padding bottom after animation
      className="max-w-[1440px] flex items-center justify-center mx-auto font-sans px-5 lg:px-10 xl:px-20 pt-10 md:pt-15 lg:pt-20 pb-6 md:pb-20 lg:pb-[105px]"
    >
      <div className=" w-full mx-auto flex flex-col items-center gap-6 md:gap-16">
        <div className="flex flex-col gap-2 md:gap-4 text-center max-w-[754px]">
          <h2 className="text-2xl md:text-[40px] leading-7 md:leading-10 font-semibold ">
            How It Works
          </h2>
          <p className="text-sm md:text-lg leading-6 text-gray-500 font-normal">
            Understand how our AI audits your website, uncovers hidden problems,
            and helps you resolve them before they cost you traffic or revenue.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
          <div className="flex flex-col md:flex-row lg:flex-col gap-6">
            {howItWorksData.map((item) => (
              <EachStep
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="">
            <Image
              src="/assets/images/landing/phone-mockup.svg"
              alt="step-by-step"
              width={623}
              height={633}
              className="w-[275.3px] h-[279.7px] md:w-[349.3px] md:h-[354.9px] lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowITWorks;

const EachStep = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-4 p-6 rounded-[12px] bg-[#FCFCFC] w-full max-w-[550px] cursor-pointer">
      <p className="text-lg text-center lg:text-left leading-6 font-semibold text-[#979797]">
        Step {id}
      </p>
      <h3 className="text-lg lg:text-2xl text-center lg:text-left leading-6 lg:leading-8 font-semibold text-[#1C1C1C]">
        {title}
      </h3>
      <p className="text-sm lg:text-lg text-center lg:text-left leading-5 lg:leading-6 font-normal text-[#676767]">
        {description}
      </p>
    </div>
  );
};
