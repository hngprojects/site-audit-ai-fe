import BuiltFor from "@/components/landing/built-for";
import React from "react";
import Testimonials from "../components/landing/testimonials";
import HowITWorks from "@/components/landing/how-it-works";

const Home = () => {
  return (
    <main>
      {/* You can adjust the order of these components as needed */}
      <Testimonials />
      <BuiltFor />
      <HowITWorks />
    </main>
  );
};

export default Home;
