import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const linkInfo = [
  {
    img: "/assets/company/travis.png",
    name: "Travis Herron",
    title: "Founder & CEO at SWOP",
  },
  {
    img: "/assets/company/neel.png",
    name: "Arjo Neel",
    title: "Chief Operating Officer (COO)",
  },
  {
    img: "/assets/company/salman.png",
    name: "Salman H Saikote",
    title: "Chief Technology Officer (CTO)",
  },
  {
    img: "/assets/company/Rashed Sheikh.png",
    name: "Rashed Sheikh",
    title: "",
  },
  {
    img: "/assets/company/Sadit Ahsan.png",
    name: "Sadit Ahsan",
    title: "",
  },
  {
    img: "/assets/company/Rakibul Islam.png",
    name: "Rakibul Islam",
    title: "",
  },
  {
    img: "/assets/company/Shouvik Chowdhury.png",
    name: "Shouvik Chowdhury",
    title: "",
  },
  {
    img: "/assets/company/Gazi Monir-uz-zaman.png",
    name: "Gazi Monir-uz-zaman",
    title: "",
  },

  {
    img: "/assets/company/Nurul Islam.png",
    name: "Nurul Islam ",
    title: "",
  },
  {
    img: "/assets/company/Nuruzaman Milon.png",
    name: "Md. Nuruzaman Milon",
    title: "",
  },
  {
    img: "/assets/company/AR Sahak.png",
    name: "AR Sahak",
    title: "",
  },
  {
    img: "/assets/company/Raihan Ali.png",
    name: "Raihan Ali",
    title: "",
  },
  {
    img: "/assets/company/Fuad Hasan.png",
    name: "Fuad Hasan",
    title: "",
  },
];

const FoundersSection = () => {
  return (
    <SectionLayout>
      <ScrollMotionEffect effect="fade-right" duration="2000">
        <h2
          className={`text-stone-950 font-semibold text-3xl md:text-5xl text-center !leading-normal`}
        >
          Founders
        </h2>
      </ScrollMotionEffect>

      <ScrollMotionEffect effect="fade-left" duration="2000">
        <p className="text-lg text-center text-stone-950">
          Core Values and Ethics in Leadership
        </p>
      </ScrollMotionEffect>

      <div className="grid items-start justify-center grid-cols-1 mt-10 md:mt-24 md:grid-cols-3 gap-14">
        {linkInfo?.map((el, index) => (
          <ScrollMotionEffect effect="fade-up" duration="2000" key={index}>
            <div className="">
              <div className={``}>
                <Image
                  width={300}
                  height={150}
                  src={el.img}
                  alt="Company"
                  className="mx-auto"
                />
              </div>
              <h2 className="mt-4 font-bold text-center text:md md:text-xl text-stone-950">
                {el.name}
              </h2>
              <p className="text-center text-md text-stone-950">{el.title}</p>
            </div>
          </ScrollMotionEffect>
        ))}
      </div>
    </SectionLayout>
  );
};

export default FoundersSection;
