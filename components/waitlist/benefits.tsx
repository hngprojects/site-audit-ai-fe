import { waitlistBenefitsData } from "@/lib/waitlist-benefits-data";
import BenefitsCard from "./benefit-card";

const Benefits = () => {
  return (
    <section className="max-w-[1440px] mx-auto font-sans">
      <div className="max-w-[860px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-2xl text-[40px] leading-10 font-semibold ">
            Your Early Access Benefits
          </h2>
          <p className="text-xl leading-6 text-gray-500 font-normal">
            Join the waitlist to enjoy special perks, get early updates, and try
            powerful features before everyone else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {waitlistBenefitsData.map((benefit) => (
            <BenefitsCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
