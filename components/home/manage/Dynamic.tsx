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
        width={147}
        height={210}
        className="text-center md:scale-125 relative md:translate-y-10 lg:scale-110 xl:scale-125 xl:translate-y-14"
        quality={100}
      />

      <div>
        <h3 className="font-semibold text-lg text-center md:pt-16">
          Dynamic QR
        </h3>
      </div>
      <div>
        <h4 className="text-base text-center text-gray-400">
          Tag¹ facilitates an instant and connection. Activate immersive brand
          experiences with just a tap.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Dynamic;
