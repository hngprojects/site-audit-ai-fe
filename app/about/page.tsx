import Hero from "@/components/about/Hero";
import MobileApp from "@/components/about/MobileApp";
import KeyValues from "@/components/about/KeyValues";
import InstantAuditCTA from "@/components/about/InstantAuditCTA";
import React from "react";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutUsPage = () => {
  return (
    <div className={rethinkSans.className}>
      <Hero />
      <MobileApp />
      <KeyValues />
      <InstantAuditCTA />
      {/* We will add the sections here */}
    </div>
  );
};

export default AboutUsPage;
