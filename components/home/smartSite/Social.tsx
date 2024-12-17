import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Leads = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="700"
      className="max-w-[420px] md:w-full h-full m-auto bg-[#F5F5F5] border border-gray-200  rounded-3xl p-4 flex flex-col justify-between"
    >
      <div className="relative h-[185px] w-full">
        <Image
          src="/assets/home/smart-site/social.png"
          alt="bank"
          width={300}
          height={150}
          quality={100}
          className="m-auto absolute top-0 left-0 right-0 bottom-0 rounded-lg"
        />
      </div>
      <div className="m-auto">
        <h3 className="m-auto font-semibold text-lg text-center">
          Social Feed{" "}
        </h3>
      </div>

      <div>
        <h5 className="text-base text-center text-gray-400">
          Tag¹ is designed to add a digital layer to your physical products. As
          such, explore a variety of form factors and styles for various
          products.
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Leads;
