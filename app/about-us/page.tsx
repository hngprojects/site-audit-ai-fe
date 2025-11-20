import React from "react";
import AboutUsHeroMissionSection from "@/components/about-us/about-us";
import AboutHeader from "@/components/about-us/about-header";
import WaitlistFooter from "@/components/waitlist/WaitlistFooter"; // Import the landing page footer

const AboutUsPage = () => {
  return (
    <main>
      <AboutHeader />
      <AboutUsHeroMissionSection />
      <WaitlistFooter /> {/* Use the landing page footer */}
    </main>
  );
};

export default AboutUsPage;
