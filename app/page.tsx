import React from "react";
import Hero from "@/components/waitlist/Hero";

import Faq from "@/components/landing/faq";
import HowITWorks from "@/components/landing/how-it-works";

const Home = () => {
  return (
    <main>
      <Hero />
      <HowITWorks />

      <Faq />
    </main>
  );
};

export default Home;
