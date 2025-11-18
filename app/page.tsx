import React from "react";
import Hero from "@/components/waitlist/Hero";

import Faq from "@/components/landing/faq";
import Testimonials from "../components/landing/testimonials";
import HowITWorks from "@/components/landing/how-it-works";

const Home = () => {
  return (
    <main>
      <Hero />
      <HowITWorks />
      <Testimonials />
      <Faq />
      
    </main>
  );
};

export default Home;
