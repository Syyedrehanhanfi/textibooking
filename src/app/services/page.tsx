import React from "react";
import type { Metadata } from "next";
import AirportServices from "@/components/AirportServices";

export const metadata: Metadata = {
  title: "Cab Services & Fare Estimator | Khodal Tours",
  description: "Explore our cab services, popular routes, airport transfers, and get an instant fare estimate for your journey.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="py-4 animate-fade-in">
      <AirportServices />
    </div>
  );
}
