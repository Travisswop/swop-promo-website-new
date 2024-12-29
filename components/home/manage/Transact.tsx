import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import Image from "next/image";
import React from "react";

const Transact = () => {
  return (
    <ScrollMotionEffect
      effect="fade-up"
      duration="1000"
      delay={"200"}
      className={
        "max-w-[330px] sm:max-w-[390px]  h-full lg:max-w-full m-auto bg-[#ffffff] rounded-2xl p-6 flex flex-col justify-between items-center"
      }
    >
      {/* <Image
        src="/assets/home/manage/transact.png"
        alt="transact"
        width={200}
        height={263}
        className="text-center"
      /> */}
      <div className="h-[150px] xl:h-[220px] xs:w-[90%] sm:w-[75%] md:w-[90%] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "block" }}
        >
          <source src="/assets/home/manage/transact.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div>
        <h3 className="font-semibold text-lg text-center py-2">Transact</h3>
      </div>
      <div className="w-full lg:w-4/6 m-auto">
        <h4 className="text-base text-center text-gray-400">
          Accept Crypto payment for your store today. Instantly convert card
          payments or crypto into USDC.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Transact;
