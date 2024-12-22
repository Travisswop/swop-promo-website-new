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
      className="max-w-[420px] md:w-full h-full m-auto bg-[#F5F5F5] border border-gray-200  rounded-3xl p-4 flex flex-col justify-between overflow-hidden "
    >
      {/* <div className="w-[25%] m-auto"> */}
      <div className=" w-1/2 m-auto scale-125 ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "block" }}
          className=" "
        >
          <source src="/assets/home/smart-site/lead.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="m-auto pt-4">
        <h3 className="m-auto font-semibold text-lg text-center">Leads</h3>
      </div>

      <div className=" lg:w-2/3 m-auto">
        <h5 className="text-base text-center text-gray-400">
          Leads from your Smartsites flow right to the dashboard where you earn
          $Swop for verified Leads
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Leads;
