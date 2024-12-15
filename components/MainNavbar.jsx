"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LuUserRound } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Debounce function moved outside to avoid recreation on every render
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const menuItems = useMemo(
    () => [
      { title: "Software", slug: "/software" },
      { title: "Hardware", slug: "/hardware" },
      { title: "Company", slug: "/company" },
    ],
    []
  );

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.querySelector("header").classList.add("!px-0");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`w-full m-auto z-50  fixed top-0  transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}}`}
    >
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className={`container pb-0 pt-2 md:pb-3 md:pt-4 transition-colors duration-300 ${navbarColor ? "!bg-white  duration-1000" : "bg-transparent"}`}
      >
        <NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/assets/site-logo/swop-logo.png"
                alt="Swop Logo"
                width={150}
                height={100}
                className="w-[90px] md:w-[150px]"
                quality={100}
                priority
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className=" hidden md:flex gap-2 lg:gap-4 text-gray-300   rounded-full  "
          justify="center"
        >
          <div className="bounce-nav hidden md:flex justify-center items-center gap-2 lg:gap-4 text-gray-300  bg-[#191919] rounded-full p-2 h-14 ">
            <NavbarItem>
              <div className="bg-white rounded-full">
                <Link href="/">
                  <Image
                    src="/assets/site-logo/navicon.png"
                    alt="Swop Logo"
                    width={40}
                    height={40}
                    quality={100}
                    priority
                    className=" rounded-full animate-slow-bounce"
                  />
                </Link>
              </div>
            </NavbarItem>
            {menuItems.map((el) => (
              <NavbarItem key={el.slug}>
                <Link
                  href={el.slug}
                  className={`text-sm md:text-base hover:text-[#AF97D4] ${pathname === el.slug ? "text-[#AF97D4]" : ""}`}
                >
                  {el.title}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </NavbarContent>

        <NavbarContent justify="end" className="flex items-center">
          <NavbarItem>
            <Link
              href="/get-demo"
              className="flex items-center gap-x-2 bg-[#F6F6F6] p-1.5 md:p-2 rounded-full text-sm md:text-base font-semibold group hover:text-[#AF97D4]"
            >
              <p className="group-hover:text-[#AF97D4]">Get Demo</p>
              <div className="bg-[#282828] p-1 md:p-2 rounded-full ">
                <IoCall className="w-3 h-3 text-white md:w-5 md:h-5 group-hover:text-[#AF97D4]" />
              </div>
            </Link>
          </NavbarItem>
          <NavbarItem className="">
            <Link href={"https://desktop-app-psi.vercel.app/"} target="_blank">
              <div className="bg-[#F6F6F6] p-2 md:p-3 rounded-full">
                <LuUserRound className="w-4 h-4 md:w-7 md:h-7 text-[#282828] hover:text-[#AF97D4]" />
              </div>
            </Link>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>

        <NavbarMenu className="overflow-hidden">
          {menuItems.map((el, index) => (
            <NavbarMenuItem key={el.slug} className="flex flex-row">
              <Link
                className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-[#AF97D4]" : ""} ${index === 0 ? "mt-6" : ""}`}
                href={el.slug}
                onClick={() => setIsMenuOpen(false)}
              >
                {el.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default React.memo(MainNavbar);
