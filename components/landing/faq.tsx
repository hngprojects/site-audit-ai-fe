"use client";

import { faqData1 } from "@/lib/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

interface FaqProps {
  faqData?: FAQItem[];
}

const Faq = ({ faqData }: FaqProps) => {
  const dataToUse = faqData && faqData.length > 0 ? faqData : faqData1;

  return (
    <section
      id={faqData ? "#FAQ" : ""}
      className="bg-white py-16 lg:py-[100px] font-sans"
    >
      <div className="container mx-auto px-4 md:px-8 max-h-[850px]">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#1C1C1C] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[#676767] opacity-80 max-w-lg">
            Have Questions? Here are quick answers to some of the most common
            queries
          </p>
        </div>

        <div className="w-full max-w-[1006px] mx-auto">
          <Accordion type="multiple" className="w-full">
            {dataToUse.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-t border-[#BBBCBC] first:border-t-0"
              >
                <AccordionTrigger className="hover:text-[#FF5A3D] cursor-pointer hover:no-underline text-[18px] md:text-[20px] lg:text-[24px] py-4 font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className="pr-16 text-gray-600 text-base"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
