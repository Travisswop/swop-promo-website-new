"use client";
import React from "react";
import SectionLayout from "../shared/SectionLayout";
import { InlineWidget } from "react-calendly";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const EventsSections = () => {
  return (
    <SectionLayout>
      <div className="">
        <ScrollMotionEffect effect="fade-up" duration="2000">
          <div className="">
            <InlineWidget
              url="https://calendly.com/swopme-support/30min"
              styles={{
                height: "700px",
              }}
              pageSettings={{
                backgroundColor: "ffffff",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#0b7788",
                textColor: "4d5055",
              }}
            />
          </div>
        </ScrollMotionEffect>
      </div>
    </SectionLayout>
  );
};

export default EventsSections;
