import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Bank = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="700"
      className="max-w-[420px] md:w-full h-full m-auto bg-[#F5F5F5] rounded-3xl border border-gray-200  p-4 flex flex-col justify-between"
    >
      <div className="relative h-[185px] w-full">
        <Image
          src="/assets/home/smart-site/bank.svg"
          alt="bank"
          width={300}
          height={150}
          quality={100}
          className="m-auto absolute top-0 left-0 right-0 bottom-0 scale-y-110 md:scale-150 md:px-2"
        />
      </div>
      <div className="m-auto">
        <h3 className="m-auto font-semibold text-lg text-center">
          Bank Yourself
        </h3>
      </div>

      <div className="lg:w-2/3 m-auto">
        <h5 className="text-base text-center text-gray-400">
          Accept Payments directly your Smartsites and it deposits instantly in
          your wallet.
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Bank;
