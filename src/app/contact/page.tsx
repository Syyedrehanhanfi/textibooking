import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Khodal Tours Surat",
  description: "Get in touch with Khodal Tours for cab bookings, inquiries, and 24/7 customer support.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="py-4 animate-fade-in">
      <ContactSection />
    </div>
  );
}
