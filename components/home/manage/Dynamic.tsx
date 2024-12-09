import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Dynamic = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "w-[330px] h-[444px] lg:w-full m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between items-center"
      }
    >
      <Image
        src="/assets/home/manage/qr.png"
        alt="qr"
        width={147}
        height={210}
        className="text-center "
      />

      <div>
        <h3 className="font-semibold text-lg text-center">Dynamic QR</h3>
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
