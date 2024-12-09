import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "w-[330px] h-[444px] lg:w-full m-auto bg-[#ffffff] rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between items-center"
      }
    >
      <Image
        src="/assets/home/manage/Macbook.png"
        alt="Macbook"
        width={486}
        height={262}
        className="text-center lg:h-[262px] m-auto"
      />

      <div>
        <h3 className="font-semibold text-lg text-center">
          Manage The Entire Team
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

export default Team;
