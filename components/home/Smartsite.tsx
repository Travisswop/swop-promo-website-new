import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";
import SectionLayout from "../shared/SectionLayout";
import Messaging from "./smartSite/Messaging";
import SmartSite from "./smartSite/SmartSite";
import Analytics from "./smartSite/Analytics";
import Bank from "./smartSite/Bank";
import Leads from "./smartSite/Leads";

const Smartsite = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-1 auto-rows-min  md:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-5 h-full items-stretch self-stretch lg:px-16 xl:px-48">
        <Messaging />
        <SmartSite />
        <Analytics />
        <Bank />
        <Leads />
      </div>
    </SectionLayout>
  );
};

export default Smartsite;
