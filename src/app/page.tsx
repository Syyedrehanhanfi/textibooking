import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FleetSection from "@/components/FleetSection";
import TourPackages from "@/components/TourPackages";
import GallerySection from "@/components/GallerySection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import AirportServices from "@/components/AirportServices";

export const metadata: Metadata = {
  title: "Khodal Tours | Best Taxi Service in Surat | Outstation Cabs",
  description: "Book reliable local, outstation, and airport cabs from Surat with Khodal Tours. Transparent per-KM rates, Innova, Sedan & SUVs. 24x7 WhatsApp instant booking.",
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the outstation taxi fare from Surat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outstation taxi fares from Surat start at highly affordable rates depending on the vehicle type (Sedan, SUV, or Innova). We offer clear per-km pricing with no hidden return fare tricks."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden charges in your Surat cab booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We offer 100% transparent pricing for every Surat cab booking. Tolls and parking are communicated upfront, ensuring you never face unexpected fees."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a taxi from Surat to Mumbai airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a taxi from Surat to Mumbai airport instantly via our WhatsApp number or by calling our 24/7 customer support. We guarantee on-time pickup."
        }
      },
      {
        "@type": "Question",
        "name": "Is Innova Crysta available for rent in Surat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer premium AC Innova Crysta and SUV cabs on rent in Surat for family trips, outstation tours, and corporate travel."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide one-way cab service from Surat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We provide affordable one-way cab services from Surat to destinations like Ahmedabad, Vadodara, Mumbai, and Statue of Unity."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="sr-only">Khodal Tours - Surat's Premier Taxi Service</h1>
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
