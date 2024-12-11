import DevicesInteraction from "@/components/hardware/DevicesInteraction";
import AvailableForAllDevices from "@/components/home/AvailableForAllDevices";
import DashboardFlow from "@/components/home/DashboardFlow";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import InteractiveSection from "@/components/home/interactive/InteractiveSection";
import LinkSection from "@/components/home/LinkSection";
import ManageTeam from "@/components/home/manage/ManageTeam";
import Form from "@/components/home/saving-form/Form";
import Smartsite from "@/components/home/Smartsite";
import Analytics from "@/components/home/smartSite/Analytics";
import Bank from "@/components/home/smartSite/Bank";
import Leads from "@/components/home/smartSite/Leads";
import Messaging from "@/components/home/smartSite/Messaging";
import SmartSite from "@/components/home/smartSite/SmartSite";
import SwoppleSection from "@/components/home/SwoppleSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="grid grid-cols-1 auto-rows-min  md:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-5 h-full items-stretch self-stretch lg:px-16 xl:px-48 mt-10 md:mt-6">
        <Messaging />
        <SmartSite />
        <Analytics />
        <Bank />
        <Leads />
      </div>
      <InteractiveSection />
      <ManageTeam />
      <Form />
      <DevicesInteraction />

      {/* <LinkSection /> */}
      {/* <DashboardFlow /> */}
      {/* <SwoppleSection /> */}
      {/* <FeaturesSection /> */}
      {/* <AvailableForAllDevices /> */}
    </div>
  );
}
