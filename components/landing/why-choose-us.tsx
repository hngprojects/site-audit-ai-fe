"use client";

import Image from "next/image";

const features = [
  {
    id: 1,
    img: "/images/image1.png",
    title: "Save Time And Stress",
    description:
      "Sitelytics handles the analysis so you can focus on running your business.",
  },
  {
    id: 2,
    img: "/images/image2.png",
    title: "Simple, Clear Fixes",
    description:
      "We turn complex issues into easy-to-understand insights with easy guided steps.",
  },
  {
    id: 3,
    img: "/images/image3.png",
    title: "Experts You Can Trust",
    description:
      "Connect with verified professionals who can fix your issues immediately.",
  },
  {
    id: 4,
    img: "/images/image4.png",
    title: "Better Performance",
    description:
      " Improve site speed, SEO, and design to attract more visitors and sales.",
  },
];

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
}

function FeatureCard({ image, title, description }: FeatureCardProps) {
  return (
    <div className="">
      <div className="flex h-[315px] md:min-h-[357px] flex-col bg-gray-50 rounded-lg p-5 gap-2 text-center items-center justify-between border border-gray-100 shadow-md">
        <Image src={image} alt={title} width={189} height={155} />
        <div className="xl:mt-3 md:px-2.5 xl:px-0">
          <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-12">
      <div className="">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-black mb-4">
            Why Choose <span className="text-[#121952]">Sitelytics</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We are a team on a mission to make website management simple, clear,
            and stress-free for everyone.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              image={feature.img}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
