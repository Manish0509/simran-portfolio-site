import React from "react";
import Button from "../Common/Button";
import Heading from "../Common/Heading";

const ArtHeroSection = () => {
  return (
    <section className="work-banner">
      <div className="h-screen min-h-[600px] max-h-[980px]">
        <div className="container max-w-[1440px] section-padding mx-auto">
          <img
            src="/images/arts-tech.svg"
            alt="Arts Steps"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl"
          />
          <div className="flex flex-col items-center lg:justify-start justify-center 2xl:justify-center lg:pt-[150px] 2xl:pt-0 min-h-[600px] max-h-[700px] h-screen">
            <Heading
              type="h1"
              className="text-off-white text-center lg:!text-[52px] lg:!leading-[74px]"
              text={
                <>
                  Not just art—my inner voice,{" "}
                  <span className="bg-clip-text text-transparent header-gradient">
                    unfiltered.
                  </span>
                </>
              }
            />
            <p className="text-off-white text-center lg:text-2xl md:text-xl text-lg lg:pt-5 lg:pb-10 md:pb-8 py-4">
              Every stroke holds a memory, a feeling, a voice — a story beyond
              words.
            </p>
            <Button
              label="Explore My Artwork"
              target="_blank"
              redirect="https://www.instagram.com/art.with_simmie/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtHeroSection;
