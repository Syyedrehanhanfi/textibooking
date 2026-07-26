"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, FileEdit, MessageSquare, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Car,
      title: "Select Route & Taxi",
      desc: "Pick your pickup & drop locations and choose from Sedan, SUV, Innova Crysta, or Luxury fleet.",
      badge: "Step 1",
    },
    {
      number: "02",
      icon: FileEdit,
      title: "Fill Trip & Contact Details",
      desc: "Enter pickup date, time, passenger count, and contact info in our easy booking form.",
      badge: "Step 2",
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Instant WhatsApp Confirmation",
      desc: "Click 'Book on WhatsApp' to send your request. Get driver & cab details confirmed on WhatsApp instantly!",
      badge: "Step 3",
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            How Taxi Booking Works
          </h2>
          <p className="text-slate-600 text-base font-semibold">
            Booking your outstation or local cab takes less than 60 seconds with zero advance payment.
          </p>
        </motion.div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-[18px] p-8 border border-slate-200 shadow-sm relative flex flex-col justify-between space-y-4 hover:shadow-lg transition-all"
              >
                {/* Step Number Overlay */}
                <span className="text-5xl font-black text-slate-200 absolute top-4 right-6 pointer-events-none select-none">
                  {step.number}
                </span>

                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-[16px] bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <span className="inline-block text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {step.badge}
                  </span>

                  <h3 className="text-xl font-black text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>100% Guaranteed Dispatch</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
