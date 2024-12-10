import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Leads = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className="max-w-[420px] md:w-full h-full m-auto bg-[#F5F5F5] rounded-2xl p-4 flex flex-col justify-between"
    >
      <div className="relative h-[185px] w-full">
        <Image
          src="/assets/home/smart-site/leads.svg"
          alt="bank"
          width={300}
          height={150}
          className="m-auto absolute top-0 left-0 right-0 bottom-0"
        />
      </div>
      <div className="m-auto py-4">
        <h3 className="m-auto font-semibold text-lg text-center">Leads</h3>
      </div>

      <div>
        <h5 className="text-base text-center text-gray-400">
          Leads from your Smartsites flow right to the dashboard where you earn
          $Swop for verified Leads
        </h5>
      </div>
    </ScrollMotionEffect>
  );
};

export default Leads;
