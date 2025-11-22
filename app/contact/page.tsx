"use client";

import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/landing/faq";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main className="">
      <section className="max-w-[1440px] w-full mx-auto font-sans px-5 md:px-8 lg:px-10 xl:px-12 pt-10 lg:pt-16 pb-4 md:pb-20 lg:pb-[105px]">
        <div className="flex items-center justify-center">
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-20 lg:gap-8 xl:gap-17">
            <div className="flex flex-col gap-10 w-full min-w-[343px] min-h-[254px] md:min-w-[664px] md:min-h-[424px] lg:min-w-[490px] lg:min-h-[895px] bg-[url(/assets/images/contact/mobile-contact.svg)] sm:bg-[url(/assets/images/contact/tablet-contact.svg)] lg:bg-[url(/assets/images/contact/web-contact.svg)] bg-no-repeat bg-cover bg-center rounded-2xl" />
            <div className="w-full h-full flex flex-col  lg:max-w-[640px]">
              <div className="flex items-start flex-col gap-12 lg:gap-8">
                <div>
                  <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-[#1C1C1C] font-semibold leading-[38px] md:leading-10 lg:leading-16 text-center lg:text-left">
                    Get in Touch
                  </h2>
                  <p className="mt-3 md:mt-4 lg:mt-3 text-[#494949] text-base font-normal leading-5.5 text-center lg:text-left">
                    Send us a message and we&apos;ll get back to you with
                    helpful, personalized support, and everything you need to
                    make your website stronger.
                  </p>
                </div>
                <ContactForm />
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-6">
                  <ContactInfo
                    text="Email us"
                    message="Support@Sitelytics.ai"
                    src="/assets/images/contact/mail.svg"
                  />
                  <ContactInfo
                    text="Call us"
                    message="+1 (555) 123 4567"
                    src="/assets/images/contact/call.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mt-10 md:mt-8  lg:mt-[77px]">
          <h4 className="text-[#1C1C1C] font-semibold text-base leading-5">
            Customer Support
          </h4>
          <p className="text-[#1C1C1C] font-normal text-base leading-5">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </p>
          <p className="text-[#494949] font-normal text-xs leading-3.5">
            By contacting us, you agree to our{" "}
            <a href="#" className="text-[#1A2373] font-bold">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#1A2373] font-bold">
              privacy policy.
            </a>
          </p>
        </div>
      </section>
      <Faq />
    </main>
  );
};

export default ContactPage;

const ContactInfo = ({
  src,
  text,
  message,
}: {
  src: string;
  text: string;
  message: string;
}) => {
  return (
    <div className="w-full px-6 pt-6 pb-4 md:pb-15 border border-[#C7C8C9] rounded-[12px]">
      <div className="flex justify-start items-center gap-2">
        <Image src={src} width={24} height={24} alt={`${text} icon`} />{" "}
        <p className="text-[#1A2373] text-base font-bold leading-5">{text}</p>
      </div>
      <p className="text-[#1C1C1C] font-normal text-base leading-5 mt-4">
        {message}
      </p>
    </div>
  );
};
