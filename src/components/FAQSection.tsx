"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you provide airport pickup and drop services?",
      a: "Yes. We offer 24×7 airport pickup and drop services with real-time flight tracking, meet & greet assistance, and on-time pickups.",
    },
    {
      q: "Are there any hidden charges or extra fees?",
      a: "No. We follow transparent pricing with no hidden charges. Toll, parking, or driver allowance (if applicable) will be clearly communicated before confirmation.",
    },
    {
      q: "Can I modify or cancel my booking?",
      a: "Yes. You can contact our support team to modify or cancel your booking. Cancellation terms may vary depending on the booking type and timing.",
    },
    {
      q: "What types of vehicles are available?",
      a: "We offer Hatchbacks, Sedans, SUVs, MPVs, Tempo Travellers, and Luxury Cars for local trips, outstation travel, airport transfers, corporate travel, and family tours.",
    },
    {
      q: "Is luggage included in the vehicle capacity?",
      a: "Yes. Each vehicle has a recommended luggage capacity. Our team can help you choose the right vehicle based on the number of passengers and bags.",
    },
    {
      q: "Do you provide one-way and round-trip taxi services?",
      a: "Yes. We provide one-way, round-trip, local sightseeing, outstation travel, and multi-day tour packages.",
    },
    {
      q: "Which cities and airports do you serve?",
      a: "We provide taxi services across Gujarat, Rajasthan, Maharashtra, and nearby destinations, including airport transfers to Ahmedabad, Surat, Vadodara, Rajkot, Mumbai, Udaipur, and Jaipur Airports.",
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
            Got questions about our travel agency taxi services? Here are answers to common queries.
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
