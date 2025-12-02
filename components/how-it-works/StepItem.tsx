import React from "react";
import Image from "next/image";

type StepItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  isReversed?: boolean;
};

const StepItem = ({
  title,
  description,
  imageUrl,
  isReversed = false,
}: StepItemProps) => {
  const flexDirection = isReversed ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <div
      className={`font-sans flex flex-col ${flexDirection} gap-8 lg:gap-10 items-start`}
    >
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left py-[24px] md:py-[12.75px] lg:py-[24px]">
        <h3 className="text-2xl lg:text-[24px] lg:leading-[28px] font-bold text-[#1C1C1C] mb-4">
          {title}
        </h3>
        <p className="text-[18px] leading-[22px] text-[#676767]">
          {description}
        </p>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full ">
        <div className="relative w-full h-[255px] md:h-[388px] bg-[#EFEFF1] rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={260}
            height={525}
            className="w-auto h-full object-contain absolute top-6"
          />
        </div>
      </div>
    </div>
  );
};

export default StepItem;
