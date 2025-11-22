import Hero from "@/components/about/Hero";
import MobileApp from "@/components/about/MobileApp";
import KeyValues from "@/components/about/KeyValues";
import InstantAuditCTA from "@/components/about/InstantAuditCTA";
import React from "react";

const AboutUsPage = () => {
  return (
    <div style={{ fontFamily: "var(--font-rethink-sans)" }}>
      <Hero />
      <MobileApp />
      <KeyValues />
      <InstantAuditCTA />
    </div>
  );
};

export default AboutUsPage;
