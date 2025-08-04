"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const socialLinks = [
    {
      altText: "Behive",
      imageSrc: "/images/behive.svg",
      redirect: "https://www.behance.net/simranlalchandani_be",
    },
    {
      altText: "LinkedIn",
      imageSrc: "/images/linkedin.svg",
      redirect: "https://www.linkedin.com/in/simran-lalchandani-18b92718b/",
    },
    {
      altText: "Instagram",
      imageSrc: "/images/instagram.svg",
      redirect: "https://www.instagram.com/art.with_simmie/",
    },
  ];
  return (
    <div className="container max-w-[1440px] section-padding !py-10 mx-auto">
      <p className="text-center text-[#D3BBC9] lg:text-[82px] lg:leading-normal md:text-6xl sm:text-4xl text-[34px]">
        Let’s work together
      </p>
      <p className="lg:text-[32px] md:text-[28px] text-2xl text-center bg-clip-text text-transparent big-text-gradient">
        To create something great!
      </p>

      <div className="flex flex-row items-center justify-center gap-5 my-10">
        {socialLinks.map(({ altText, imageSrc, redirect }) => {
          return (
            <Link
              key={altText}
              href={redirect}
              className="footer-social-link lg:w-[62px] w-[50px] lg:h-[62px] h-[50px] bg-black flex items-center justify-center rounded-full"
              target="_blank"
            >
              <Image
                className="md:w-8 md:h-8 w-6 h-6"
                src={imageSrc}
                width="32"
                height="32"
                alt={altText}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <span>Designed with&nbsp;</span>
        <Image
          src="/images/valentines-day.gif"
          width="32"
          height="32"
          alt="heart-icon"
        />
        <span>&nbsp;by Simran Lalchandani</span>
      </div>
    </div>
  );
};

export default Footer;
