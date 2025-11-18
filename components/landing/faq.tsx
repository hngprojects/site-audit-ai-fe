"use client";

import React from "react";
import { faqData } from "@/lib/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-white py-20 md:py-[100px] lg:py-[100px]">
      <div className="container mx-auto px-4 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-lg text-[#676767] opacity-80 max-w-md">
            Have Questions? Here are quick answers to some of the most common
            queries
          </p>
        </div>

        {/* Accordion Implementation */}
        <div className="w-full max-w-[1006px] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#BBBCBC] last:border-b-0"
              >
                <AccordionTrigger className="py-4 text-left text-base md:text-lg font-semibold text-[#1C1C1C] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm md:text-base text-[#676767] pr-8">
                  {" "}
                  {/* Added pr-8 to prevent text from overlapping arrow */}
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
