"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionLayout from "../shared/SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

import { TiBusinessCard } from "react-icons/ti";
import { IoIosWatch } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { IoRestaurantOutline, IoCodeSharp } from "react-icons/io5";
import { RiChatSettingsLine } from "react-icons/ri";
import { cn } from "@nextui-org/react";

const Icons = ({ icon, title, scale }) => {
  return (
    <Image
      src={icon}
      alt={title}
      className={cn("", scale && "scale-90 ")}
      width={80}
      height={80}
    />
  );
};

const ConectMobileSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [hoverImgUrl, setHoverImgUrl] = useState(null);
  const [hoverVideoUrl, setHoverVideoUrl] = useState(null);
  const [isDelayed, setIsDelayed] = useState(false);

  const videoRef = useRef(null);

  const featuresInfoLeft = useMemo(
    () => [
      {
        id: 1,
        icon: "/assets/hardware/BusinessCards.png",
        title: "Business Cards",
        imageUrl: "/assets/video/businesscards.png",
        videoUrl: "/assets/video/business-card.mp4",
        scale: true,
      },
      {
        id: 2,
        icon: "/assets/hardware/Wearables.png",
        title: "Wearables",
        imageUrl: "/assets/video/wearables.png",
        videoUrl: "/assets/video/wearables.mp4",
      },
      {
        id: 3,
        icon: "/assets/hardware/Transactions.png",
        title: "Transactions",
        imageUrl: "/assets/video/transactions.png",
        videoUrl: "/assets/video/transactions.mp4",
      },
    ],
    []
  );

  const featuresInfoRight = useMemo(
    () => [
      {
        id: 4,
        icon: "/assets/hardware/HospitalityRestaurants.png",
        title: `Hospitality/
        Restaurants`,
        imageUrl: "/assets/video/restaurants.png",
        videoUrl: "/assets/video/restaurants.mp4",
      },
      {
        id: 5,
        icon: "/assets/hardware/Customize.png",
        title: "Customize",
        imageUrl: "/assets/video/customize.png",
        videoUrl: "/assets/video/cstomizable-crad-tapp.mp4",
      },
      {
        id: 6,
        icon: "/assets/hardware/Embeddables.png",
        title: "Embeddables",
        imageUrl: "/assets/video/embeddables.png",
        videoUrl: "/assets/video/hardware-embeddables.mp4",
      },
    ],
    []
  );

  const featuresInfoAll = useMemo(
    () => [...featuresInfoLeft, ...featuresInfoRight],
    [featuresInfoLeft, featuresInfoRight]
  );

  const hoverItemSelect = useCallback((value) => {
    setHoveredItem(value?.id);
    setHoverImgUrl(value?.imageUrl);
    setHoverVideoUrl(value?.videoUrl);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    // Prefetch video URL
    if (value?.videoUrl) {
      fetch(value.videoUrl, { method: "HEAD" })
        .then((response) => {
          if (response.ok) {
            console.log(`Prefetched video: ${value.videoUrl}`);
          }
        })
        .catch((error) =>
          console.error(`Failed to prefetch video: ${value.videoUrl}`, error)
        );
    }
  }, []);

  useEffect(() => {
    let playTimer;
    let delayTimer;

    if (hoveredItem) {
      if (hoveredItem === 5) {
        delayTimer = setTimeout(() => {
          setIsDelayed(true);
          playTimer = setTimeout(() => {
            setPlayVideo(true);
            if (videoRef.current) {
              videoRef.current.play();
            }
          }, 2000);
        }, 3000);
      } else {
        setIsDelayed(false);
        playTimer = setTimeout(() => {
          setPlayVideo(true);
          if (videoRef.current) {
            videoRef.current.play();
          }
        }, 2000);
      }
    } else {
      setPlayVideo(false);
      setIsDelayed(false);
    }

    return () => {
      clearTimeout(playTimer);
      clearTimeout(delayTimer);
    };
  }, [hoveredItem]);

  const animationProps = useMemo(() => {
    if (hoveredItem === 5 && !isDelayed) {
      return {
        y: [0, 0, 0],
        scale: [1, 1.5, 1],
      };
    } else {
      return {
        y: [0, 0, hoveredItem === 5 ? 210 : 155],
        scale: [1, 1.5, 1, 1, 1],
      };
    }
  }, [hoveredItem, isDelayed]);

  const animationMobileProps = useMemo(() => {
    if (hoveredItem === 5 && !isDelayed) {
      return {
        y: [0, 0, 0],
        scale: [1, 1.5, 1],
      };
    } else {
      return {
        y: [0, 0, hoveredItem === 5 ? 110 : 85],
        scale: [1, 1.5, 1, 1, 1],
      };
    }
  }, [hoveredItem, isDelayed]);

  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now()); // Update key when hoverVideoUrl changes
  }, [hoverVideoUrl]);

  return (
    <SectionLayout>
      {/* <div className="hidden md:block">
        <ScrollMotionEffect effect="fade-right" duration="2000">
          <h2 className="text-xl font-normal leading-none text-center text-stone-950 md:text-4xl">
            <strong>Hardware</strong> built to connect
            <br /> you with your <strong>customers</strong>.
          </h2>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <p className="text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto ">
            Attach your Everything Link to devices to route customers where they
            need to go, keeping everything organized and making it easier to
            generate leads, gather reviews, take payments, offer promotions, and
            more.
          </p>
        </ScrollMotionEffect>
      </div> */}

      <div className="hidden md:block max-w-[400px] h-[520px] mx-auto">
        {hoverImgUrl ? (
          <motion.div
            key={hoverImgUrl}
            className="mx-auto"
            animate={animationProps}
            transition={
              hoveredItem === 5 && !isDelayed
                ? {
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.5, 1],
                    repeat: false,
                  }
                : {
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: false,
                    repeatDelay: 1,
                  }
            }
          >
            {hoveredItem === 5 ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                src={"/assets/video/customizable-video.mp4"}
                className="mx-auto"
                width={160}
                height={80}
                preload="metadata"
                // loading='lazy'
              />
            ) : (
              <Image
                width={180}
                height={120}
                src={hoverImgUrl}
                alt="Link icon"
                className="mx-auto"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            animate={{
              y: [0, 0, 190],
              scale: [1, 1.5, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: false,
              repeatDelay: 1,
            }}
          >
            <Image
              width={140}
              height={90}
              src={"/assets/site-logo/chipicon.png"}
              alt="Link icon"
              className="mx-auto"
            />
          </motion.div>
        )}
      </div>

      <div className="md:hidden max-w-[400px] h-[230px] mx-auto mt-[-60px]">
        {hoverImgUrl ? (
          <motion.div
            key={hoverImgUrl}
            className="mx-auto"
            animate={animationMobileProps}
            transition={
              hoveredItem === 5 && !isDelayed
                ? {
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.1, 0.5, 1],
                    repeat: false,
                  }
                : {
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: false,
                    repeatDelay: 1,
                  }
            }
          >
            {hoveredItem === 5 ? (
              <video
                autoPlay
                src={"/assets/video/customizable-video.mp4"}
                muted
                className="mx-auto"
                width={100}
                height={60}
                preload="metadata"
                // loading='lazy'
              />
            ) : (
              <Image
                width={120}
                height={100}
                src={hoverImgUrl}
                alt="Link icon"
                className="mx-auto"
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            animate={{
              y: [0, 0, 105],
              scale: [1, 1.5, 1, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: false,
              repeatDelay: 1,
            }}
          >
            <Image
              width={90}
              height={90}
              src={"/assets/site-logo/chipicon.png"}
              alt="Link icon"
              className="mx-auto"
            />
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 md:gap-14 mt-[-80px] md:mt-[-350px]">
        <div className="hidden md:flex flex-col justify-end gap-10 md:gap-28 mx-auto mr-[-2px]">
          {featuresInfoLeft.map((el) => (
            <div
              key={el.id}
              className={`p-2 rounded-full w-28 h-28 flex flex-col items-center justify-center ${hoveredItem === el.id ? "" : ""}`}
              onMouseEnter={() => hoverItemSelect(el)}
            >
              <Icons icon={el.icon} title={el.title} />
              <h2 className="mt-2 text-sm text-[#737373] text-center font-normal leading-5">
                {el.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="relative z-50 flex justify-center mx-auto">
          <motion.div
            key={key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="h-[280px] md:h-[600px] flex justify-center mx-auto relative z-50"
          >
            <video
              ref={videoRef}
              src={hoverVideoUrl || "/assets/video/cstomizable-crad-tapp.mp4"}
              muted
              preload="metadata"
              className="mx-auto"
              width={200}
              height={50}
              loading="lazy"
              playsInline
              poster="/assets/video/mobile.png"
            />
          </motion.div>
        </div>

        <div className="hidden md:flex flex-col justify-start gap-10 md:gap-28 mx-auto bg-white ml-[-2px]">
          {featuresInfoRight.map((el) => (
            <div
              key={el.id}
              className={`p-2  rounded-full w-28 h-28 flex flex-col items-center justify-center  ${hoveredItem === el.id ? "" : ""}`}
              onMouseEnter={() => hoverItemSelect(el)}
            >
              <Icons icon={el.icon} title={el.title} />
              <h2 className="mt-1 text-sm leading-5 text-[#737373] text-center font-normal">
                {el.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid justify-center w-3/4 items-center auto-rows-max grid-cols-3 mx-auto mt-3 bg-white gap-x-2 gap-y-5 md:hidden">
          {featuresInfoAll.map((el) => (
            <div
              key={el.id}
              className={`p-2 m-auto  rounded-full w-20 h-20 flex flex-col items-center justify-evenly  ${hoveredItem === el.id ? "" : ""}`}
              onMouseEnter={() => hoverItemSelect(el)}
            >
              <Icons icon={el.icon} title={el.title} scale={el.scale} />

              <h2 className=" text-xs leading-2 text-[#737373] text-center font-normal">
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="mt-10 md:hidden">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <h2 className="text-xl font-normal leading-none text-center text-stone-950 md:text-4xl">
            <strong>Hardware</strong> built to connect
            <br /> you with your <strong>customers</strong>.
          </h2>
        </ScrollMotionEffect>
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <p className="text-lg text-stone-950 text-center mt-4 max-w-[700px] mx-auto ">
            Attach your Everything Link to devices to route customers where they
            need to go, keeping everything organized and making it easier to
            generate leads, gather reviews, take payments, offer promotions, and
            more.
          </p>
        </ScrollMotionEffect>
      </div> */}
    </SectionLayout>
  );
};

export default ConectMobileSection;
