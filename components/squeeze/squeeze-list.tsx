import { squeezeList } from "@/lib/squeeze-list";
import Image from "next/image";

export const SqueezeList = () => {
  return (
    <div className="my-4 flex flex-col gap-4 md:flex-row md:gap-8">
      {squeezeList.map(({ image, title, description }) => (
        <div
          key={title}
          className="border border-gray-100 rounded-2xl p-8 flex flex-col text-center gap-4 items-center sm:max-w-[55%] sm:mx-auto"
        >
          <span className="bg-[#EFEFF1] rounded-full p-3">
            <Image src={image} alt={title} width={25} height={25} />
          </span>

          <h3 className="text-[#1A2373] font-semibold md:text-2xl">{title}</h3>
          <p className="text-[#494949] text-sm leading-5 md:text-lg">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};
