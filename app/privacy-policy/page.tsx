"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-[1344px] mx-auto w-full px-4 md:px-12 xl:px-0 py-10">
        {/* Page Title */}
        <div className="md:py-5 text-center">
          <h1 className="text-[32px] md:text-[40px] xl:text-5xl font-bold text-[#080C15] mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-[16px] md:text-lg max-w-2xl mx-auto">
            Last Updated: November 2025
          </p>
          <p className="text-gray-600 text-[16px] md:text-lg  mx-auto mt-4 md:text-start">
            Sitelytics is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website, use our mobile app, or
            interact with our services.
          </p>
        </div>
        {/* Section 1: Information We Collect */}
        <section className="my-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This section explains what data we gather from you and why.
          </p>

          {/* 1.1 Personal Information */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              1.1 Personal Information
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you use our services or join our website, we may collect:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Name</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Email address</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Website URL</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Business name (optional)
                </span>
              </li>
            </ul>
          </div>

          {/* 1.2 Automatic Collected Data */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              1.2 Automatic Collected Data
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We automatically collect:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Device information
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Browser type</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">IP address</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Pages viewed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Click activity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Diagnostic and performance data
                </span>
              </li>
            </ul>
          </div>

          {/* 1.3 Website Audit Data */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              1.3 Website Audit Data
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you use Sitelytics to run a site audit, we collect:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Website performance metrics
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">SEO metadata</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Accessibility data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Page load speed</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Detected issues (e.g. broken links, slow images)
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              This information is used only to provide website audit.
            </p>
          </div>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Sitelytics uses your information to:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Provide website audits and improvement suggestions
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Help you connect with Sitelytics experts (required)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Improve our AI models and platform performance
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Send updates, recommendations, and service notifications
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Improve user experience and app functionality
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Maintain security and prevent misuse
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            We never sell your personal information.
          </p>
        </section>

        {/* Section 3: How We Share Your Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We may share your information only in the following cases:
          </p>

          {/* 3.1 Sitelytics Experts */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              3.1 Sitelytics Experts
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If you request professional help, we may share:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Your name</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Email</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Website URL</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Summary of your site&apos;s issues
                </span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Only with a certified expert assigned to your task.
            </p>
          </div>

          {/* 3.2 Service Providers */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              3.2 Service Providers
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We may work with third-party tools that help us:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Host the websites</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">
                  Analyze performance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Send emails</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#E85238] font-bold text-sm">•</span>
                <span className="text-gray-700 text-sm">Secure user data</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4 leading-relaxed">
              These providers follow strict confidentiality rules.
            </p>
          </div>

          {/* 3.3 Legal Requirements */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#1A2373] mb-4">
              3.3 Legal Requirements
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may disclose information if required by law, government
              authorities, or to protect our rights.
            </p>
          </div>
        </section>

        {/* Section 4: Cookies and Tracking Technology */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            4. Cookies and Tracking Technology
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Sitelytics uses cookies and similar tracking technologies to:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Understand user behavior
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Improve performance</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Enable analytics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Personalize your experience
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            You may disable cookies through your browser settings.
          </p>
        </section>

        {/* Section 5: Data Protection & Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            5. Data Protection & Security
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We use industry-standard security measures to protect your
            information, including:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Encrypted data transmission
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Secure storage</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Access limitation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Confirmation monitoring
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            However, no system can guarantee 100% security.
          </p>
        </section>

        {/* Section 6: Your Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Depending on your region (UK, Canada, EU, or others), you may have
            the right to:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Access your data</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">Request deletion</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Correct inaccurate information
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Opt out of marketing
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Contact inaccurate information
              </span>
            </li>
          </ul>
          <p className="text-gray-700 mt-6 leading-relaxed">
            To request any of these, contact:{" "}
            <a
              href="mailto:support@sitelytics.ai"
              className="text-[#E85238] font-medium hover:underline"
            >
              support@sitelytics.ai
            </a>
          </p>
        </section>

        {/* Section 7: Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            7. Data Retention
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We retain your information:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                As long as your account remains active
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                As long as needed to provide services
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Or until you request deletion
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E85238] font-bold text-sm">•</span>
              <span className="text-gray-700 text-sm">
                Audit data may be anonymized for research or improving AI
              </span>
            </li>
          </ul>
        </section>

        {/* Section 8: Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            8. Children&apos;s Privacy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sitelytics is not intended for users under the age of 18. We do not
            knowingly collect data from children.
          </p>
        </section>

        {/* Section 9: Changes to This Privacy Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. The updated
            version will be posted with a new &quot;Last Updated&quot; date.
          </p>
        </section>

        {/* Section 10: Contact Us */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#080C15] mb-4">
            10. Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions about Privacy Policy of your data, contact
            Sitelytics Support.
          </p>
          <p className="text-gray-700 mt-2">
            Email:{" "}
            <a
              href="mailto:support@sitelytics.ai"
              className="text-[#E85238] font-medium hover:underline"
            >
              support@sitelytics.ai
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
