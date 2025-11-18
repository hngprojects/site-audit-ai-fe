import Hero from "@/components/landing/hero";
import Testimonials from "../components/landing/testimonials";
import HowITWorks from "@/components/landing/how-it-works";
import KeyFeatures from "@/components/landing/key-features";

const Home = () => {
  return (
    <main>
      <Hero />
      <HowITWorks />
      <KeyFeatures />
      <Testimonials />
    </main>
  );
};

export default Home;
