"use client";
import SectionLayout from "@/components/shared/SectionLayout";
import { card } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import FormCards from "./FormCards";
import ScrollMotionEffect from "@/components/motion/ScrollMotionEffect";

const Form = () => {
  const [employees, setEmployees] = useState("0");
  const [cards, setCards] = useState("0");
  const [avgCost, setAvgCost] = useState("0");
  const [open, setOpen] = useState(false);
  return (
    <SectionLayout>
      <div className="relative">
        <div className="absolute left-[-155%] md:left-[-80%] lg:left-[-70%] xl:left-[-55%] top-[-100px] md:top-[-200px] bottom-0 w-full gradient-circle-top h-[500px] md:h-[1000px] -z-10 " />
        <ScrollMotionEffect effect="zoom-in" duration="2000">
          <form className="max-w-[900px] mx-auto bg-[#FAFAFA] py-10 grid grid-cols-1 auto-rows-min items-center justify-center  gap-3  rounded-2xl p-10 w-full">
            <h2 className="text-2xl font-semibold md:text-3xl m-auto text-center mb-5 w-52">
              Savings Calculator
            </h2>
            <div className="mb-5 w-full ">
              <label
                htmlFor="employees"
                className="text-gray-500 xs:text-xs sm:text-sm  font-semibold"
              >
                Number of Employees
              </label>
              <input
                className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block p-2.5 py-2.5 placeholder:text-base"
                placeholder=""
                required
                type="text"
                name="employees"
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label
                htmlFor="cards"
                className="text-gray-500 xs:text-xs sm:text-sm  font-semibold"
              >
                Number of Business Cards Per Employee
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base"
                required
                type="text"
                name="cards"
                value={cards}
                onChange={(e) => setCards(e.target.value)}
              />
            </div>
            <div className="w-full mb-5">
              <label
                htmlFor="avgCost"
                className="text-gray-500 xs:text-xs sm:text-sm  font-semibold"
              >
                Average Cost Per Business Card
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-md focus:ring-black focus:border-black block w-full p-2.5 py-2.5 placeholder:text-base pl-5"
                required
                type="text"
                name="avgCost"
                value={avgCost}
                onChange={(e) => setAvgCost(e.target.value)}
              />
              <label htmlFor="avgCost" className="text-gray-500  text-xs ">
                Paper card average is $.25-$.5 per card
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-black m-auto font-medium  text-base w-44 rounded  cursor-pointer px-5 py-2 xl:py-3 text-center mb-5"
              onClick={(e) => {
                e.preventDefault();
                //console.log(employees, cards, avgCost);
                setOpen(true);
              }}
            >
              Submit
            </button>
            {open && (
              <FormCards
                cardCost={employees}
                businessCardCost={cards}
                yearlySavings={avgCost}
                increase={0}
              />
            )}
          </form>
        </ScrollMotionEffect>
      </div>
    </SectionLayout>
  );
};

export default Form;
