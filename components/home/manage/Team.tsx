import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "max-w-[330px] h-[444px] lg:max-w-full m-auto bg-[#ffffff] rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between items-center overflow-hidden"
      }
    >
      {/* <Image
        src="/assets/home/manage/Macbook.png"
        alt="Macbook"
        width={486}
        height={262}
        className="text-center lg:h-[262px] m-auto"
      /> */}

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ display: "block" }}
        className="h-[300px]  w-[100%] scale-110 lg:scale-125 lg:translate-y-8 xl:scale-150 xl:translate-y-0 -z-50 "
      >
        <source
          src="/assets/home/manage/manageTheEntireTeam.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div>
        <h3 className="font-semibold text-lg text-center z-50">
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
