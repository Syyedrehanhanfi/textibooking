import React from "react";
import type { Metadata } from "next";
import FleetSection from "@/components/FleetSection";

export const metadata: Metadata = {
  title: "Our Fleet | Premium Innova & SUV Cabs in Surat",
  description: "Browse our premium fleet of well-maintained cabs in Surat including Hatchbacks, Sedans, SUVs, and Innova Crysta for your travel needs.",
  alternates: {
    canonical: "/fleet",
  },
  openGraph: {
    title: "Our Fleet | Premium Innova & SUV Cabs in Surat",
    description: "Browse our premium fleet of well-maintained cabs in Surat including Hatchbacks, Sedans, SUVs, and Innova Crysta.",
    url: "https://www.khodaltourscab.com/fleet",
    images: [{ url: "/about/main.jpg", width: 1200, height: 630, alt: "Premium Cabs in Surat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Fleet | Premium Innova & SUV Cabs in Surat",
    description: "Browse our premium fleet of well-maintained cabs in Surat including Hatchbacks, Sedans, SUVs, and Innova Crysta.",
    images: ["/about/main.jpg"],
  }
};

export default function FleetPage() {
  return (
    <div className="py-4 animate-fade-in">
      <h1 className="sr-only">Our Premium Taxi Fleet in Surat - Innova, Sedan, SUV</h1>
      <FleetSection />
    </div>
  );
}
