import SectionLayout from "@/components/shared/SectionLayout";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Poppins } from "next/font/google";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Categories = ({ title, titleImage, products }) => {
  return (
    <div className=" mx-auto gradient-circle-top flex flex-col py-10 justify-center items-center px-2">
      <div className={cn("h-full w-full  z-10", poppins.className)}>
        <section className=" grid grid-cols-1 gap-10 py-0  rounded-2xl ">
          <ScrollMotionEffect
            effect="fade-up"
            duration="2000"
            className={cn(
              "w-full h-[550px] lg:h-[650px] flex flex-col gap-5  justify-start  items-center relative rounded-3xl py-20 bg-[url('/assets/hardware/collection/blackBg.png')] bg-cover bg-no-repeat object-cover bg-center",
              title === "Business Card" ? "lg:pb-0" : ""
            )}
          >
            {/* <Image
              src="/assets/hardware/collection/blackBg.png"
              alt={title}
              height={100}
              width={100}
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full -z-10  rounded-3xl"
              quality={100}
            /> */}
            {/* <Image
              src="/assets/hardware/collection/blackBg.png"
              alt={title}
              height={500}
              width={500}
              quality={100}
              className="absolute top-0 left-0 bottom-0 right-0 h-full w-full  -z-10 rounded-2xl lg:hidden"
            /> */}
            <div className="text-center text-white text-xl md:text-2xl flex flex-col justify-center items-center   font-light relative ">
              <div className="flex justify-center items-center  z-50">
                <Link href="/">
                  <div className="bg-[#686868] rounded-full border-[1px] border-gray-400 hover:bg-[#AF97D4] transition-all duration-300 ease-in-out cursor-pointer scale-125 -translate-x-4 ">
                    <Image
                      src="/assets/site-logo/navicon.png"
                      alt="Swop Logo"
                      width={35}
                      height={35}
                      quality={100}
                      priority
                      className=" rounded-full animate-slow-bounce "
                    />
                  </div>
                </Link>
                {title === "Business Card" ? (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-bold">
                    {" "}
                    {title.split(" ")[0]}
                    <span className="font-light"> {title.split(" ")[1]}</span>
                  </h2>
                ) : title === "Phone Attachments" ? (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-bold">
                    {title.split(" ")[0]}
                    <span className="font-light"> {title.split(" ")[1]}</span>
                  </h2>
                ) : (
                  <h2 className="block text-2xl md:text-3xl lg:text-5xl font-bold">
                    <span className="">{title}</span>
                  </h2>
                )}
              </div>

              <p className="text-base md:text-lg text-gray-400 pt-4 text-center">
                Available Now
              </p>
            </div>
            <ScrollMotionEffect
              effect="zoom-in-up"
              duration="800"
              className="h-full overflow-hidden"
            >
              <Image
                src={titleImage}
                alt={title}
                height={400}
                width={400}
                quality={100}
                className={cn(
                  "  h-full object-contain ",
                  title === "Business Card"
                    ? "translate-y-0 lg:scale-125 lg:translate-y-20"
                    : ""
                )}
              />
            </ScrollMotionEffect>
          </ScrollMotionEffect>
          <ScrollMotionEffect
            effect="fade-up"
            duration="2000"
            delay="100"
            className=" px-5 flex flex-row flex-wrap gap-10   justify-center items-center gradient-circle-top "
          >
            {products.map((el) => {
              return (
                <div
                  key={el.id}
                  className="py-8 px-5 bg-gradient-to-t from-[#F9F9F9] to-[#f7f7f7] rounded-[2rem] flex flex-col justify-between items-center h-[330px] w-[320px]  border-1 hover:-translate-y-2 transition-all ease-in-out duration-250 hover:border-gray-300"
                >
                  <div className="place-self-start text-lg font-semibold">
                    <h5>{el.name}</h5>
                  </div>
                  <div>
                    <Image
                      src={el.image}
                      alt={el.title}
                      width={200}
                      height={200}
                      quality={100}
                    />
                  </div>
                  <div className="w-full flex gap-2 justify-between items-center px-5">
                    <div>
                      <Link href="#">
                        <button className="bg-[#ffffff]  flex justify-center items-center gap-2 mx-auto border border-white hover:border hover:border-gray-400 transition-all ease-in-out duration-250  rounded-xl py-1 px-5 text-base">
                          Add <FiShoppingCart />
                        </button>
                      </Link>
                    </div>
                    <div className="text-gray-500">${el.price}</div>
                  </div>
                </div>
              );
            })}
          </ScrollMotionEffect>
        </section>
      </div>
    </div>
  );
};

export default Categories;
