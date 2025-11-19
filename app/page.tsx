import BuiltFor from "@/components/landing/built-for";
import React from "react";
import Hero from "@/components/waitlist/Hero";
import KeyFeatures from "@/components/landing/key-features";
import HowITWorks from "@/components/landing/how-it-works";
import Testimonials from "@/components/landing/testimonials";
import Faq from "@/components/landing/faq";

const Home = () => {
  return (
    <main>
      {/* You can adjust the order of these components as needed */}
      <Testimonials />
      <BuiltFor />
      <Hero />
      <KeyFeatures />
      <HowITWorks />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default Home;
