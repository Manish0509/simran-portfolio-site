"use client";
import { useEffect } from "react";
import { scrollEffect } from "@/app/lib/CommonFunction";
import Button from "../Common/Button";
import Heading from "../Common/Heading";

const WorkHeroSection = () => {
  useEffect(() => {
    scrollEffect();
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  return (
    <section className="work-banner">
      <div className="h-screen min-h-[600px] max-h-[980px]">
        <div className="container max-w-[1440px] section-padding mx-auto">
          <img
            src="/images/work-tech.svg"
            alt="Process Steps"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl"
          />
          <div className="flex flex-col items-center lg:justify-start justify-center 2xl:justify-center lg:pt-[150px] 2xl:pt-0 min-h-[600px] max-h-[700px] h-screen">
            <Heading
              type="h1"
              className="text-off-white text-center lg:!text-[52px] lg:!leading-[74px]"
              text={
                <>
                  Pixels with purpose, UX with&nbsp;
                  <span className="bg-clip-text text-transparent header-gradient">
                    heart
                  </span>
                </>
              }
            />
            <p className="text-off-white text-center lg:text-2xl md:text-xl text-lg lg:pt-5 lg:pb-10 md:pb-8 py-4">
              Designing journeys; not just screens, where function meets
              flawless design.
            </p>
            <Button
              redirect="#latest-casestudy"
              label="Explore All Case Studies"
              scrollingButton
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHeroSection;
