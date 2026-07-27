"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the outstation taxi fare from Surat?",
      a: "Outstation taxi fares from Surat start at highly affordable rates depending on the vehicle type (Sedan, SUV, or Innova). We offer clear per-km pricing with no hidden return fare tricks.",
    },
    {
      q: "Are there any hidden charges in your Surat cab booking?",
      a: "No. We offer 100% transparent pricing for every Surat cab booking. Tolls and parking are communicated upfront, ensuring you never face unexpected fees.",
    },
    {
      q: "How can I book a taxi from Surat to Mumbai airport?",
      a: "You can book a taxi from Surat to Mumbai airport instantly via our WhatsApp number or by calling our 24/7 customer support. We guarantee on-time pickup.",
    },
    {
      q: "Is Innova Crysta available for rent in Surat?",
      a: "Yes. We offer premium AC Innova Crysta and SUV cabs on rent in Surat for family trips, outstation tours, and corporate travel.",
    },
    {
      q: "Do you provide one-way cab service from Surat?",
      a: "Yes. We provide affordable one-way cab services from Surat to destinations like Ahmedabad, Vadodara, Mumbai, and Statue of Unity.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Everything You Need To Know
          </h2>
          <p className="text-slate-600 font-medium text-sm sm:text-base">
            Got questions about our Surat taxi service and cab booking? Here are answers to common queries.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-[18px] overflow-hidden transition-all duration-200 bg-slate-50/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/80 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed border-t border-slate-200/50 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
