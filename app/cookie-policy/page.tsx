"use client";

import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="flex flex-col bg-white ">
      {/* Main Content */}
      <div className="max-w-[1344px] mx-auto w-full px-4 md:px-12 xl:px-0 py-10">
        {/* Page Title */}
        <div className="md:py-5 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[40px] xl:text-5xl font-bold text-gray-900 mb-3">
            Cookies Policy
          </h1>
          <p className="text-gray-600 text-[16px] md:text-lg max-w-2xl mx-auto">
            Effective Date: November 6,2025
          </p>
        </div>

        {/* Section 1: What Are Cookies */}
        <section className="mb-10">
          <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mb-4 pt-3 md:pt-0">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            Cookies are small text files stored on your device (computer,
            smartphone, or tablet) when you visit a website. They help websites
            remember your preferences, analyze usage, and improve your
            experience.
          </p>

          <div className=" rounded-lg">
            <h3 className="text-[20px] font-semibold text-[#080C15] mb-4">
              Types of Cookies We Use:
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-[#080C15]">Session Cookies:</strong>{" "}
                  Temporary cookies deleted when you close your browser
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-[#080C15]">
                    Persistent Cookies:
                  </strong>{" "}
                  Remain on your device until they expire or you delete them
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-[#080C15]">
                    First-Party Cookies:
                  </strong>{" "}
                  Set directly by Site/us
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold">•</span>
                <span className="text-gray-700">
                  <strong>Third-Party Cookies:</strong> Set by external services
                  (analytics, advertising)
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: Specific Cookies We Use */}
        <section className="mb-10">
          <h2 className="text-[20px] md:text-2xl font-bold text-[#080C15] mb-6">
            2. Specific Cookies We Use
          </h2>

          {/* 2.1 Essential Cookies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              2.1 Essential Cookies
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    sa_session
                  </code>{" "}
                  - Maintains your login session
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">sa_csrf</code>{" "}
                  - Protects against cross-site request forgery
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238]font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">sa_auth</code>{" "}
                  - Authenticates your account
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    sa_preferences
                  </code>{" "}
                  - Stores basic user preferences
                </span>
              </li>
            </ul>
          </div>

          {/* 2.2 Essential Cookies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              2.2 Essential Cookies
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">_ga</code> -
                  Google Analytics: Distinguishes users (24 hours)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">_gid</code> -
                  Google Analytics: Distinguishes users (24 hours)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">_gat</code> -
                  Manages request rate and feature usage
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">mde_*</code> -
                  Measures site behavior and feature usage
                </span>
              </li>
            </ul>
          </div>

          {/* 2.3 Advertising Cookies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              2.3 Advertising Cookies
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">fbp</code> -
                  Facebook Pixel: Tracks conversions from Facebook ads
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">
                    gpt_au_tag
                  </code>{" "}
                  - Google Ads: Tracks ad performance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <code className="bg-gray-100 px-2 py-1 rounded">li_ugid</code>{" "}
                  - LinkedIn Insight Tag: Tracks B2B conversions
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-[20px] md:text-2xl font-bold text-[#080C15] mb-6">
            3. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use the following third-party services that may set cookies.
          </p>

          {/* Analytics & Performance */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] p-4 md:p-0 rounded-lg mb-4">
              Analytics & Performance
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Google Analytics:</strong> Website traffic and usage
                  analysis
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Mixpanel:</strong> Product analytics and user behavior
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Hotjar:</strong> Heatmaps and session recordings (with
                  consent)
                </span>
              </li>
            </ul>
          </div>

          {/* Advertising & Marketing */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] p-3 rounded-lg mb-4">
              Advertising & Marketing
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Google Ads:</strong> Search and display advertising
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Facebook Ads:</strong> Social media advertising
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>LinkedIn Ads:</strong> B2B targeted advertising
                </span>
              </li>
            </ul>
          </div>

          {/* Support & Communication */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] p-3 rounded-lg mb-4">
              Support & Communication
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>Intercom:</strong> Customer support chat
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong>SendGrid:</strong> Email delivery and tracking
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Managing Your Cookie Preferences */}
        <section className="mb-10">
          <h2 className="text-[20px] md:text-2xl font-bold text-[#080C15] mb-6">
            4. Managing Your Cookie Preferences
          </h2>

          {/* 4.1 Cookie Consent Banner */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-lg font-semibold text-[#080C15] mb-4">
              4.1 Cookie Consent Banner
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you first visit our website, you&apos;ll see a cookie consent
              banner. You can:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Accept all cookies
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Reject non-essential cookies
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Customize your preferences by category
                </span>
              </li>
            </ul>
          </div>

          {/* 4.2 Browser Settings */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-lg font-semibold text-[#080C15] mb-4">
              4.2 Browser Settings
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most browsers allow you to control cookies through settings.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">Chrome:</strong> Settings ›
                  Privacy & Security › Cookies
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">Firefox:</strong> Settings
                  › Privacy & Security › Cookies and Site Data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">Safari:</strong>{" "}
                  Preferences › Privacy › Cookies and website data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">Edge:</strong> Settings ›
                  Cookies and site permissions
                </span>
              </li>
            </ul>
          </div>

          {/* 4.3 Mobile App Settings */}
          <div className="mb-8">
            <h3 className="text-[20px] text-lg font-semibold text-[#080C15] mb-4">
              4.3 Mobile App Settings
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              For mobile apps:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">iOS Settings:</strong>{" "}
                  Privacy › Tracking (disable &qouts;Allow Apps to Request to
                  Track&quots;)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">Android Settings:</strong>{" "}
                  Google › Ads › Opt out of Ads Personalization
                </span>
              </li>
            </ul>
          </div>

          {/* 4.4 Opt-Out Tools */}
          <div className="mb-8">
            <h3 className="text-[20px] md:text-lg font-semibold text-[#080C15] mb-4">
              4.4 Opt-Out Tools
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">
                    Google Analytics Opt-Out:
                  </strong>{" "}
                  Browser Add-on
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">NAI Opt-Out:</strong>{" "}
                  Network Advertising Initiative
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  <strong className="text-[#080C15]">DAA Opt-Out:</strong>{" "}
                  Digital Advertising Alliance
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Do Not Track */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            5. Do Not Track (DNT)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Some browsers have a &quot;Do Not Track&quot; feature that signals
            you don&apos;t want to be tracked. Currently, there&apos;s no
            industry standard for how to respond to DNT signals, but you can use
            our cookie consent tools to manage your preferences.
          </p>
        </section>

        {/* Section 6: Updates to This Cookie Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            6. Updates to This Cookie Policy
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Cookie Policy to reflect changes in technology,
            law or our practices. We&apos;ll notify you of material changes by:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Updating the &quot;Last Updated&quot; date
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Displaying a notice on our website
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Sending an email notification (for significant changes)
              </span>
            </li>
          </ul>
        </section>

        {/* Section 7: Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            5. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about our use of cookies, please click on{" "}
            <Link
              href="/contact"
              className="text-[#E85238] font-medium hover:underline"
            >
              CONTACT US
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
