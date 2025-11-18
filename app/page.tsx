import React from "react";
import Testimonials from "../components/landing/testimonials";
import HowITWorks from "@/components/landing/how-it-works";
import KeyFeatures from "@/components/landing/key-features";

const Home = () => {
  return (
    <main>
      {/* You can adjust the order of these components as needed */}
      <HowITWorks />
      <KeyFeatures />
      <Testimonials />
    </main>
  );
};

export default Home;
