"use client";

import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <main className="bg-[url(/assets/images/contact/circle-bg.svg)] bg-no-repeat bg-center">
      <section className="max-w-[1440px] flex items-center justify-center mx-auto font-sans px-5 md:px-8 lg:px-10 xl:px-20 pt-10 md:pt-15 lg:pt-20 pb-6 md:pb-20 lg:pb-[105px]">
        <div className="w-full flex items-start justify-between gap-[43px]">
          <div className="flex flex-col gap-10 max-w-[480px]">
            <h2 className="text-[#FF5A3D] text-[64px] font-bold ">
              Contact Us
            </h2>
            <p className="text-base font-normal text-[#1C1C1C]">
              Send us a message and we&apos;ll get back to you with helpful,
              personalized support, and everything you need to make your website
              stronger.
            </p>
            <ul className="flex flex-col gap-4  text-base font-normal text-[#1C1C1C]">
              <li>Info@Sitelytics.ai</li>
              <li>321-232-543</li>
              <li className="">
                <a
                  href="#"
                  target="_blank"
                  className="underline underline-offset-2"
                >
                  Customer Support
                </a>
              </li>
            </ul>
            <div className="max-w-[228px]">
              <h3 className="text-base font-semibold text-[#1C1C1C]">
                Customer Support
              </h3>
              <p className="mt-4 text-base font-normal text-[#1C1C1C]">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
          </div>
          <div className="bg-white w-full h-full flex flex-col px-6 py-10 rounded-2xl shadow-[0px_2px_52px_0px_#0000001A]">
            <div className="flex items-start flex-col gap-9">
              <div>
                <h2 className="text-[48px] font-semibold leading-16">
                  Get in Touch
                </h2>
                <p className="mt-2 text-[#1C1C1C] text-lg font-normal leading-5.5">
                  You can reach us anytime
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
