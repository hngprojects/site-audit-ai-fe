"use client";
import { keyFeaturesData } from "@/lib/key-features-data";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const KeyFeaturesDisplay = () => {
  const [fade, setFade] = useState(true);
  const [selected, setSelected] = useState<KeyFeaturesDataProps>(
    keyFeaturesData[0]
  );
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (opt: KeyFeaturesDataProps) => {
    setFade(false);
    setTimeout(() => {
      setSelected(opt);
      setFade(true);
    }, 250);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-20">
      {/*  ====================== MObile Tabs ======================  */}

      <div className="block relative lg:hidden w-full" ref={dropdownRef}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full p-4 rounded-2xl flex items-center justify-between bg-[#1A2373] text-white cursor-pointer"
          title="click me"
        >
          <span className="text-lg font-semibold">{selected.title}</span>
          <ChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
            size={16}
          />
        </button>

        <div
          className={`
            absolute left-0 w-full bg-white shadow-lg rounded-b-2xl mt-4 z-20 overflow-hidden transition-all duration-300 origin-top
            ${open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
          `}
          style={{ maxHeight: "217px", overflowY: "auto" }}
        >
          {keyFeaturesData.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleSelect(item);
                setOpen(false);
              }}
              className={`w-full text-left text-lg font-medium p-4 transition-colors duration-200
                         ${
                           selected.id === item.id
                             ? "bg-[#E8E9F1] text-[#1A2373]"
                             : "text-[#1A2373] hover:bg-[#C3C5D4CC]"
                         }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/*  ====================== Web Tab ======================   */}

      <ul className="hidden lg:flex flex-col md:flex-row lg:flex-col gap-8 h-[400px]">
        {keyFeaturesData.map((item) => {
          const isActive = item.id === selected.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => handleSelect(item)}
                title="click me"
                className={`hidden lg:flex flex-col items-center lg:items-start gap-4 p-4 rounded-[12px] w-full min-w-[300px] h-[54px] cursor-pointer font-bold text-xl leading-6 transition-all active:scale-95 ${
                  isActive
                    ? "bg-[#1A2373] text-white"
                    : "bg-[#EFEFF1] text-[#1A2373] hover:bg-[#C3C5D4CC] hover:text-[#1A2373]"
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>

      {/*  ====================== ANIMATED BOX ======================   */}
      <div
        className={`w-full min-h-[270px] lg:w-[852px] lg:h-[400px] flex items-end justify-between p-5 lg:pb-10 lg:pl-6 rounded-2xl relative ${fade ? "opacity-100" : "opacity-10"}`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.352) 50%, rgba(0, 0, 0, 0.8) 100%), url(${selected.bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 flex flex-col gap-4 items-start justify-end h-full text-left">
          <h2
            className={`text-lg md:text-xl lg:text-2xl leading-5.5 sm:leading-6 font-bold text-white transition-opacity duration-400 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {selected.title}
          </h2>
          <p
            className={`text-sm lg:text-lg leading-[22px] font-normal text-white transition-opacity duration-400 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {selected.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesDisplay;
