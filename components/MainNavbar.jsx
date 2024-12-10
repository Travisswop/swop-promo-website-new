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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      className={`pb-0 pt-2 md:pb-3 md:pt-4 fixed top-0 transition-colors duration-300 ${navbarColor ? "!bg-white shadow-small duration-1000" : "bg-transparent"}`}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/assets/site-logo/swop-logo.png"
              alt="Swop Logo"
              width={150}
              height={100}
              className="w-[90px] md:w-[150px] h-auto"
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex gap-4 bg-[#F6F6F6] rounded-full py-2 px-6"
        justify="center"
      >
        <NavbarItem>
          <Link href="/">
            <Image
              src="/assets/site-logo/navicon.png"
              alt="Swop Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </NavbarItem>
        {menuItems.map((el) => (
          <NavbarItem key={el.slug}>
            <Link
              href={el.slug}
              className={`text-md md:text-lg hover:text-[#AF97D4] ${pathname === el.slug ? "text-[#AF97D4]" : ""}`}
            >
              {el.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="flex items-center">
        <NavbarItem>
          <Link
            href="/get-demo"
            className="flex items-center gap-x-2 bg-[#F6F6F6] p-1.5 md:p-2 rounded-full text-sm md:text-lg font-semibold group hover:text-[#AF97D4]"
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
  );
};

export default React.memo(MainNavbar);
