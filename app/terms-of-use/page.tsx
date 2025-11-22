import BulletListItem from "@/components/ui/bullet-list-item";
import React from "react";

const TermsOfUsePage = () => {
  return (
    <div className="bg-white text-[#1C1C1C] font-normal font-['Rethink_Sans']">
      <main className="mx-auto max-w-full px-4 md:px-8 lg:px-20">
        <div className="mx-auto max-w-[1242px] py-10 lg:py-20">
          <header className="mb-10 text-center">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-[#676767] md:text-base lg:text-lg">
              Last updated November 19, 2025
            </p>
          </header>

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

            {/* Acceptance of Terms Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                Acceptance of Terms
              </h2>
              <p className="mt-4 text-sm font-medium text-[#1C1C1C] md:text-base lg:text-xl lg:font-normal">
                By using Sitelytics, you confirm that:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>
                  You have read and understood these Terms
                </BulletListItem>
                <BulletListItem>
                  Accept and agree to follow all rules, policies, and guidelines
                  described here
                </BulletListItem>
                <BulletListItem>
                  Understand that Sitelytics may update these Terms from time to
                  time
                </BulletListItem>
                <BulletListItem>
                  Agree to any changes once you continue using the Service after
                  updates
                </BulletListItem>
              </div>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                If you create an account or use Sitelytics on behalf of a
                business or organization, you confirm that you are authorized to
                accept these Terms on their behalf.
              </p>
            </section>

            {/* Use of the Service Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                Use of the Service
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                By using Sitelytics, you agree to use the platform only for
                lawful purposes and in a manner that does not violate the rights
                of others or interfere with the operation of the service. You
                may run unlimited free website audits without restrictions.
                However, certain actions such as requesting assistance from a
                Sitelytics expert or professional may require a small service
                fee, which will be clearly communicated before you proceed.
              </p>
              <p className="mt-4 text-sm text-[#1C1C1C] md:text-base lg:text-xl">
                You agree not to:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>
                  Use the platform to engage in fraudulent, misleading, or
                  harmful activities
                </BulletListItem>
                <BulletListItem>
                  Attempt to bypass or interfere with any security or audit
                  mechanisms
                </BulletListItem>
                <BulletListItem>
                  Scrape, copy, or reverse-engineer the platform or its
                  underlying technology
                </BulletListItem>
                <BulletListItem>
                  Exploit the service in ways that violate these Terms or
                  applicable laws
                </BulletListItem>
                <BulletListItem>
                  Upload harmful software or scripts
                </BulletListItem>
                <BulletListItem>
                  Use Sitelytics to analyze websites you do not own or manage
                </BulletListItem>
                <BulletListItem>
                  Misuse expert communication channels
                </BulletListItem>
                <BulletListItem>
                  Attempt to bypass any security or audit-limit features
                </BulletListItem>
              </div>
            </section>

            {/* 3.1 Disclaimer on Audit Accuracy (AS-IS) Section */}
            <section>
              <h2 className="text-xl font-semibold text-[#1A2373] md:text-lg md:font-medium lg:text-2xl lg:font-semibold">
                3.1 Disclaimer on Audit Accuracy (AS-IS)
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                The Audit results are generated by an automated system and are
                provided for informational purposes only. Sitelytics makes no
                guarantee or warranty regarding the accuracy, completeness, or
                suitability of the Audit results. You acknowledge that reliance
                on the Audit results is strictly at your own risk. The Audit is
                not a substitute for professional consultation.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;
