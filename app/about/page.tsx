import Hero from "@/components/about/Hero";
import MobileApp from "@/components/about/MobileApp";
import KeyValues from "@/components/about/KeyValues";
import InstantAuditCTA from "@/components/about/InstantAuditCTA";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <Hero />
      <MobileApp />
      <KeyValues />
      <InstantAuditCTA />
      {/* We will add the sections here */}
    </div>
  );
};

export default AboutUsPage;
