"use client";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";
import SectionLayout from "@/components/shared/SectionLayout";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import Link from "next/link";

const InteractiveSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 30, blur: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      blur: 0,
      transition: { duration: 0.8, delay: i * 0.03 },
    }),
  };
  const text = "Interactive Layer".split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="container ">
      <div className="relative">
        <div className="absolute left-[-155%] md:left-[-80%] lg:left-[-70%] xl:left-[-55%] top-[-100px] md:top-[-200px] bottom-0 w-full gradient-circle-top h-[500px] md:h-[1000px] -z-10 " />
        <h2
          className={cn(
            "text-3xl md:text-6xl font-semibold text-black text-center leading-tight tracking-normal "
          )}
        >
          Welcome to the
          <span className="block">
            {text.map((word, index) => (
              <ScrollMotionEffect
                effect="fade-up"
                duration={(500 + index * 50).toString()}
                delay={"100"}
                key={index}
                className={cn("font-extrabold inline-block")}
              >
                <motion.div
                  key={index}
                  initial={{ filter: "blur(50px)" }}
                  viewport={{ once: true }}
                  // whileInView={{ filter: "blur(10px)" }}
                  animate={{
                    filter: "blur(0px)",
                    transition: { duration: 1 },
                  }}
                  className={cn(
                    " text-3xl md:text-6xl text-center  text-[#B3B3B3]"
                  )}
                >
                  {word}
                </motion.div>
              </ScrollMotionEffect>
            ))}
          </span>
        </h2>
        <h4 className="max-w-[800px] text-gray-400 text-center mx-auto text-xl pt-6">
          Turn your connections into earnings with Swop—leverage networking to
          unlock rewards, generate leads, and build meaningful relationships
          seamlessly.
        </h4>
        <ScrollMotionEffect
          effect="zoom-in-up"
          duration="500"
          className=" text-sm text-center m-auto py-8 "
        >
          <Link href="#">
            <button className="bg-black text-white rounded-3xl py-3 px-6">
              View Whitepaper
            </button>
          </Link>
        </ScrollMotionEffect>
        {/* <ScrollMotionEffect effect="fade-up" duration="2000">
          <motion.div
            ref={ref}
            initial={isInView ? "hidden" : "hidden"}
            animate={isInView ? "visible" : "visible"}
            className={cn("text-center relative")}
          >
            {text.map((word, index) => (
              <motion.div
                variants={variants}
                custom={index}
                key={index}
                className={cn(
                  "inline-block text-3xl md:text-6xl font-black  text-[#B3B3B3]"
                )}
              >
                {word}{" "}
              </motion.div>
            ))}
          </motion.div>
        </ScrollMotionEffect> */}
        {/* <motion.div
          initial="hidden"
          animate="visible"
          // variants={variants}
          className={cn(
            "xs:text-3xl ms:text-4xl md:text-5xl lg:text-[80px] font-bold text-[#333131] text-center leading-tight tracking-normal pt-5 xl:pt-8  [text-shadow:_0px_4px_4px_rgb(80_80_80_/_0.5)] relative"
          )}
        >
          {text.map((word, index) => (
            <motion.div
              variants={variants}
              custom={index}
              key={index}
              className="text-[#333131] inline-block"
            >
              {word}
            </motion.div>
          ))}
        </motion.div> */}

        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute z-50 top-[55%] right-[15%] md:top-[55%] md:right-[22%] xl:top-[50%] xl:right-[30%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={50}
            height={50}
            className=""
            quality={100}
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"100"}
          className="absolute z-50 top-[90%] left-[10%] md:top-[80%] md:left-[20%] xl:top-[90%] xl:left-[30%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className=""
          />
        </ScrollMotionEffect>
        <div className="flex justify-center flex-1 relative -translate-x-6 md:-translate-x-10 xl:w-2/4 text-center m-auto">
          <div className="w-[70%] m-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{ display: "block" }}
            >
              <source src="/assets/home/hero-bg-jvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default InteractiveSection;
