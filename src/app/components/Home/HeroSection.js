"use client";
import React from "react";
import Heading from "../Common/Heading";
import Button from "../Common/Button";

const HeroSection = () => {
  const handleViewPDF = () => {
    window.open("/assets/Simran_Lalchandani_UAE_UIUX DESIGNERCV.pdf", "_blank");
  };
  return (
    <section className="bg-black">
      <div className="hero-banner h-screen min-h-[600px] max-h-[980px]">
        <div className="container max-w-[1440px] section-padding mx-auto">
          <div className="flex flex-col items-center 2xl:pt-[120px] justify-center min-h-[600px] max-h-[700px] h-screen">
            <Heading
              type="h1"
              className="text-off-white text-center lg:!text-[58px] lg:!leading-[74px]"
              text={
                <>
                  Crafting digital experiences,
                  <br className="lg:block hidden" /> painting pixels, drawing
                  insights,
                  <br className="lg:block hidden" /> and reading users.
                </>
              }
            />
            <h2 className="lg:text-2xl md:text-xl text-base text-center text-off-white mt-5 mb-10">
              Hello, I’m Simran Lalchandani&nbsp;
              <span className="bg-clip-text text-transparent theme-gradient font-medium">
                UX/UI Designer
              </span>
              , addicted to art & passionate to work.
            </h2>
            <Button type="button" onClick={handleViewPDF} label="View Resume" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
