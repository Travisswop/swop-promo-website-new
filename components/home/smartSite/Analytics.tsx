import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Analytics = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="500"
      className={
        "max-w-[420px] md:w-full h-full m-auto bg-[#F5F5F5] rounded-3xl border border-gray-200  flex flex-col justify-between lg:col-start-1 lg:row-start-3 xl:col-start-3 xl:row-start-1 2xl:row-start-1 2xl:col-start-3 "
      }
    >
      <div className="relative h-[200px] w-full overflow-hidden rounded-2xl ">
        <Image
          src="/assets/home/smart-site/analytics.png"
          alt="bank"
          width={1000}
          height={1000}
          content="cover"
          quality={100}
          className="m-auto absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-2xl"
        />
      </div>
      <div className="pt-4 z-10">
        <h3 className="m-auto font-semibold text-lg text-center">Analytics</h3>
      </div>

      <div className="px-4 pb-4">
        <h4 className="text-base text-center lg:w-2/3 m-auto text-gray-400">
          Track your employees networking and collect data for your CRM while
          providing insights to increase ROI
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Analytics;
