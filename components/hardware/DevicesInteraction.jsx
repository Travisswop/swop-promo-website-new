import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Link from "next/link";
import ProductCards from "./ProductCards";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Image from "next/image";

const productInfo = [
  {
    size: "20mm",
    img: "/assets/hardware/products/businessCards.png",
    title: "Business Cards",
    slug: "business-cards",
    decs: `Upgrade from traditional paper cards with Swop’s reusable digital cards that collect data for your company`,
  },
  {
    size: "30mm",
    img: "/assets/hardware/products/attachments.png",
    title: "Phone Attachments",
    slug: "phone-attachments",
    decs: `Tag¹ facilitates an instant and reliable
connection. Activate ap.`,
  },

  {
    size: "30mm",
    img: "/assets/hardware/products/restaurants.png",
    title: "Hospitality",
    slug: "hospitality",
    decs: `Tag¹ facilitates an instant and reliablemmersive brand
experiences with just a tap.`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/customize2.svg",
    title: "Customize",
    slug: "customize",
    decs: `Upgrade from traditional paper cards with Swop’s reusable digital cards that collect data for your company`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/stickers.svg",
    title: "Stickers",
    slug: "stickers",
    decs: `Tag¹ facilitates an instant and reliable
connection. Activate ap.`,
  },
  {
    size: "20mm",
    img: "/assets/hardware/products/embeddables.png",
    title: "Embeddables",
    slug: "embeddables",
    decs: `Tag¹ facilitates an instant and reliablemmersive brand
experiences with just a tap.`,
  },
];

const DevicesInteraction = () => {
  return (
    <SectionLayout className="relative">
      <ScrollMotionEffect effect="fade-up" duration="2000">
        <h2
          className={`text-stone-950 font-medium text-3xl md:text-4xl lg:text-5xl text-center !leading-none py-5`}
        >
          Devices for Any <span className="block">Interaction</span>
        </h2>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"1000"}
          className="absolute top-[-20%] left-[-2%]  md:top-0 md:left-[15%]  lg:left-[25%] animate-bounce -z-10"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={50}
            height={50}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute bottom-[-200%] left-[-3%] md:bottom-[-120%] md:left-[5%] lg:left-[12%]  xl:left-[17%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={40}
            height={40}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"1000"}
          className="absolute -top-5 right-[0%] md:top-0 md:right-[20%]  animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"500"}
          className="absolute top-[90%] right-[20%] md:top-[80%] md:right-[28%] lg:top-[70%] lg:right-[30%] xl:right-[38%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={30}
            height={30}
            className=""
          />
        </ScrollMotionEffect>
        <ScrollMotionEffect
          effect="zoom-in"
          duration="2000"
          delay={"1000"}
          className="absolute bottom-[-190%] right-[10%] md:bottom-[-120%]  md:right-[25%] animate-bounce"
        >
          <Image
            src="/assets/star.svg"
            alt="star"
            width={45}
            height={45}
            className=""
          />
        </ScrollMotionEffect>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <p className="text-lg text-stone-950 text-center mt-4 max-w-[600px] mx-auto">
          Program the devices with the Swop App. Will tap on other devices with
          or without the swop app downloaded.
        </p>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-up" duration="2000">
        <div className="flex justify-center mt-8 md:mt-5 mx-auto">
          <Link
            href={""}
            className="text-black bg-none hover:bg-black hover:text-white font-medium text-md md:text-lg px-0 md:px-8 py-2 flex items-center justify-center rounded-full w-48 bg-[#F5F5F5] mb-6"
          >
            Swop Store
          </Link>
        </div>
      </ScrollMotionEffect>

      <div className="mt-8 2xl:px-20">
        <ProductCards productList={productInfo} />
      </div>

      {/* <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10 md:gap-14 md:mt-10'>
        {productInfo?.map((el, index) => (
          <div key={index} className='bg-[#F5F5F5] p-5 rounded-xl'>
            <p className='text-lg text-stone-950 text-center mt-4 max-w-[600px] mx-auto'>
              {el.size}
            </p>
            <h2 className='mt-3 text-2xl text-stone-950 text-center font-bold'>
              {el.title}
            </h2>
            <div>
              <Image
                width={400}
                height={50}
                src={el.img}
                alt='Link icon'
                className='mx-auto'
              />
            </div>

            <p className='text-lg text-stone-950 text-center mt-1'>{el.decs}</p>
          </div>
        ))}
      </div> */}
    </SectionLayout>
  );
};

export default DevicesInteraction;
