import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const SmartSite = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "min-w-[330px] h-full m-auto row-span-2 bg-[#F5F5F5] rounded-xl md:col-start-2 md:row-start-1 2xl:row-start-1 2xl:col-start-2"
      }
    >
      <div className="bg-[#F5F5F5] rounded-2xl p-4 w-full h-full flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-center p-5">
            Get Your Entire Team A
            <span className="text-[#B396FF]"> Smartsite </span>
          </h3>
        </div>
        <Image
          src="/assets/home/smart-site/smartsite.svg"
          alt="SmartSite"
          width={350}
          height={380}
          className="m-auto relative left-3"
        />
        <div>
          <h4 className="text-base text-center text-gray-400">
            Use your smartsite as your companies town square and share it with
            NFC, QR or Apple Wallet.
          </h4>
        </div>
      </div>
    </ScrollMotionEffect>
  );
};

export default SmartSite;
