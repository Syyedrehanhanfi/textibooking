"use client";

import React from "react";
import { VERIFIED_DRIVERS } from "@/data/driversData";
import { ShieldCheck, Star, Award, CheckCircle2, Globe } from "lucide-react";

export default function DriversSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Professional Chauffeurs
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Meet Our Top-Rated Drivers
          </h2>
          <p className="text-slate-600 text-base font-medium">
            All our drivers are commercial license holders, background-checked, polite, and trained for highway expressways and local route navigation.
          </p>
        </div>

        {/* Driver Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VERIFIED_DRIVERS.map((driver) => (
            <div
              key={driver.id}
              className="bg-slate-50 rounded-[18px] p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-16 h-16 rounded-[18px] object-cover border-2 border-blue-600 shadow-md"
                />
                <div>
                  <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">
                    {driver.badge}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1">{driver.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{driver.rating}</span>
                    <span className="text-slate-400 text-[10px]">({driver.tripsCompleted}+ Rides)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-600 font-medium pt-2 border-t border-slate-200/80">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{driver.experienceYears} Years Commercial Driving Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{driver.specialty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Fluent in {driver.languages.join(", ")}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5 bg-white p-2.5 rounded-[12px] border border-slate-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Verified Police Background Clearance</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
