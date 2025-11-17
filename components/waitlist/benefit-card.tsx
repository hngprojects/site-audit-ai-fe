import Image from "next/image";

interface BenefitsCardProps {
  title: string;
  description: string;
  icon: string;
}
const BenefitsCard = ({ title, description, icon }: BenefitsCardProps) => {
  return (
    <div className="pt-6 px-6 pb-4 border border-gray-200 rounded-2xl flex flex-col items-center md:items-start gap-4 md:gap-6">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="w-10 h-10"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg md:text-2xl leading-6 md:leading-7 font-semibold text-center md:text-left">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-5 md:leading-6 text-gray-500 font-normal text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
