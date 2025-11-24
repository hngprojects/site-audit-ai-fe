import React from "react";

interface BulletListItemProps {
  children: React.ReactNode;
}

const BulletListItem: React.FC<BulletListItemProps> = ({ children }) => {
  return (
    <div className="flex flex-row items-start">
      <div className="mr-3 mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#FF5A3D] md:h-2 md:w-2" />
      <p className="flex-1 text-sm leading-5 text-justify text-[#1C1C1C] md:text-base md:leading-5 lg:text-xl lg:leading-7">
        {children}
      </p>
    </div>
  );
};

export default BulletListItem;
