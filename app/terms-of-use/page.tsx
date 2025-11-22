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
                1. Introduction
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Welcome to Sitelytics (“Company”, “we”, “our”, “us”).
              </p>

              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Sitelytics is a website and mobile application that provides
                automated website audits, performance insights, and optional
                expert assistance to help users understand and improve their
                website’s effectiveness.
              </p>

              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                By accessing or using the Sitelytics Website or App, you agree
                to be bound by these Terms of Service (“Terms”). If you do not
                agree with these Terms, you must discontinue use of the Service.
              </p>
            </section>

            {/* Acceptance of Terms Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                2. Acceptance of Terms
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
                3. Use of the Service
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

            {/* User Obligations and Authorization Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                User Obligations and Authorization
              </h2>

              {/* 4.1 Website Authority (Crucial Clause) */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1A2373] md:text-lg md:font-semibold lg:text-xl">
                  4.1 Website Authority (Crucial Clause)
                </h3>
                <p className="mt-2 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                  By submitting a website URL for an Audit, you represent and
                  warrant that you are the legal owner of the website or that
                  you have been explicitly authorized by the legal owner to
                  perform the technical audit and scanning activities conducted
                  by Sitelytics.
                </p>
              </div>

              {/* 4.2 Service Providers */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1A2373] md:text-lg md:font-semibold lg:text-xl">
                  4.2 Service Providers
                </h3>
                <p className="mt-2 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                  You agree to indemnify, defend, and hold harmless Sitelytics,
                  its employees, and affiliates from any claim, liability, or
                  damages (including legal fees) arising from any third-party
                  claim that your use of the Service, including the scanning of
                  a website you did not own or were not authorized to scan,
                  violates any law or third-party rights.
                </p>
              </div>
            </section>

            {/* The Expert/Pro Services Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                The Expert/Pro Services
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Sitelytics allows all users to:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>
                  Run unlimited website audits at no cost
                </BulletListItem>
                <BulletListItem>Export audit reports</BulletListItem>
                <BulletListItem>
                  Re-audit the same website multiple times after making changes
                </BulletListItem>
              </div>

              {/* 5.1 Engagement */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1A2373] md:text-lg md:font-medium lg:text-xl">
                  5.1 Engagement
                </h3>
                <p className="mt-2 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                  Sitelytics offers paid, one-on-one consultation and
                  implementation services (&quot;Expert Services&quot;) by
                  Sitelytics employees (&quot;Experts&quot;) to fix issues
                  identified in the Audit. The Expert Services are the only paid
                  feature of Sitelytics.
                </p>
                <p className="mt-4 text-sm font-normal text-[#1C1C1C] md:text-base lg:text-xl">
                  Important detail:
                </p>
                <div className="mt-2">
                  <BulletListItem>
                    Expert communication occurs through email or other approved
                    channels
                  </BulletListItem>
                </div>
              </div>

              {/* 5.2 Payment and Fees */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1A2373] md:text-lg md:font-medium lg:text-xl">
                  5.2 Payment and Fees
                </h3>
                <p className="mt-2 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                  Expert Services require payment of a fee, which will be
                  clearly disclosed to you before the commencement of any work.
                  You agree to pay all fees and charges associated with the
                  Expert Services you select.
                </p>
              </div>

              {/* 5.3 NO WARRANTY, REFUND, OR CANCELLATION POLICY */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[#1A2373] md:text-lg md:font-medium lg:text-xl">
                  5.3 NO WARRANTY, REFUND, OR CANCELLATION POLICY
                </h3>
                <p className="mt-2 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7 font-bold">
                  YOU ACKNOWLEDGE AND AGREE THAT THE EXPERT SERVICES ARE
                  PROVIDED ON A STRICTLY NON-REFUNDABLE AND NO-WARRANTY BASIS.
                </p>
                <div className="mt-4 space-y-2">
                  <BulletListItem>
                    <span className="font-bold">No Warranty:</span> Sitelytics
                    makes no warranties or guarantees, express or implied,
                    regarding the outcome, effectiveness, or duration of any
                    fixes or changes implemented by the Expert Services.
                  </BulletListItem>
                  <BulletListItem>
                    <span className="font-bold">No Refund:</span> Once payment
                    has been processed for the Expert Services, all fees are
                    non-refundable, regardless of whether you are satisfied with
                    the results or the amount of work completed.
                  </BulletListItem>
                  <BulletListItem>
                    <span className="font-bold">No Cancellation:</span> You
                    cannot cancel the Expert Services after payment has been
                    made.
                  </BulletListItem>
                </div>
                <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                  You, as a non-technical user, understand and accept this
                  limitation of service, and acknowledge that the Expert
                  Services are customized consultation and implementation
                  efforts.
                </p>
              </div>
            </section>

            {/* 6. User Accounts & Authentication Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                6. User Accounts & Authentication
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Some features may require you to create an account using:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>Email Address</BulletListItem>
                <BulletListItem>Google Login</BulletListItem>
                <BulletListItem>Apple Login</BulletListItem>
              </div>

              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                You Agree to:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>
                  Keep your login information secure
                </BulletListItem>
                <BulletListItem>
                  Notify us immediately if you suspect unauthorized access
                </BulletListItem>
                <BulletListItem>
                  Not share your account with anyone
                </BulletListItem>
              </div>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                Sitelytics is not responsible for any loss resulting from
                unauthorized account access caused by your negligence.
              </p>
            </section>

            {/* 7. Intellectual Property Rights Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                7. Intellectual Property Rights
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                All software, reports (excluding your website content), text,
                graphics, logos, and features (including the Site Audit
                methodology) are the property of Sitelytics and are protected by
                intellectual property laws.
              </p>
              <p className="mt-4 text-sm text-[#1C1C1C] md:text-base lg:text-xl">
                Users are allowed to:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>Use the app</BulletListItem>
                <BulletListItem>View and export audit results</BulletListItem>
              </div>

              <p className="mt-4 text-sm text-[#1C1C1C] md:text-base lg:text-xl">
                Users are not allowed to:
              </p>
              <div className="mt-4 space-y-2">
                <BulletListItem>Copy or modify our software</BulletListItem>
                <BulletListItem>
                  Resell audit results as a service
                </BulletListItem>
                <BulletListItem>
                  Reproduce Sitelytics’ content for commercial use
                </BulletListItem>
              </div>
            </section>

            {/* 8. Limitation of Liability Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                8. Limitation of Liability
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, SITELYTICS
                SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS
                OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
                FROM: (A) YOUR USE OF THE FREE AUDIT SERVICE OR RELIANCE ON THE
                AUDIT RESULTS; OR (B) YOUR USE OF THE PAID EXPERT SERVICES,
                INCLUDING ANY FAILURE OF THE FIXES TO YIELD DESIRED RESULTS.
                <br />
                IN NO EVENT SHALL THE TOTAL AGGREGATE LIABILITY OF SITELYTICS
                FOR ALL CLAIMS RELATING TO THE SERVICE EXCEED THE AMOUNT YOU
                PAID TO SITELYTICS FOR THE EXPERT SERVICES IN THE TWELVE (12)
                MONTHS PRECEDING THE CLAIM, OR $100.00 USD, WHICHEVER IS LESS.
              </p>
            </section>

            {/* 9. Governing Law and Dispute Resolution Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                9. Governing Law and Dispute Resolution
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of Oregon, United States, without
                regard to its conflict of law principles.
              </p>
            </section>

            {/* 10. Contact Us Section */}
            <section>
              <h2 className="text-xl font-bold text-[#1C1C1C] md:text-lg lg:text-2xl">
                10. Contact Us
              </h2>
              <p className="mt-4 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
                If you have questions about this Privacy Policy or your data,
                contact: <br />
                Sitelytics Support <br />
                Email: support@sitelytics.ai
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUsePage;
