import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const ServicesAndAboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const services = [
    {
      title: "UX/UI Design",
      imageSrc: "/images/beautiful-ui.gif",
      altText: "ui/ux-design-icon",
      bgGradient: "linear-gradient(60deg, #F3F3F3 13.4%, #FFE6E7 86.6%)",
    },
    {
      title: "Re-Design",
      imageSrc: "/images/digital-art.gif",
      altText: "digital-art-icon",
      bgGradient: "linear-gradient(60deg, #F3F3F3 13.4%, #D9FFDF 86.6%)",
    },
    {
      title: "Brand Identity",
      imageSrc: "/images/premium-service.gif",
      altText: "brand-identity-icon",
      bgGradient: "linear-gradient(60deg, #F3F3F3 13.4%, #FDF1D1 86.6%)",
    },
    {
      title: "Logo Design",
      imageSrc: "/images/logo-design.gif",
      altText: "logo-design-icon",
      bgGradient: "linear-gradient(60deg, #F3F3F3 13.4%, #F5E2FF 86.6%)",
    },
  ];
  return (
    <>
      <section className="container mx-auto max-w-[1440px] section-padding">
        <h2 className="text-center xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight lg:mb-9 md:mb-6 mb-5">
          Expertise
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-10 md:gap-8 gap-5">
          {services.map(({ title, imageSrc, altText, bgGradient }) => {
            return (
              <div
                key={title}
                style={{ background: bgGradient }}
                className="rounded-5 lg:py-10 md:py-8 py-5"
              >
                <div className="flex flex-col items-center justify-center lg:gap-7.5 md:gap-6 gap-4">
                  <Image src={imageSrc} width="72" height="72" alt={altText} />
                  <h3 className="lg:text-2xl text-xl font-medium">{title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto max-w-[1440px] section-padding md:!px-[75px] !pt-0">
        <div>
          <h2 className="text-center xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight lg:mb-9 md:mb-6 mb-5">
            About me
          </h2>
          <p className="text-center font-medium">
            <span className="bg-clip-text text-transparent text-gradient-2">
              Creative UX/UI designer
            </span>
            &nbsp;shaping seamless digital experiences. Expert in designing
            tools, wire-framing, & user-centric solutions. I&apos;m passionate
            about improving the lives of others through design.&quot;Dedicated
            about leveraging my skills as a UI UX Designer to drive impactful
            results. Excited to work in more projects that demonstrate
            innovation, problem-solving, and a commitment to excellence.
          </p>
          <p className="bg-clip-text text-transparent text-gradient text-center font-medium mt-2.5 mb-10">
            Let&apos;s connect and explore better together!&quot;
          </p>
          <div className="border border-[#D8D8D8] lg:rounded-full rounded-5 py-5 lg:px-10 md:px-8 px-5">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-start">
              <div className="w-full lg:w-auto flex flex-row lg:items-center items-start gap-2.5 lg:py-7 pb-5 pt-0">
                <Image
                  src="/images/location.svg"
                  width="32"
                  height="32"
                  alt="location-icon"
                />
                <div>
                  <p>Location</p>
                  <p className="md:pt-1.5 font-medium break-words text-wrap">
                    Ahmedabad, Gujarat India,
                    <br className="md:hidden block" /> & Dubai, UAE
                  </p>
                </div>
              </div>
              <div className="lg:h-[116px] lg:w-[unset] w-full border-b border-b-[#D8D8D8] lg:border-b-0 lg:border-r lg:border-r-[#D8D8D8]" />
              <div className="w-full lg:w-auto flex flex-row lg:items-center items-start gap-2.5 lg:py-7 py-5">
                <Image
                  src="/images/sms.svg"
                  width="32"
                  height="32"
                  alt="main-icon"
                />
                <div>
                  <p>Gmail ID</p>
                  <a
                    href="mailto:simranlalchandani150@gmail.com"
                    className="md:pt-1.5 font-medium break-all text-wrap"
                  >
                    simranlalchandani150@gmail.com
                  </a>
                </div>
              </div>
              <div className="lg:h-[116px] lg:w-[unset] w-full border-b border-b-[#D8D8D8] lg:border-b-0 lg:border-r lg:border-r-[#D8D8D8]" />
              <div className="w-full lg:w-auto flex flex-row lg:items-center items-start gap-2.5 lg:py-7 pt-5 pb-0">
                <Image
                  src="/images/phone-call.svg"
                  width="32"
                  height="32"
                  alt="phone-icon"
                />
                <div>
                  <p>Contacts (India & Dubai)</p>
                  <a href="tel:917999051428" className="md:pt-1.5 font-medium">
                    +91 7999051428
                  </a>
                  ,<br className="md:hidden block" />
                  <a href="tel:971547628002" className="md:pt-1.5 font-medium">
                    +971 547628002
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesAndAboutMe;
