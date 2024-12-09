import Image from "next/image";
import React from "react";

const FormCards = ({ cardCost, businessCardCost, yearlySavings, increase }) => {
  if (cardCost === undefined || cardCost === null) {
    cardCost = 0;
  }
  if (businessCardCost === undefined || businessCardCost === null) {
    businessCardCost = 0;
  }
  if (yearlySavings === undefined || yearlySavings === null) {
    yearlySavings = 0;
  }
  if (increase === undefined || increase === null) {
    increase = 0;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max items-stretch self-stretch justify-center gap-8">
      <div className="w-full flex flex-col justify-around items-center p-4 bg-white rounded-2xl border border-gray-200">
        <h3 className="text-[14px] text-center font-semibold">
          Paper Card Cost:
        </h3>
        <h6 className="text-3xl font-semibold">${cardCost * 1}</h6>
      </div>
      <div className="w-full flex flex-col gap-4 justify-around items-center p-4 bg-white rounded-2xl border border-gray-200">
        <h3 className="text-[14px] text-center font-semibold">
          Swop Digital Business Card:
        </h3>
        <h6 className="text-3xl font-semibold">${businessCardCost * 1}</h6>
      </div>
      <div className=" lg:col-span-2 w-full flex flex-col lg:flex-row-reverse gap-4 justify-around items-center p-4 bg-white rounded-2xl border border-gray-200">
        <Image
          src="/assets/home/form/savings.png"
          alt="savings"
          width={80}
          height={88}
        />
        <div className="lg:w-1/2 flex flex-col gap-4 justify-around items-center">
          <h3 className="text-[14px] text-center font-semibold">
            Total Yearly Savings:
          </h3>
          <h6 className="text-3xl font-semibold">${yearlySavings * 1}</h6>

          <h6 className="text-gray-500 text-[12px] text-center">{`Your Paper Card also doesn't reward you for networking #interact2earn`}</h6>
        </div>
      </div>
      <div className="lg:col-span-2 w-full flex flex-col lg:flex-row-reverse gap-4 justify-around items-center p-4 bg-white rounded-2xl border border-gray-200">
        <Image
          src="/assets/home/form/increase.png"
          alt="Increase"
          width={100}
          height={80}
        />
        <div className=" flex flex-col gap-4 justify-around items-center">
          <h3 className="text-[14px] text-center font-semibold">
            Increase in leads, reviews, followers:
          </h3>
          <h6 className="text-3xl font-semibold">{increase * 1}</h6>
          <h6 className="text-gray-500 text-[12px] text-center">{`Estimated 100 Per Device Deployed*`}</h6>
        </div>
      </div>
    </div>
  );
};

export default FormCards;
