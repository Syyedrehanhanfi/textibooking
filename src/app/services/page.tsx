import React from "react";
import type { Metadata } from "next";
import AirportServices from "@/components/AirportServices";

export const metadata: Metadata = {
  title: "Cab Services & Airport Transfers | Surat Taxi Booking",
  description: "Explore our cab services, popular routes, airport transfers from Surat. Get an instant fare estimate for your outstation or local journey.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Cab Services & Airport Transfers | Surat Taxi Booking",
    description: "Explore our cab services, popular routes, airport transfers from Surat.",
    url: "https://www.khodaltourscab.com/services",
    images: [{ url: "/airport-taxi.jpg", width: 1200, height: 630, alt: "Surat Airport Taxi Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cab Services & Airport Transfers | Surat Taxi Booking",
    description: "Explore our cab services, popular routes, airport transfers from Surat.",
    images: ["/airport-taxi.jpg"],
  }
};

export default function ServicesPage() {
  return (
    <div className="py-4 animate-fade-in">
      <h1 className="sr-only">Surat Cab Services and Airport Transfers</h1>
      <AirportServices />
    </div>
  );
}
