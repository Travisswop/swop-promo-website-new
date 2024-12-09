"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const ProductCards = ({ productList }) => {
  return (
    <div className="gap-6 grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {productList?.map((el, index) => (
        <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
          <Link href={`hardware/${el?.slug}`}>
            <Card shadow="sm" isPressable className="bg-[#F5F5F5] h-full">
              <CardBody className="overflow-visible p-4 items-center justify-center">
                {/* <div className="bg-[#E5E5E5] w-[16%] flex justify-center mx-auto  mt-4 rounded-full">
                  <p className="text-md text-stone-950 text-center max-w-[600px] mx-auto p-1">
                    {el.size}
                  </p>
                </div> */}

                <Image
                  // shadow='sm'
                  height={250}
                  width={350}
                  alt={el.title}
                  style={{ objectFit: "contain" }}
                  className="w-full object-cover h-auto lg:h-[420px] "
                  src={el.img}
                />
                <h2 className="mt-3 text-lg  text-stone-950 text-center font-bold pb-2">
                  {el.title}
                </h2>
                <p className="text-sm text-gray-400 text-center mt-1">
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
