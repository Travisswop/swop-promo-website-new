"use client";
import React, { useMemo } from "react";
import SectionLayout from "../shared/SectionLayout";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fira_Code } from "next/font/google";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const text1 = useMemo(() => "The Digital Business Card".split("  "), []);
  const text2 = useMemo(() => "That Pays You to Network".split("  "), []);

  return (
    <SectionLayout bg={"bg-transparent"}>
      <div className="z-50 flex flex-col items-center justify-center w-full gap-6 md:flex-row pt-10 pb-10 md:pb-6">
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <ScrollMotionEffect effect="flip-up" duration="1000">
            <h1
              className={cn(
                "text-2xl md:text-5xl font-bold text-black text-center leading-tight tracking-normal [text-shadow:_0px_4px_4px_rgb(80_80_80_/_0.5)]",
                fira.className
              )}
            >
              The <span className="text-[#B396FF]"> Digital </span>Business Card
              <span className="block text-2xl md:text-3xl py-6">
                That Pays You to
                <span className="text-[#B396FF]"> Network </span>
              </span>
            </h1>
          </ScrollMotionEffect>
          <div className="flex justify-center pt-12">
            <ScrollMotionEffect effect="zoom-in" duration="2000">
              <Image
                src="/assets/home/heroImage.svg"
                alt="heroImage"
                width={500}
                height={800}
                quality={100}
              />
            </ScrollMotionEffect>
          </div>
          <div className="flex justify-center gap-4 pt-14">
            <Link href="href">
              <ScrollMotionEffect effect="zoom-in" duration="1000">
                <Image
                  src="/assets/home/app-store.png"
                  alt="appStore"
                  width={120}
                  height={120}
                  quality={100}
                />
              </ScrollMotionEffect>
            </Link>
            <Link href="href">
              <ScrollMotionEffect effect="zoom-in" duration="1000">
                <Image
                  src="/assets/home/google-play.png"
                  alt="googlePlay"
                  width={120}
                  height={120}
                  quality={100}
                />
              </ScrollMotionEffect>
            </Link>
          </div>
        </motion.div>
      </div>
    </SectionLayout>

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
