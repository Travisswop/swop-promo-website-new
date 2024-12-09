import React from "react";
import Categories from "./Categories";
import { hardwareCollections } from "@/config/hardwareCollectons";
const HardwareCollections = () => {
  return (
    <div className="">
      <Categories
        title={"Business Card"}
        titleImage={"/assets/hardware/collection/card/MetalGoldcards.svg"}
        products={hardwareCollections.BusinessCards}
      />
      <Categories
        title={"Phone Attachments"}
        titleImage={"/assets/hardware/collection/PhoneAttachments/iphones.svg"}
        products={hardwareCollections.PhoneAttachments}
      />
      <Categories
        title={"Hospitality"}
        titleImage={
          "/assets/hardware/collection/hospitality/HospitalityCards.svg"
        }
        products={hardwareCollections.Hospitality}
      />
      <Categories
        title={"Pets"}
        titleImage={"/assets/hardware/collection/pets/pets.svg"}
        products={hardwareCollections.Pets}
      />
      <Categories
        title={"Wearables"}
        titleImage={"/assets/hardware/collection/wearables/wearable.svg"}
        products={hardwareCollections.Wearables}
      />
      <Categories
        title={"Stickers"}
        titleImage={"/assets/hardware/collection/stickers/sticker.svg"}
        products={hardwareCollections.Stickers}
      />
    </div>
  );
};

export default HardwareCollections;
