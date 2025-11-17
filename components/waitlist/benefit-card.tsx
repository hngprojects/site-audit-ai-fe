import Image from "next/image";

interface BenefitsCardProps {
  title: string;
  description: string;
  icon: string;
}
const BenefitsCard = ({ title, description, icon }: BenefitsCardProps) => {
  return (
    <div className="pt-6 pl-6 pr-6 pb-4 border border-gray-200 rounded-[16px] flex flex-col gap-6">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="w-10 h-10"
      />
      <div className="flex flex-col gap-2 ">
        <h3 className="text-2xl leading-7 font-semibold">{title}</h3>
        <p className="text-[16px] leading-6 text-gray-500 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
