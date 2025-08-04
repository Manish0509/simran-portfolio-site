import { scrollToSection } from "@/app/lib/CommonFunction";
import Link from "next/link";
import React from "react";
const Button = ({
  type,
  label,
  labelClass = "",
  variant = "dark",
  redirect,
  className,
  icon,
  scrollingButton,
  ...props
}) => {
  return type ? (
    <button
      className={[
        `primary-button whitespace-nowrap transition-all duration-300`,
        `variant-${variant}`,
        className,
      ].join(" ")}
      {...props}
    >
      <span className={`text ${labelClass}`}>{label}</span>
    </button>
  ) : (
    <Link
      href={redirect || "#"}
      className={[
        `primary-button whitespace-nowrap transition-all duration-300`,
        `variant-${variant}`,
        className,
      ].join(" ")}
      onClick={
        scrollingButton
          ? (e) => scrollToSection(e, redirect.replace("#", ""))
          : ""
      }
      {...props}
    >
      <span className={`text ${labelClass}`}>{label}</span>
    </Link>
  );
};

export default Button;
