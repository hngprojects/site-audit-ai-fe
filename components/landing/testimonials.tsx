import React from "react";
import Image from "next/image";
import { testimonialsData } from "@/lib/testimonials-data";

const Testimonials = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#676767] opacity-80 max-w-md mx-auto md:mx-0">
            See what our early users are already saying about Sitelytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 border border-[#E8E9F1] rounded-2xl h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Image
                    src="/assets/images/landing/quote-icon.svg"
                    alt="Quote"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <p className="text-[#1C1C1C] text-base leading-6 mb-4">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t border-[#BBBCBC] pt-4">
                <p className="font-semibold text-xl text-[#1C1C1C]">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#494949]">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
