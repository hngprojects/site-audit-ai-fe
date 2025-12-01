import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { versionOne } from "@/lib/release-data";
import Image from "next/image";

const page = () => {
  return (
    <>
      <main className="max-w-[1440px] min-h-dvh mx-auto font-sans font-medium flex justify-between items-start bg-white z-50 px-4 md:px-12 pt-16">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger
              className="py-0 px-0 lg:py-4 hover:no-underline md:px-4 cursor-pointer [&[data-state=open]>.plus>.plus-icon]:hidden [&[data-state=closed]>.plus>.minus-icon]:hidden items-end md:items-center"
              icon
            >
              <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-[70px] items-start md:items-center">
                <p className="text-[#494949] font-normal text-base leading-5">
                  12 November 2025
                </p>
                <h4 className="font-semibold md:font-bold text-[20px] lg:text-[28px] leading-6 lg:leading-[34px]  text-[#1C1C1C]">
                  Sitelytics Version Release 0.1
                </h4>
              </div>
              <div className="plus p-[7px] md:p-2.5 border border-[#BBBCBC] min-h-11 min-w-11 flex items-center justify-center rounded-xl">
                <span className="plus-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H11V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H13V4Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <span className="minus-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="minus-icon"
                  >
                    <path
                      d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H4Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="w-full mt-6 mb-[82px] md:mt-8 flex items-end justify-end">
              <div className="pr-0 lg:pr-4 flex flex-col gap-10 md:gap-6 md:max-w-[480px] lg:max-w-[1064px]">
                <div className="max-w-[430px] md:max-w-full md:w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-[101px] md:gap-0 bg-[#FFEFEC] p-4 md:p-2.5 lg:py-2.5 lg:px-4 rounded-[12px] mb-4">
                  <div className="flex flex-col gap-3 md:gap-2 lg:gap-4 pl-2">
                    <p className="text-base lg:text-[20px] font-semibold leading-5 lg:leading-6 text-black">
                      Welcome to Sitelytics 0.1
                    </p>
                    <h2 className="text-[20px] lg:text-[40px] font-semibold leading-6 lg:leading-12 text-black">
                      AI-Powered Foundation
                    </h2>
                  </div>
                  <Image
                    src="/assets/images/release/version-one.svg"
                    width={404}
                    height={324}
                    alt="release-image"
                    className="rounded-[12px] md:rounded-[10.57px] lg:rounded-2xl md:max-w-[203px] md:max-h-[174px] lg:max-w-[404px] lg:max-h-[324px]"
                  />
                </div>
                <div className="space-y-3 md:space-y-6">
                  <p className="text-base text-black font-bold md:font-normal leading-5">
                    Hey Coomunity,
                  </p>
                  <p className="text-[14px] md:text-base text-black font-normal leading-5 max-w-[1065px]">
                    Sitelytics 0.1 introduces the very first version of our
                    AI-powered website auditing platform. This release
                    establishes the core capability: allowing users to enter a
                    URL and instantly receive an AI-generated overview of their
                    website&apos;s health. The focus is on proving the
                    intelligence of the scan engine — showing that AI can detect
                    issues quickly and summarize them in a simple,
                    understandable format.
                  </p>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[#1C1C1C] text-[24px] leading-7 font-bold">
                    What&apos;s New?
                  </h4>
                  <h5 className="text-[#1C1C1C] text-[18px] leading-5.5 font-bold">
                    AI-Powered Foundation
                  </h5>
                  <ul className="space-y-4 flex flex-col items-start">
                    {versionOne[0].map((item) => (
                      <EachList text={item} key={item} />
                    ))}
                  </ul>
                </div>
                <div
                  className="relative w-full h-[343px] md:h-[463px] lg:h-[640px rounded-[12px] cursor-pointer"
                  style={{
                    backgroundImage: `url('/assets/images/release/version-one-video.svg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-black/90 w-full h-full rounded-[12px]" />
                  <span className="p-[9.5px] bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                    <Image
                      src="/play.svg"
                      alt="play-icon"
                      width={45.51}
                      height={45.51}
                    />
                  </span>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[#1C1C1C] text-[24px] leading-7 font-bold">
                    Limitations
                  </h4>
                  <ul className="space-y-4 flex flex-col items-start">
                    {versionOne[1].map((item) => (
                      <EachList text={item} key={item} />
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-[#1C1C1C] text-[24px] leading-7 font-bold">
                    What&apos;s Coming Up Next?
                  </h4>
                  <ul className="space-y-4 flex flex-col items-start">
                    {versionOne[2].map((item) => (
                      <EachList text={item} key={item} />
                    ))}
                  </ul>
                </div>
                <h3 className="text-[#1C1C1C] text-[18px] leading-5.5 font-semibold">
                  Get feedback? Tell us at{" "}
                  <a
                    href="mailto:support@sitelytics.ai"
                    className="text-[#E85238] font-medium hover:underline"
                  >
                    support@sitelytics.ai
                  </a>
                </h3>
                <h4 className="text-[#1C1C1C] text-[18px] leading-5.5 font-semibold">
                  Thanks for using Sitelytics!
                </h4>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
};

export default page;

const EachList = ({ text }: { text: string }) => {
  return (
    <li className="text-[#494949] text-[14px] md:text-base leading-4 font-normal inline-flex justify-center items-center">
      <span className="w-2 h-2 bg-[#FF5A3D] inline-flex mr-3 rounded-full"></span>
      {text}
    </li>
  );
};
