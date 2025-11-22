import { FAQContent } from "@/components/faq/faq-content";
export const metadata = {
  title: "FAQ - Sitelytics",
  description: "Frequently Asked Questions about Sitelytics",
};

export default function FAQPage() {
  return (
    <>
      <main className="min-h-screen bg-white md:px-8 xl:px-0">
        {/* Title Section */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[32px] md:text-[40px] xl:text-5xl font-bold text-gray-900 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-[16px] md:text-lg max-w-2xl mx-auto">
            Have questions? Here are quick answers to some of the most common
            queries.
          </p>
        </div>
        {/* FAQ Content */}
        <FAQContent />
      </main>
    </>
  );
}
