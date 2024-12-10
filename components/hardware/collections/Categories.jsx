import SectionLayout from "@/components/shared/SectionLayout";
import { cn } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Categories = ({ title, titleImage, products }) => {
  return (
    <SectionLayout
      className={cn(" gradient-circle-top -z-50 !py-5", poppins.className)}
    >
      <section className=" xl:px-20 grid grid-cols-1 gap-10 py-0 ">
        <div className="w-full h-[500px] flex flex-col lg:flex-row gap-5 lg:gap-36 xl:gap-60 justify-start  lg:justify-center items-center relative rounded-lg">
          <Image
            src="/assets/hardware/collection/blackBg.svg"
            alt={title}
            height={100}
            width={100}
            className="absolute top-0 left-0 h-full w-full -z-10 hidden lg:block"
          />
          <Image
            src="/assets/hardware/collection/mobileBg.svg"
            alt={title}
            height={500}
            width={500}
            quality={100}
            className="absolute top-0 left-0 h-full w-full xs:scale-y-150 sm:scale-y-125 md:scale-y-100 md:scale-x-150 -z-10 rounded-3xl lg:hidden"
          />
          <div
            className={cn(
              "relative   lg:translate-x-24 xl:translate-x-24 2xl:translate-x-24 max-w-60 lg:w-[250px] place-items-start h-[80%] flex flex-col justify-center items-center",
              title === "Business Card" &&
                " translate-y-5 lg:translate-y-0 scale-90 ",
              title === "Phone Attachments" &&
                " translate-y-10 md:translate-y-0 xl:scale-110 ",
              title === "Hospitality" &&
                "xs:scale-100 sm:scale-125 translate-y-10 lg:translate-y-0 xl:scale-150",
              title === "Pets" &&
                "scale-90 translate-y-0 xl:scale-100 2xl:scale-110 lg:-translate-y-5 ",
              title === "Wearables" &&
                "translate-y-10 md:translate-y-0 xl:scale-125",
              title === "Stickers" &&
                "xs:scale-110 sm:scale-125 xl:scale-150 translate-y-10 lg:translate-y-0"
            )}
          >
            <Image
              src={titleImage}
              alt={title}
              height={400}
              width={400}
              quality={100}
              className="w-full lg:scale-110"
            />
          </div>
          <div className="text-center text-white text-xl md:text-2xl flex flex-col justify-center items-center  lg:text-3xl h-[30%] w-[468px] font-light relative -translate-y-10 lg:-translate-y-0">
            <h2 className="">
              <span
                className="block text-2xl md:text-3xl lg:text-5xl font-semibold py-2 lg:py-4
          "
              >
                {title}
              </span>
              Available Now
            </h2>
          </div>
        </div>
        <div className=" px-5 flex flex-row flex-wrap gap-10 lg:gap-16  justify-center items-center gradient-circle-top -z-50">
          {products.map((el) => {
            return (
              <div
                key={el.id}
                className="py-8 px-5 bg-gradient-to-t from-[#F9F9F9] to-[#f7f7f7] rounded-[2rem] flex flex-col justify-between items-center h-[330px] w-[320px] border-gray-300 border-1"
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
        </div>
      </section>
    </SectionLayout>
  );
};

export default Categories;
