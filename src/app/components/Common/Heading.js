"use client";
import React from "react";

const Heading = ({ type, text, className = "", data }) => {
  const Tag = `${type}`; // Dynamically set the heading tag

  // Define styles for different heading levels
  const styles = {
    h1: "xl:text-[52px] lg:text-5xl md:text-[42px] text-[32px] lg:!leading-snug !leading-tight",
    h2: "lg:text-[34px] md:text-3xl text-2xl !leading-snug",
    h3: "md:text-xl text-lg",
    h4: "text-xl",
  };
  if (data) {
    return (
      <Tag
        className={`${styles[type]} ${className} leading-snug`}
        dangerouslySetInnerHTML={{ __html: data }}
      />
    );
  }

  return <Tag className={`${styles[type]} ${className}`}>{text}</Tag>;
};

export default Heading;
