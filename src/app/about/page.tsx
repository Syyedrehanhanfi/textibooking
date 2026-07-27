import React from "react";
import type { Metadata } from "next";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: "About Khodal Tours | Reliable Taxi Service in Surat",
  description: "Learn more about Khodal Tours, Surat's premier local and outstation taxi booking agency providing safe and affordable rides since 2015.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Khodal Tours | Reliable Taxi Service in Surat",
    description: "Surat's premier local and outstation taxi booking agency providing safe and affordable rides.",
    url: "https://www.khodaltourscab.com/about",
    images: [{ url: "/about/main.jpg", width: 1200, height: 630, alt: "About Khodal Tours Surat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Khodal Tours | Reliable Taxi Service in Surat",
    description: "Surat's premier local and outstation taxi booking agency.",
    images: ["/about/main.jpg"],
  }
};

export default function AboutPage() {
  return (
    <div className="py-4 animate-fade-in">
      <h1 className="sr-only">About Khodal Tours - Surat's Trusted Travel Agency</h1>
      <FeaturesSection />
    </div>
  );
}
