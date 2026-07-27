import React from "react";
import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: "About Us | Khodal Tours Surat",
  description: "Learn more about Khodal Tours, Surat's premier local and outstation taxi booking agency.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-4 animate-fade-in">
      <FeaturesSection />
    </div>
  );
}
