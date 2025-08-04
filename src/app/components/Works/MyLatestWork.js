"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "../Common/Button";

const MyLatestWork = () => {
  const pathname = usePathname();
  const allWorks = [
    {
      title: "RideEase",
      domain: "Mobile App, UX/UI Design",
      description:
        "RideEase is a user-friendly app for booking private rides or sharing trips to save money and reduce environmental impact.",
      imageSrc: "/images/work/ride-ease.svg",
      altText: "RideEase-icon",
      domainColor: "text-[#2A91FF]",
      bgGradient: "linear-gradient(47.47deg, #C7E0FA -28.94%, #F3F3F3 110.41%)",
    },
    {
      title: "BloomVoice",
      domain: "Mobile App, UX/UI Design",
      description:
        "A next-gen podcast platform– It lets creators share, listeners discover, and communities grow, all within a secure system.",
      imageSrc: "/images/work/bloom-voice.svg",
      altText: "BloomVoice-icon",
      domainColor: "text-[#4F2FFA]",
      bgGradient: "linear-gradient(47.47deg, #DAD3FF -28.94%, #F3F3F3 110.41%)",
    },
    {
      title: "Why Fitt",
      domain: "Mobile, UX/UI Design",
      description:
        "An application that helps users achieve their fitness goals quickly and efficiently by connecting with trainers online.",
      imageSrc: "/images/work/why-fitt.svg",
      altText: "WhyFitt-icon",
      domainColor: "text-[#7F57B0]",
      bgGradient: "linear-gradient(7.29deg, #E8C7FA 4.2%, #F8ECFF 57.77%)",
    },
    {
      title: "PlantPal",
      domain: "Mobile App, UX/UI Design",
      description:
        "A fresh, user-friendly plant shopping app that lets users explore, favorite, and purchase indoor and garden plants with ease.",
      imageSrc: "/images/work/plant-pal.svg",
      altText: "PlantPal-icon",
      domainColor: "text-[#4F2FFA]",
      bgGradient: "linear-gradient(47.47deg, #AEFFF4 -28.94%, #F3F3F3 110.41%)",
    },
    {
      title: "Complicare–HIPAA Compliance",
      domain: "Web Application, UX/UI Design",
      description:
        "System to simplify healthcare operations, improve UX, ensure secure collaboration with Admins, Doctors, Patients, and Staff.",
      imageSrc: "/images/work/complicare.svg",
      altText: "Complicare-icon",
      domainColor: "text-[#2A91FF]",
      bgGradient: "linear-gradient(47.47deg, #C7E0FA -28.94%, #F3F3F3 110.41%)",
    },
    {
      title: "Flytern",
      domain: "Website & Mobile, UX/UI Design",
      description:
        "An application in which users can plan seamless travel & also book their flight tickets online/remotely.",
      imageSrc: "/images/work/flytern.svg",
      altText: "Flytern-icon",
      domainColor: "text-[#076652]",
      bgGradient: "linear-gradient(42.67deg, #C4F0CC -25.54%, #F3F3F3 106.99%)",
    },
    {
      title: "SwiftSupport AI",
      domain: "Website, UX/UI Design",
      description:
        "SwiftSupportAI streamlines customer interactions and cuts wait times with AI automation, co-pilots, and agents.",
      imageSrc: "/images/work/swiftsupport.svg",
      altText: "SwiftSupport-icon",
      domainColor: "text-[#B0A800]",
      bgGradient: "linear-gradient(47.47deg, #F2ED7B -28.94%, #F3F3F3 110.41%)",
    },
    {
      title: "Vetpass",
      domain: "Website, UX/UI Design",
      description:
        "An app for pet owners, vets, service providers to track pet info, access online vets, connect in forums to share and learn.",
      imageSrc: "/images/work/vetpass.svg",
      altText: "Vetpass-icon",
      domainColor: "text-[#FF6804]",
      bgGradient: "linear-gradient(47.47deg, #FAD6C7 -28.94%, #F3F3F3 110.41%)",
    },
  ];
  const latestWork =
    pathname === "/work/"
      ? allWorks
      : [...allWorks.slice(0, 2), ...allWorks.slice(-2)];

  return (
    <section
      className={`${pathname === "/work/" ? "" : "bg-[#F7F7FF]"} reveal`}
    >
      <div
        id="latest-casestudy"
        className="container max-w-[1440px] section-padding mx-auto"
      >
        <h2 className="text-center xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight lg:mb-7.5 mb-5">
          My latest work
        </h2>
        <p className="lg:text-2xl text-xl text-center mt-2.5">
          I love finding simple solutions to complex problems
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 gap-6 lg:my-10 my-5">
          {latestWork.map(
            ({
              title,
              description,
              domain,
              altText,
              imageSrc,
              bgGradient,
              domainColor,
            }) => (
              <div
                className={`reveal rounded-5 lg:p-10 md:p-8 p-5 ${
                  pathname === "/work/" ? "bg-[#F8F8F8]" : "bg-white"
                } `}
                key={title}
              >
                <div
                  className="rounded-5 w-full h-[300px] md:h-[400px] lg:h-[520px] flex items-center justify-center lg:mb-7.5 mb-5"
                  style={{ background: bgGradient }}
                >
                  <img
                    className="object-contain max-h-full"
                    src={imageSrc}
                    alt={altText}
                  />
                </div>
                <div className="flex items-center justify-start">
                  <h3 className="lg:text-2xl text-xl font-medium">{title}</h3>
                </div>
                <p
                  className={`lg:text-base text-sm font-medium md:my-4 my-2.5 ${domainColor}`}
                >
                  {domain}
                </p>
                <p className="lg:text-base text-sm">{description}</p>
              </div>
            )
          )}
        </div>
        <div className="flex items-center justify-center">
          <Button
            variant="light"
            labelClass={
              pathname === "/work/" ? "" : "hover:!bg-transparent !bg-[#F7F7FF]"
            }
            label="View All Projects"
            redirect="https://www.behance.net/simranlalchandani_be"
            target="_blank"
          />
        </div>
      </div>
    </section>
  );
};

export default MyLatestWork;
