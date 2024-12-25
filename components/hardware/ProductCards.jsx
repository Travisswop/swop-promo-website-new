"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const ProductCards = ({ productList }) => {
  return (
    <div className="gap-6 grid auto-rows-min  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {productList?.map((el, index) => (
        <ScrollMotionEffect
          effect="fade-up"
          duration="800"
          delay={500}
          key={index}
        >
          <Link href={`hardware/${el?.slug}`}>
            <Card
              shadow="sm"
              isPressable
              className="bg-[#F5F5F5] h-full border border-gray-200 hover:-translate-y-3 transition-all duration-300 ease-in-out"
            >
              <CardBody className="overflow-visible p-4 items-center justify-center">
                {/* <div className="bg-[#E5E5E5] w-[16%] flex justify-center mx-auto  mt-4 rounded-full">
                  <p className="text-md text-stone-950 text-center max-w-[600px] mx-auto p-1">
                    {el.size}
                  </p>
                </div> */}

                <Image
                  height={150}
                  width={1000}
                  alt={el.title}
                  style={{ objectFit: "contain" }}
                  className="w-full object-cover h-auto  hidden lg:block xl:hidden"
                  src={el.img}
                  quality={100}
                />
                <Image
                  height={200}
                  width={1000}
                  alt={el.title}
                  style={{ objectFit: "contain" }}
                  className="w-full object-cover h-auto  hidden xl:block 2xl:hidden"
                  src={el.img}
                  quality={100}
                />
                <Image
                  height={250}
                  width={1000}
                  alt={el.title}
                  style={{ objectFit: "contain" }}
                  className="w-full object-cover h-auto  hidden 2xl:block "
                  src={el.img}
                  quality={100}
                />
                <div className="relative h-[150px] lg:h-[250px] w-full lg:hidden">
                  <Image
                    width={800}
                    height={150}
                    alt={el.title}
                    style={{ objectFit: "contain" }}
                    src={el.img}
                    className="absolute w-full h-full object-contain"
                    quality={100}
                  />
                </div>
                <h2 className="mt-3 text-xl  text-stone-950 text-center font-bold pb-2">
                  {el.title}
                </h2>
                <p className="text-base text-gray-400 text-center mt-1 w-full lg:w-10/12">
                  {el.decs}
                </p>
              </CardBody>
            </Card>
          </Link>
        </ScrollMotionEffect>
      ))}
    </div>
  );
};

export default ProductCards;
