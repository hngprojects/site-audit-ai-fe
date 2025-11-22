import React from "react";

const TermsOfUsePage = () => {
  return (
    <div className="bg-white text-[#1C1C1C] font-normal font-['Rethink_Sans']">
      <main className="mx-auto max-w-full px-4 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1242px] py-10 lg:py-20">
          {/* Page Header */}
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-[#676767] md:text-base lg:text-lg">
              Last updated November 19, 2025
            </p>
          </header>

          {/* Page Content */}
          <div className="space-y-10">
            {/* Introduction Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                Introduction
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Welcome to Sitelytics (“Company”, “we”, “our”, “us”). Sitelytics
                is a website and mobile application that provides automated
                website audits, performance insights, and optional expert
                assistance to help users understand and improve their website’s
                effectiveness. By accessing or using the Sitelytics Website or
                App, you agree to be bound by these Terms of Service (“Terms”).
                If you do not agree with these Terms, you must discontinue use
                of the Service.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;
