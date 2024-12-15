"use client";
import React, { useMemo } from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import { delay, motion, px } from "framer-motion";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 50, blur: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      blur: 0,
      transition: { duration: 0.5, delay: i * 0.03 },
    }),
  };

  const text1 = "Get Paid to Network".split("");
  // const text2 = "   Paid ".split("");
  // const text3 = "        to".split("");
  // const text4 = "Network".split("");
  // const text5 = "Get paid to".split("");

  // const text6 = "network".split("");

  return (
    <div className="container z-50 flex flex-col items-center justify-center w-full gap-6 md:flex-row 2xl:pt-10 ">
      <div>
        <div className="flex justify-center pt-12">
          <ScrollMotionEffect effect="zoom-in" duration="2000">
            <Image
              src="/assets/home/heroImage.png"
              alt="heroImage"
              width={500}
              height={500}
              quality={100}
              className="w-[500px] h-auto"
            />
          </ScrollMotionEffect>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          // variants={variants}
          className={cn(
            "text-4xl md:text-[54px] font-bold text-[#333131] text-center leading-tight tracking-normal pt-5 md:pt-10  [text-shadow:_0px_4px_4px_rgb(80_80_80_/_0.5)] relative"
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

          {/* {text2.map((word, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: index / 12 }}
              key={index}
              className="text-[#B396FF]"
            >
              {word}
            </motion.span>
          ))}
          {text3.map((word, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: index / 12 }}
              key={index}
            >
              {word}
            </motion.span>
          ))}
          <br />
          {text4.map((word, index) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: index / 12 }}
              key={index}
              className="text-[#B396FF] text-3xl md:text-5xl leading-10"
            >
              {word}
            </motion.span>
          ))} */}
        </motion.div>
        <h4 className="text-gray-400 text-center text-xl py-8 max-w-[780px]">
          Turn your connections into earnings with Swop—leverage networking to
          unlock rewards, generate leads, and build meaningful relationships
          seamlessly.
        </h4>

        <div className="flex justify-center gap-4">
          <Link href="href">
            <ScrollMotionEffect effect="fade-up" duration="1000">
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
            <ScrollMotionEffect effect="fade-up" duration="1000">
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

    // <SectionLayout bg={"bg-transparent"}>
    //   <div className="z-50 flex flex-col-reverse items-center w-full gap-6 md:flex-row">
    //     <motion.div
    //       className="flex-1"
    //       initial="hidden"
    //       animate="visible"
    //       exit={{ opacity: 0, transition: { duration: 1 } }}
    //       variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    //     >
    //       <motion.h1
    //         className="text-[30px] md:text-[56px] font-[750] text-black text-center leading-tight tracking-normal"
    //         variants={variants}
    //       >
    //         {text.map((word, index) => (
    //           <span key={index} className="inline-block">
    //             {word}{" "}
    //           </span>
    //         ))}
    //       </motion.h1>
    //       <motion.p
    //         variants={variants}
    //         className="text-black text-2xl md:text-[36px] mt-2 md:mt-2 text-center"
    //       >
    //         And Get Paid to Network
    //       </motion.p>

    //       <motion.div
    //         variants={variants}
    //         className="flex justify-center mt-5 md:mt-6"
    //       >
    //         <Link
    //           href={"https://swop-desktop.vercel.app"}
    //           target="_blank"
    //           className="flex items-center justify-center px-6 py-2 mb-2 font-medium text-black border-2 border-black bg-none hover:bg-black hover:text-white text-md md:text-lg md:px-10 me-0 md:me-6 rounded-xl"
    //         >
    //           Get Started
    //         </Link>
    //       </motion.div>
    //     </motion.div>
    //     <div className="flex justify-center flex-1">
    //       <div className="w-[70%]">
    //         <video
    //           autoPlay
    //           loop
    //           muted
    //           playsInline
    //           preload="auto"
    //           style={{ display: "block" }}
    //         >
    //           <source src="/assets/home/hero-bg-jvideo.mp4" type="video/mp4" />
    //           Your browser does not support the video tag.
    //         </video>
    //       </div>
    //     </div>
    //   </div>
    // </SectionLayout>
  );
};

export default React.memo(HeroSection);
