import React from "react";
import AboutUsHeroMissionSection from "@/components/about-us/about-us";
import AboutHeader from "@/components/about-us/about-header";
import AboutFooter from "@/components/about-us/about-footer";

const AboutUsPage = () => {
  return (
    <main>
      <AboutHeader />
      <AboutUsHeroMissionSection />
      <AboutFooter />
    </main>
  );
};

export default AboutUsPage;
