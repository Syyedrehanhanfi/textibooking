import React from "react";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FleetSection from "@/components/FleetSection";
import TourPackages from "@/components/TourPackages";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import AirportServices from "@/components/AirportServices";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <AirportServices />
      <FleetSection />
      <TourPackages />
      <GallerySection />
      <Testimonials />
      <FAQSection />
    </>
  );
}
