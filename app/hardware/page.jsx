import HardwareCollections from "@/components/hardware/collections/HardwareCollections";
import ConectMobileSection from "@/components/hardware/ConectMobileSection";
import DevicesInteraction from "@/components/hardware/DevicesInteraction";

const page = () => {
  return (
    <div className=" flex flex-col gap-20  pb-16">
      <ConectMobileSection />
      {/* <div className="container"> */}
      <DevicesInteraction />
      {/* </div> */}
      <div className="container">
        <HardwareCollections />
      </div>
    </div>
  );
};

export default page;
