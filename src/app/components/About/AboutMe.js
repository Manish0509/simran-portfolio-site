"use client";
import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const AboutMe = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const myImages = [
    {
      imageSrc: "/images/Simran-img-1.svg",
      imageAlt: "image-1",
    },
    {
      imageSrc: "/images/Simran-img-2.svg",
      imageAlt: "image-2",
    },
    {
      imageSrc: "/images/Simran-img-3.svg",
      imageAlt: "image-3",
    },
  ];

  const sections = [
    {
      title: "Fav Design Books",
      imageSrc: "/images/fav-books.svg",
      imageAlt: "favorite-books-img",
      iconSrc: "/images/love-book.gif",
      iconAlt: "love-books-icon",
      items: [
        "Don't Make Me Think",
        "100 Things Every Designer Needs to Know About People",
        "The Design of Everyday Things",
        "Interviewing Users: How to Uncover Compelling Insights",
        "Laws of UX",
        "Designing Interfaces",
        "The Elements of User Experience",
        "Inspired: How to Create Tech Products Customers Love",
      ],
    },
    {
      title: "Interests",
      imageSrc: "/images/interests.svg",
      imageAlt: "interests-img",
      iconSrc: "/images/valentines-day.gif",
      iconAlt: "heart-icon",
      items: [
        "Attending Design Workshops",
        "Black & White Illustrations & Painting",
        "Calligraphy",
        "Mandala Art",
        "Reading",
        "Writing",
        "Love to Eat Icecream to make myself more hyper.",
      ],
    },
  ];

  return (
    <>
      <section className="container max-w-[1440px] section-padding mx-auto reveal">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center lg:gap-10 md:gap-8 gap-5">
          {myImages.map(({ imageSrc, imageAlt }, index) => {
            return (
              <img
                className="w-full"
                key={index}
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
              />
            );
          })}
        </div>
        <div className="md:text-center text-left text-base leading-[32px] pt-5 md:pt-8 lg:pt-10">
          <p>
            Hey, I’m <span className="font-semibold">Simran Lalchandani</span>,
            a passionate <span className="font-semibold">UX/UI Designer</span>{" "}
            crafting seamless digital experiences. Originally from{" "}
            <span className="font-semibold">Satna, Madhya Pradesh</span>, I now
            call <span className="font-semibold">Ahmedabad, Gujarat</span> home,
            currently living in{" "}
            <span className="font-semibold">Dubai, UAE</span>. My journey began
            with a{" "}
            <span className="font-semibold">B.E. in Computer Science</span>, but
            my love for art and creativity led me to UX/UI design—where logic
            meets aesthetics to shape intuitive digital solutions.
          </p>
          <p className="pt-3">
            I chose to become a UI/UX designer because it allowed me to bring
            together the two things I’m passionate about: creativity and
            problem-solving. Ever since I was young, I’ve loved to{" "}
            <span className="font-semibold">
              draw, paint, illustrate, and write calligraphy
            </span>
            —anything that let me express myself visually. Over time, I realized
            that design could be more than just a personal outlet—it could be a
            powerful tool to make everyday experiences better for people.
          </p>{" "}
          <p>
            UI/UX design felt like a natural extension of my artistic roots. It
            gave me the opportunity to use visual storytelling and creativity in
            a functional, purposeful way. I’m especially drawn to how it blends
            art with{" "}
            <span className="font-semibold">
              psychology, empathy, and technology
            </span>
            . As a Senior Designer today, I’m not only passionate about crafting
            intuitive interfaces, but also about creating experiences that feel
            thoughtful and human.
          </p>
          <p>
            What continues to drive me is the impact great design can
            have—whether it’s making complex processes feel effortless or
            helping someone navigate a product with confidence. And I still
            bring those early creative influences into my work every day,
            whether it’s in microinteractions, visual hierarchy, or simply the
            joy of crafting beautiful, user-centered designs.
          </p>
          <p className="pt-3">
            Starting as an intern at{" "}
            <span className="font-semibold">Entera</span>, I secured a full-time
            role, refining my skills in user-centric design. At{" "}
            <span className="font-semibold">TatvaSoft</span>, I spent two years
            shaping diverse projects, mastering wire-framing, user testing, and
            problem-solving. After my tenure at TatvaSoft, I continued my
            journey with{" "}
            <span className="font-semibold">Brilworks Software.</span>
          </p>{" "}
          <p className="pt-3">
            Crafting AI, CRM, e-commerce, media & entertainment, travel &
            hospitality, healthcare, cryptocurrency, ed-tech, fintech, fashion,
            advertising, B2B, B2C and SaaS experiences that enhance everyday
            lives. A self-taught designer, my path has been fueled by curiosity,
            hands-on learning, and real-world projects. Growing up in India
            taught me adaptability, and I love weaving cultural richness into my
            designs. Beyond work, I unwind with black-and-white illustrations
            and explore culinary adventures—because food is my second love!
          </p>
          <p className="md:text-center text-left text-base font-semibold pt-3">
            What excites me most? Collaborating with thinkers, dreamers, and
            doers to push creative boundaries and build something extraordinary.{" "}
          </p>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className={`container max-w-[1440px] ${
            section.title === "Interests"
              ? "section-padding"
              : "lg:px-25 md:px-20 px-5"
          } mx-auto reveal`}
        >
          <div
            className={`flex lg:flex-row flex-col-reverse items-center justify-between gap-4 ${
              section.title === "Interests" ? "lg:!flex-row-reverse" : ""
            }`}
          >
            <img src={section.imageSrc} alt={section.imageAlt} loading="lazy" />

            <div>
              <div className="flex items-center gap-2 mb-5">
                <p className="lg:text-[32px] md:text-[28px] text-2xl">
                  {section.title}
                </p>
                <img
                  src={section.iconSrc}
                  width={isMobile ? 36 : 52}
                  height={isMobile ? 36 : 52}
                  alt={section.iconAlt}
                />
              </div>

              <div className="flex flex-col md:gap-5 gap-3">
                {section.items.map((item, itemIndex) => (
                  <div className="flex items-start gap-2" key={itemIndex}>
                    <div className="md:hidden">
                      <div className="!w-3 !h-3 rounded-full header-gradient mt-[5px]"></div>
                    </div>
                    <p className="md:text-xl text-base font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AboutMe;
