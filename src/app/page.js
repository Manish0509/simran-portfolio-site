"use client";
import { useEffect } from "react";
import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import { scrollEffect } from "./lib/CommonFunction";
import MyLatestWork from "./components/Works/MyLatestWork";
import ServicesAndAboutMe from "./components/Home/ServicesAndAboutMe";

export default function Home() {
  const iBelieveSection = [
    {
      title: "Discovering the positive",
      description:
        "Every brand, like every individual, has a unique value to offer the world. My mission is to uncover & amplify that potential.",
      imageSrc: "/images/watcher.gif",
      altText: "watcher-icon",
    },
    {
      title: "Building a brighter tomorrow",
      description:
        "Strong brands are always evolving. That’s why I design systems that adapt & grow with you, keeping pace with cultural shifts.",
      imageSrc: "/images/graphic.gif",
      altText: "graphic-icon",
    },
    {
      title: "Creating even better results",
      description:
        "Karma is real, the world is interconnected, & life is too short to be anything but your best. Every day, I strive to bring a little more sunshine.",
      imageSrc: "/images/feedback.gif",
      altText: "feedback-icon",
    },
  ];

  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <section className="container mx-auto max-w-[1440px] section-padding">
        <div className="flex md:flex-row flex-col items-center justify-center gap-7">
          <div className="flex items-center justify-center gap-2.5 bg-[#F7F7FF] p-5 rounded-5">
            <div className="p-3 rounded-[10px] bg-white">
              <Image
                src="/images/beautiful-ui.gif"
                width="72"
                height="72"
                alt="beautiful-ui-icon"
              />
            </div>
            <p className="lg:text-[22px] leading-[100%] md:text-xl text-lg">
              Beautiful UI
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/add.svg"
              width="24"
              height="24"
              alt="add-icon"
            />
          </div>
          <div className="flex items-center justify-center gap-2.5 bg-[#F7F7FF] p-5 rounded-5">
            <div className="p-3 rounded-[10px] bg-white">
              <Image
                src="/images/efficient-ux.gif"
                width="72"
                height="72"
                alt="efficient-ux-icon"
              />
            </div>
            <p className="lg:text-[22px] leading-[100%] md:text-xl text-lg">
              Efficient UX
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="md:rotate-0 rotate-90"
              src="/images/arrow-right.svg"
              width="24"
              height="24"
              alt="arrow-icon"
            />
          </div>
          <div className="flex items-center justify-center gap-2.5 bg-[#F7F7FF] p-5 rounded-5">
            <div className="p-3 rounded-[10px] bg-white">
              <Image
                src="/images/launch.gif"
                width="72"
                height="72"
                alt="launch-icon"
              />
            </div>
            <p className="lg:text-[22px] leading-[100%] md:text-xl text-lg">
              User-friendly Product
            </p>
          </div>
        </div>
        <p className="text-center lg:text-2xl text-xl bg-clip-text text-transparent text-gradient mt-7.5">
          &quot;I place my faith in a single formula throughout my
          existence&quot;
        </p>
      </section>
      <section className="bg-[#FFF1F9] reveal">
        <div className="container mx-auto max-w-[1440px] section-padding">
          <h2 className="text-center xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight">
            Best thing about design is
          </h2>
          <p className="text-center lg:text-[250px] font-bold md:text-[150px] text-[80px] bg-clip-text text-transparent big-text-gradient">
            People
          </p>
        </div>
      </section>
      <section className="container mx-auto max-w-[1440px] section-padding reveal">
        <h2 className="text-center xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight lg:mb-7.5 mb-5">
          I believe in
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-8">
          {iBelieveSection.map(
            ({ title, description, imageSrc, altText }, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-center gap-2.5"
                  key={index}
                >
                  <Image src={imageSrc} width="72" height="72" alt={altText} />

                  <h3 className="lg:text-2xl md:text-xl text-lg font-medium">
                    {title}
                  </h3>
                  <p className="md:text-base text-sm text-center">
                    {description}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </section>
      <MyLatestWork />
      <ServicesAndAboutMe />
    </>
  );
}
