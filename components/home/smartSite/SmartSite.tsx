import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const SmartSite = () => {
  return (
    <ScrollMotionEffect
      effect="zoom-in-up"
      duration="1000"
      className={
        "max-w-[420px] md:w-full h-full m-auto row-span-2 bg-[#F5F5F5] rounded-3xl border border-gray-200  md:col-start-2 md:row-start-1 xl:row-start-1 xl:col-start-2"
      }
    >
      <div className="bg-[#F5F5F5] rounded-3xl p-4 w-full h-full flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-center p-5">
            Upgrade to A Smartsite
          </h3>
        </div>
        <Image
          src="/assets/home/smart-site/smartsite.svg"
          alt="SmartSite"
          width={350}
          height={380}
          className="m-auto relative left-3"
          quality={100}
        />
        <div>
          <h4 className="text-base text-center text-gray-400 pt-4 lg:pt-0">
            Your customer routing tool.
          </h4>
          <h4 className="text-base text-center text-gray-400 pt-4">
            Build. Grow. Connect.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default SmartSite;
