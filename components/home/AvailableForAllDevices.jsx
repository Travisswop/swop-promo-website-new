import React from "react";
import SectionLayout from "../shared/SectionLayout";
import Image from "next/image";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const AvailableForAllDevices = () => {
  return (
    <SectionLayout bg={"bg-[#F8F8F8]"}>
      <div className="flex flex-col-reverse items-center justify-center p-5 bg-white md:flex-row md:mx-20 md:my-6 md:p-16">
        <div className={`flex-1`}>
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h2
              className={`text-stone-950 font-bold text-3xl md:text-5xl mt-16 md:mt-5 mb-2 text-center md:text-left !leading-tight`}
            >
              Available <br />
              For All Devices
            </h2>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h6 className="font-semibold text-center text-md md:text-xl text-stone-950 md:text-left">
              Add web3 compatibility to your business to engage and grow with
              the blockchain economy with over 100 million wallets globally.
              Truly borderless interactions.
            </h6>
          </ScrollMotionEffect>

          <ScrollMotionEffect effect="fade-right" duration="2000">
            <div className="mt-8">
              <h6 className="text-lg font-bold text-center text-stone-950 md:text-xl md:text-left">
                DOWNLOAD NOW ON:
              </h6>
              <div className="flex justify-center gap-4 mt-4 mb-8 md:justify-start">
                <Image
                  width={500}
                  height={150}
                  src="/assets/home/google-play.png"
                  alt="Available For All Devices"
                  className="w-[100px] md:w-[120px] lg:w-[140px]"
                />
                <Image
                  width={500}
                  height={150}
                  src="/assets/home/app-store.png"
                  alt="Available For All Devices"
                  className="w-[100px] md:w-[120px] lg:w-[140px]"
                />
              </div>
            </div>
          </ScrollMotionEffect>
        </div>
        <ScrollMotionEffect effect="fade-left" duration="2000">
          <div className={`flex-1`}>
            <Image
              width={500}
              height={500}
              src={"/assets/home/all-devices.png"}
              alt="Available For All Devices"
              className="mx-auto"
            />
          </div>{" "}
        </ScrollMotionEffect>
      </div>
    </SectionLayout>
  );
};

export default AvailableForAllDevices;
