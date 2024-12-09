import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Messaging = () => {
  return (
    <ScrollMotionEffect
      delay={"0"}
      effect="fade-up"
      duration="2000"
      className={
        "min-w-[330px] h-full m-auto bg-[#F5F5F5] rounded-2xl p-4 flex flex-col justify-between"
      }
    >
      <div className="relative h-[185px] w-[422px] md:w-[300px] lg:w-[430px] 2xl:w-full m-auto">
        <ScrollMotionEffect
          effect="fade-up"
          duration="2000"
          delay={"0"}
          className="m-auto absolute top-[15%] left-4 right-0 bottom-0 w-[46%] md:w-[65%] lg:w-[45%] -z-10"
        >
          <Image
            src="/assets/home/smart-site/messagesBack.svg"
            alt="bank"
            width={300}
            height={150}
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"300"}
          className="m-auto z-50 absolute top-[0%] left-[40%] lg:left-[45%] w-[45%]  shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageTravis.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="m-auto z-50 absolute bottom-[50%] left-[1%] xl:left-[2%]  w-[35%] shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageSalman.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"800"}
          className="m-auto z-50 absolute bottom-[18%] right-[0%]  w-[35%] md:right-[-5%] lg:right-[0%] shadow-xl rounded-lg"
        >
          <Image
            src="/assets/home/smart-site/messageArjo.svg"
            alt="bank"
            width={300}
            height={150}
            className=""
          />
        </ScrollMotionEffect>
      </div>
      <div className="m-auto py-4 bg-[#F5F5F5]">
        <h3 className="m-auto font-semibold text-lg text-center ">
          Encrypted Messaging
        </h3>
      </div>

      <div className="bg-[#F5F5F5]">
        <h4 className="text-center text-base">
          Message directly through your Swop Smartsite and send payments, tokens
          and more.
        </h4>
      </div>
    </ScrollMotionEffect>
  );
};

export default Messaging;
