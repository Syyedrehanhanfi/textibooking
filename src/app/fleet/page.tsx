import React from "react";
import type { Metadata } from "next";
import FleetSection from "@/components/FleetSection";

export const metadata: Metadata = {
  title: "Our Fleet | Premium Cabs & Taxis in Surat",
  description: "Browse our premium fleet of well-maintained cabs including Hatchbacks, Sedans, SUVs, and Innova Crysta for your travel needs.",
  alternates: {
    canonical: "/fleet",
  },
};

export default function FleetPage() {
  return (
    <div className="py-4 animate-fade-in">
      <FleetSection />
    </div>
  );
}
