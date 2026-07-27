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
        "name": "Do you provide airport pickup and drop services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer 24×7 airport pickup and drop services with real-time flight tracking, meet & greet assistance, and on-time pickups."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden charges or extra fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We follow transparent pricing with no hidden charges. Toll, parking, or driver allowance (if applicable) will be clearly communicated before confirmation."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities and airports do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide taxi services across Gujarat, Rajasthan, Maharashtra, and nearby destinations, including airport transfers to Ahmedabad, Surat, Vadodara, Rajkot, Mumbai, Udaipur, and Jaipur Airports."
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
