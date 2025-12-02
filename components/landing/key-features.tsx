import KeyFeaturesDisplay from "./key-features-display";

const KeyFeatures = () => {
  return (
    <section
      id="key-features"
      className="max-w-[1440px] flex items-center justify-center mx-auto font-sans px-3 sm:px-8 md:px-12 pt-10 md:pt-15 lg:pt-20 pb-6 md:pb-20 lg:pb-[105px]"
    >
      <div className=" w-full mx-auto flex flex-col items-center gap-6 lg:gap-16">
        <div className="flex flex-col gap-2 md:gap-4 text-center">
          <h2 className="text-2xl md:text-[32px] lg:text-[40px] leading-7 md:leading-10 font-sans font-semibold ">
            <span className="text-[#1A2373]">Key</span> Features
          </h2>
          <p className="text-sm md:text-lg leading-6 text-gray-500 font-sans">
            Increase visitors, engagement and conversion with our full audit
            suite
          </p>
        </div>
        <KeyFeaturesDisplay />
      </div>
    </section>
  );
};

export default KeyFeatures;
