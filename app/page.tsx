import Hero from "@/components/landing/hero";
// import Testimonials from "../components/landing/testimonials";
import HowITWorks from "@/components/landing/how-it-works";
import KeyFeatures from "@/components/landing/key-features";
import Faq from "@/components/landing/faq";

const Home = () => {
  return (
    <main>
      <Hero />
      <KeyFeatures />
      <HowITWorks />
      <Faq />
    </main>
  );
};

export default Home;
