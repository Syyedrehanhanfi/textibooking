import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Khodal Tours | 24x7 Taxi Booking in Surat",
  description: "Get in touch with Khodal Tours for cab bookings, outstation inquiries, and 24/7 customer support in Surat. Call or WhatsApp us now.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Khodal Tours | 24x7 Taxi Booking in Surat",
    description: "Get in touch with Khodal Tours for cab bookings, outstation inquiries, and 24/7 customer support in Surat.",
    url: "https://www.khodaltourscab.com/contact",
    images: [{ url: "/about/main.jpg", width: 1200, height: 630, alt: "Contact Khodal Tours Surat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Khodal Tours | 24x7 Taxi Booking in Surat",
    description: "Get in touch with Khodal Tours for cab bookings, outstation inquiries, and 24/7 customer support in Surat.",
    images: ["/about/main.jpg"],
  }
};

export default function ContactPage() {
  return (
    <div className="py-4 animate-fade-in">
      <h1 className="sr-only">Contact Surat's Best Taxi Service - Khodal Tours</h1>
      <ContactSection />
    </div>
  );
}
