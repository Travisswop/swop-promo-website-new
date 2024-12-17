"use client";
import React, { useMemo } from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { delay, motion, px, spring } from "framer-motion";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 30, blur: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      blur: 0,
      transition: { duration: 0.5, delay: i * 0.04 },
    }),
  };

  const text1 = "Get Paid to Network".split("");

  return (
    <div className="container z-50 flex flex-col items-center justify-center w-full gap-6 md:flex-row 2xl:pt-8 ">
      <div>
        <div className="flex justify-center xs:pt-4 ms:pt-6 lg:pt-16  ">
          <ScrollMotionEffect effect="zoom-in" duration="2000">
            <Image
              src="/assets/home/heroImage.png"
              alt="heroImage"
              width={500}
              height={500}
              quality={100}
              className="w-[500px] xs:h-[215px] ms:h-[254px] sm:h-[300px] md:h-[354px] xl:h-[371px] "
            />
            {/* h-[215px] md:h-[354px] */}
          </ScrollMotionEffect>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          // variants={variants}
          className={cn(
            "xs:text-3xl ms:text-4xl md:text-5xl lg:text-[80px] font-bold text-[#333131] text-center leading-tight tracking-normal pt-5 xl:pt-8   relative"
          )}
        >
          {text1.map((word, index) => (
            <motion.div
              variants={variants}
              custom={index}
              key={index}
              className="text-[#333131] inline-block"
            >
              {word}
            </motion.div>
          ))}
        </motion.div>
        {/* <div
          className={cn(
            "xs:text-3xl ms:text-4xl md:text-5xl lg:text-[80px] font-bold text-[#333131] text-center leading-tight tracking-normal pt-5 xl:pt-6   relative -z-50"
          )}
        >
          {text1.map((word, index) => (
            <ScrollMotionEffect
              effect="fade-up"
              duration={(200 + index * 50).toString()}
              key={index}
              className={cn(
                "inline-block text-3xl md:text-6xl text-center font-black "
              )}
            >
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 3 },
                }}
                className="text-[#333131] inline-block"
              >
                {word}
              </motion.div>
            </ScrollMotionEffect>
          ))}

          
        </div> */}
        <h4 className="text-gray-400 text-center xs:text-sm ms:text-xl py-4 lg:py-6 max-w-[780px]">
          Turn your connections into earnings with Swop—leverage networking to
          unlock rewards, generate leads, and build meaningful relationships
          seamlessly.
        </h4>

        <div className="flex justify-center gap-4">
          <Link href="href">
            <ScrollMotionEffect effect="fade-up" duration="800">
              <Image
                src="/assets/home/app-store.png"
                alt="appStore"
                width={520}
                height={520}
                className="w-[120px] h-auto"
              />
            </ScrollMotionEffect>
          </Link>
          <Link href="href">
            <ScrollMotionEffect effect="fade-up" duration="800">
              <Image
                src="/assets/home/google-play.png"
                alt="googlePlay"
                width={520}
                height={520}
                className="w-[120px] h-auto"
              />
            </ScrollMotionEffect>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);
