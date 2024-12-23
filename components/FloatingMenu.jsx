"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@nextui-org/react";
import { useMemo } from "react";

const FloatingMenu = () => {
  const pathname = usePathname();
  const menuItems = useMemo(
    () => [
      { title: "Software", slug: "/software" },
      { title: "Hardware", slug: "/hardware" },
      { title: "Company", slug: "/company" },
    ],
    []
  );
  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-black">
      <div className="bounce-nav h-[92px] absolute -top-28 m-auto left-0 right-0 flex justify-center items-center">
        <div className="hidden md:flex justify-between items-center gap-2  text-gray-300  bg-[#191919] rounded-full p-3 h-12 lg:w-[400px] w-[300px] -translate-x-5 lg:-translate-x-0">
          <div className="bg-white rounded-full hover:bg-[#AF97D4] transition-all duration-300 ease-in-out -translate-x-1">
            <Link href="/">
              <Image
                src="/assets/site-logo/navicon.png"
                alt="Swop Logo"
                width={35}
                height={35}
                quality={100}
                priority
                className=" rounded-full animate-slow-bounce "
              />
            </Link>
          </div>

          <div className="flex-grow  flex items-center justify-around">
            {menuItems.map((el) => (
              <div key={el.slug} className="">
                <Link
                  href={el.slug}
                  className={`text-sm md:text-base hover:text-[#AF97D4] transition-all duration-300 ease-in-out ${pathname === el.slug ? "text-[#AF97D4]" : ""}`}
                >
                  {el.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
