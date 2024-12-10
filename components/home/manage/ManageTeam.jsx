import SectionLayout from "@/components/shared/SectionLayout";
import React from "react";
import Team from "./Team";
import Dynamic from "./Dynamic";
import Transact from "./Transact";
import Earn from "./Earn";
import Build from "./Build";

const ManageTeam = () => {
  return (
    <SectionLayout bg={"bg-[#FAFAFA] "}>
      <div className="py-10 lg:py-20 grid grid-cols-1 auto-rows-min   md:grid-cols-2 lg:grid-cols-3 gap-8 h-full items-stretch self-stretch lg:px-10 xl:px-20">
        <Team />
        <Dynamic />
        <Transact />
        <Earn />
        <Build />
      </div>
    </SectionLayout>
  );
};

export default ManageTeam;
