import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Dynamic = () => {
  return (
    <ScrollMotionEffect
      effect="zoom-in-up"
      duration="800"
      delay={300}
      className={
        "max-w-[330px] sm:max-w-[390px] h-full  lg:max-w-full md:pt-10 lg:pt-0 m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between items-center"
      }
    >
      <Image
        src="/assets/home/manage/qr.png"
        alt="qr"
        width={247}
        height={250}
        className="text-center md:scale-125 relative md:translate-y-20
        md:pb-20 lg:scale-110 lg:translate-y-16 lg:pt-10 lg:pb-12 xl:scale-125 xl:pb-16 xl:translate-y-16"
        quality={100}
      />

      <div>
        <h3 className="font-semibold text-lg text-center md:pt-16">
          Dynamic QR
        </h3>
      </div>
      <div className="w-full lg:w-4/6 m-auto">
        <h4 className="text-base text-center text-gray-400">
          The last QR your company will need. Update on the go. No more printing
          out a new QR every time you update a link.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Dynamic;
