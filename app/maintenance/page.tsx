import { Hero } from "@/components/maintenance/Hero";

const page = () => {
  return (
    <main
      className="font-sans p-4 max-w-[1440px] mx-auto 
  flex flex-col gap-8 items-center 
  md:flex-row-reverse md:justify-center md:items-start md:h-full md:px-8 md:min-h-[85vh] md:gap-12 md:pt-8"
    >
      <Hero />
    </main>
  );
};

export default page;
