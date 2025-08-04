import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const steps = [
    {
      title: "Initiating Contact",
      description: "I will reach out to you within the next 24 hours for sure.",
    },
    {
      title: "Share Your Requirement",
      description:
        "Share your requirements, I will review them and respond with a project plan.",
    },
    {
      title: "Estimated Budget/Cost",
      description:
        "After a detailed analysis, I’ll provide the estimated cost and timeline for project completion.",
    },
  ];

  return (
    <section className="work-banner lg:mb-20 md:mb-14 mb-10">
      <div className="h-full min-h-[600px] max-h-full">
        <div className="container max-w-[1440px] lg:!px-[90px] section-padding mx-auto !pt-[120px]">
          <section className="flex flex-col md:flex-row items-center justify-start md:h-screen h-full min-h-[600px] max-h-full lg:gap-16 md:gap-10 gap-6">
            <h1 className="hidden">Contact Us</h1>
            <div className="md:w-[55%] w-full">
              <h2 className="text-off-white md:text-[42px] text-3xl lg:!leading-snug !leading-tight mb-2">
                Let’s Design for{" "}
                <span className="bg-clip-text text-transparent contact-gradient">
                  People
                </span>
              </h2>
              <div className="text-off-white flex flex-wrap md:gap-3 lg:mb-10 md:mb-7.5 mb-5">
                <div className="flex items-center gap-3 leading-[39px]">
                  <Image
                    className="w-6 h-6"
                    src="/images/tick-icon.svg"
                    alt="tick-mark-icon"
                    width={24}
                    height={24}
                  />
                  No obligation to hire.
                </div>
                <div className="flex items-center gap-3 leading-[39px]">
                  <Image
                    className="w-6 h-6"
                    src="/images/tick-icon.svg"
                    alt="tick-mark-icon"
                    width={24}
                    height={24}
                  />
                  No commitment from you.
                </div>
              </div>
              <ContactForm />
            </div>
            <div className="md:w-[45%] w-full flex flex-col bg-[#081120] rounded-2xl border border-[#2D3540] lg:gap-[50px] md:gap-7.5 gap-4 lg:p-10 md:p-7.5 p-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start justify-start"
                >
                  <div className="rounded-full text-off-white list-border lg:text-2xl md:text-xl text-lg p-[1px]">
                    <span className="md:w-10.5 md:h-10.5 w-7 h-7 flex items-center justify-center font-semibold bg-black rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <p className="lg:text-[22px] md:text-xl text-lg text-off-white font-medium">
                      {step.title}
                    </p>
                    <p className="md:text-base text-sm text-off-white pt-[10px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="md:text-2xl text-xl text-off-white">
                Discover, Define, Develop, and Deliver. 
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
