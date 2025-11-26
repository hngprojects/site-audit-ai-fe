"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { testimonialsData } from "@/lib/testimonials-data";
import { cn } from "@/lib/utils";

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonialsData)[0];
}) => (
  <div className="flex flex-col font-sans justify-between p-4 border border-[#E8E9F1] rounded-2xl h-[268px]">
    <div className="flex-grow">
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
          className="rounded-full object-cover"
        />
      </div>
      <p className="text-[#1C1C1C] text-base leading-6">{testimonial.quote}</p>
    </div>
    <div className="border-t border-[#BBBCBC] pt-4">
      <p className="font-semibold text-xl md:text-2xl text-[#1C1C1C]">
        {testimonial.name}
      </p>
      <p className="text-sm text-[#494949]">{testimonial.title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      let newItemsVisible;
      if (window.innerWidth >= 1024) {
        newItemsVisible = 3;
      } else if (window.innerWidth >= 768) {
        newItemsVisible = 2;
      } else {
        newItemsVisible = 1;
      }
      setItemsVisible(newItemsVisible);
      setCurrentIndex((prev) =>
        Math.min(prev, testimonialsData.length - newItemsVisible)
      );
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < testimonialsData.length - itemsVisible;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex,
    currentIndex + itemsVisible
  );

  return (
    <section className="bg-white py-12 md:py-20 font-sans">
      <div className="container mx-auto px-3 sm:px-8 md:px-12">
        <div className="block md:flex md:justify-between md:items-end mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              What Our <span className="text-[#1A2373]">Customers</span> Say
            </h2>
            <p className="text-sm md:text-lg text-[#676767] opacity-80 max-w-xs mx-auto md:max-w-none md:mx-0">
              See what our early users are already saying about Sitelytics.
            </p>
          </div>

          <div className="flex space-x-5 justify-center mt-6 md:mt-0 md:justify-start">
            <button
              onClick={handlePrev}
              aria-disabled={!canGoPrev}
              className={cn("p-2 rounded-full transition-colors duration-300", {
                "bg-[#FF5A3D]": canGoPrev,
                "bg-[#E0E1E2] cursor-not-allowed": !canGoPrev,
              })}
            >
              <Image
                src="/assets/images/landing/arrow-left.svg"
                alt="Previous"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={handleNext}
              aria-disabled={!canGoNext}
              className={cn("p-2 rounded-full transition-colors duration-300", {
                "bg-[#FF5A3D]": canGoNext,
                "bg-[#E0E1E2] cursor-not-allowed": !canGoNext,
              })}
            >
              <Image
                src="/assets/images/landing/arrow-right.svg"
                alt="Next"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* We need to ensure there's enough space for the items, so we'll use a wrapper with a fixed height */}
        <div className="h-[280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={currentIndex + index}
                className={cn({
                  "hidden md:hidden lg:block": index >= 2,
                  "hidden md:block lg:block": index === 1,
                })}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
