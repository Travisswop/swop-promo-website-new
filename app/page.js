import DevicesInteraction from "@/components/hardware/DevicesInteraction";

import HeroSection from "@/components/home/HeroSection";
import InteractiveSection from "@/components/home/interactive/InteractiveSection";
import ManageTeam from "@/components/home/manage/ManageTeam";
import Form from "@/components/home/saving-form/Form";
import Smartsite from "@/components/home/Smartsite";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Smartsite />
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
