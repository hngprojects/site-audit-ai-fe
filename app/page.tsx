import Hero from "@/components/landing/hero";
import BuiltFor from "@/components/landing/built-for";
import KeyFeatures from "@/components/landing/key-features";
import HowITWorks from "@/components/landing/how-it-works";
import Faq from "@/components/landing/faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <BuiltFor />
      <HowITWorks />
      <KeyFeatures />
      <Faq />
    </main>
  );
};

export default Home;
