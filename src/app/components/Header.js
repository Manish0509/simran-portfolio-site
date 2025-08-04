"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 0);
      setMenuOpen(false); // close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Work", route: "/work/" },
    { name: "About", route: "/about/" },
    { name: "Art", route: "/art/" },
    // { name: "Contact", route: "/contact/" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="w-full text-white">
      <div
        className={`fixed left-[50%] translate-x-[-50%] z-50 transition-all duration-300 w-full max-w-[1220px] mx-auto flex items-center justify-between ${
          !active ? "header-initial header-blur" : "header bg-[#000000e6]"
        } ${active ? "max-w-full" : ""} `}
      >
        <div className="container max-w-[1280px] mx-auto lg:px-0 md:px-0 px-2.5 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width="51"
              height="50"
              priority="true"
            />
          </Link>

          <button
            className="block lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="currentColor"
                    d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
                />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center lg:gap-12.5 gap-10">
            {navigationLinks.map(({ name, route }) => (
              <Link
                key={name}
                href={route}
                className={`transition-colors hover-underline-animation left last:mr-6 ${
                  pathname === route ? "active" : "pb-[2px]"
                }`}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="fixed top-20 right-0 p-5 text-off-white flex rounded-4xl flex-col items-center w-full z-50 lg:hidden backdrop-blur-md bg-black border border-[#4b4b4b]"
            >
              {navigationLinks.map(({ name, route, scroll }) => (
                <Link
                  key={name}
                  href={scroll ? `#${route}` : route}
                  className={`block pt-3 text-base font-thin hover-underline-animation left transition-colors ${
                    pathname === route ? "active" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
