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
            <section>{/* Content will go here */}</section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;
