"use client";
import { useEffect } from "react";
import { scrollEffect } from "@/app/lib/CommonFunction";

const ArtGallery = () => {
  const arts = [
    {
      imageSrc: "/images/art/Art-1.png",
      imageAlt: "art1-icon",
    },
    {
      imageSrc: "/images/art/Art-2.png",
      imageAlt: "art2-icon",
    },
    {
      imageSrc: "/images/art/Art-3.png",
      imageAlt: "art3-icon",
    },
    {
      imageSrc: "/images/art/Art-4.jpg",
      imageAlt: "art4-icon",
    },
    {
      imageSrc: "/images/art/Art-5.jpg",
      imageAlt: "art5-icon",
    },
    {
      imageSrc: "/images/art/Art-6.jpg",
      imageAlt: "art6-icon",
    },
    {
      imageSrc: "/images/art/Art-7.jpg",
      imageAlt: "art7-icon",
    },
    {
      imageSrc: "/images/art/Art-8.jpg",
      imageAlt: "art8-icon",
    },
    {
      imageSrc: "/images/art/Art-9.jpg",
      imageAlt: "art9-icon",
    },
    {
      imageSrc: "/images/art/Art-10.jpg",
      imageAlt: "art10-icon",
    },
    {
      imageSrc: "/images/art/Art-11.jpg",
      imageAlt: "art11-icon",
    },
    {
      imageSrc: "/images/art/Art-12.jpg",
      imageAlt: "art12-icon",
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
    <section className="container mx-auto max-w-[1440px] section-padding">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-7.5 gap-6">
        {arts.map(({ imageSrc, imageAlt }, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[600px] h-full max-h-[600px] flex items-center justify-center rounded-5 shadow-art reveal"
            >
              <img
                src={imageSrc}
                alt={imageAlt}
                className="rounded-5"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArtGallery;
