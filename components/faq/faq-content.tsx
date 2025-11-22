"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/faq-data";

export function FAQContent() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const categories = Object.keys(faqData);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 items-center justify-center gap-4 mb-12 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                scrollToSection(category.replace(/\s+/g, "-").toLowerCase())
              }
              className="px-6 py-4 text-sm rounded-lg font-medium transition-colors whitespace-nowrap border-2 border-gray-300 text-black hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div
              key={category}
              id={category.replace(/\s+/g, "-").toLowerCase()}
              className="scroll-mt-20"
            >
              <h2 className="text-2xl md:text-[28px] font-bold text-[#1A2373] mb-7">
                {category}
              </h2>

              <Accordion type="multiple" className="w-full">
                {faqData[category as keyof typeof faqData].map(
                  (item, index) => (
                    <AccordionItem key={index} value={item.question}>
                      <AccordionTrigger className="hover:text-[#FF5A3D] cursor-pointer hover:no-underline text-[18px] md:text-[20px] lg:text-[24px] py-4 font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pr-16 text-gray-600 text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
