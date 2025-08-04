import React from "react";
import ArtHeroSection from "@/app/components/Art/ArtHeroSection";
import ArtGallery from "@/app/components/Art/ArtGallery";

export const metadata = {
  title: "Artworks by Simran Lalchandani",
};
const Arts = () => {
  return (
    <>
      <ArtHeroSection />
      <ArtGallery />
    </>
  );
};

export default Arts;
