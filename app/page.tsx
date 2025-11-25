import BuiltFor from "@/components/landing/built-for";
import KeyFeatures from "@/components/landing/key-features";
import HowITWorks from "@/components/landing/how-it-works";
import Faq from "@/components/landing/faq";
import Testimonials from "@/components/landing/testimonials";

const Home = () => {
  return (
    <main>
      <BuiltFor />
      <HowITWorks />
      <KeyFeatures />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default Home;
