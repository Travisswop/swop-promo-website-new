import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Build = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="2000"
      className={
        "max-w-[330px] h-full md:col-span-2 lg:col-span-1 lg:max-w-full m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between items-center"
      }
    >
      {/* <Image
        src="/assets/home/manage/build.png"
        alt="build"
        width={150}
        height={263}
        className="text-center"
      /> */}
      <div className="h-[150px] xl:h-[220px] w-full scale-105 md:scale-100 lg:scale-110">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "block" }}
        >
          <source src="/assets/home/manage/build.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <h3 className="font-semibold text-lg text-center py-2">Build</h3>
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

export default Build;
