import BuiltFor from "@/components/landing/built-for";
import HowITWorks from "@/components/landing/how-it-works";

const Home = () => {
  return (
    <main>
      <div className="min-h-dvh"></div>
      <HowITWorks />
      <BuiltFor />
      <div className="min-h-dvh"></div>
    </main>
  );
};

export default Home;
