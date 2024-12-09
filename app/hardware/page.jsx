import HardwareCollections from "@/components/hardware/collections/HardwareCollections";
import ConectMobileSection from "@/components/hardware/ConectMobileSection";
import DevicesInteraction from "@/components/hardware/DevicesInteraction";

const page = () => {
  return (
    <div>
      <ConectMobileSection />
      <DevicesInteraction />
      <HardwareCollections />
    </div>
  );
};

export default page;
