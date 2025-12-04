import React from "react";
import StepItem from "./StepItem";

const stepsData = [
  {
    title: "Enter your website URL",
    description:
      "Paste your website URL and let our AI scan every page for performance, SEO, accessibility, and design issues. Takes less than 60 seconds.",
    imageUrl: "/assets/images/how-it-works/step-1.png",
    isReversed: false,
  },
  {
    title: "Scan your website",
    description:
      "AI goes through your site the same way a real visitor does and search engines would. It checks your pages for speed issues, SEO problems, broken links, accessibility errors, everything that makes users drop off. You don’t have to do anything, just sit back, we’ll handle the heavy lifting.",
    imageUrl: "/assets/images/how-it-works/step-2.png",
    isReversed: false,
  },
  {
    title: "Get a detailed report",
    description:
      "When the scan is done, you’ll get a clean, easy-to-read report that shows exactly what's wrong, why it matters, and how it affects your growth, issues ranked by business impact.",
    imageUrl: "/assets/images/how-it-works/step-3.png",
    isReversed: false,
  },
  {
    title: "Get expert Help",
    description:
      "If you want, you can get matched with professionals who specialize in fixing your specific issues. Compare, review and delivery speed. No searching, no guessing, just a professional who knows exactly what your site needs.",
    imageUrl: "/assets/images/how-it-works/step-4.png",
    isReversed: false,
  },
];

const StepsSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1344px] mx-auto px-3 sm:px-8 md:px-12 2xl:px-0">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] lg:leading-[48px] font-bold text-[#1C1C1C]">
            Get started with Sitelytics in easy steps
          </h2>
          <p className="mt-4 text-base lg:text-lg text-[#676767]">
            Just follow the steps below to scan your site, uncover issues, and
            improve your performance.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-10 lg:gap-16">
          {stepsData.map((step, index) => (
            <StepItem
              key={index}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
              isReversed={step.isReversed}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
