"use client";

import React from "react";
import { POPULAR_ROUTES } from "@/data/routesData";
import { MapPin, Clock, MessageSquare, Check } from "lucide-react";
import { sendBookingToWhatsApp } from "@/utils/whatsapp";

export default function PopularRoutes() {
  const handleBookRoutePackage = (routeTitle: string, price: number, vehicle: string) => {
    sendBookingToWhatsApp({
      vehicle: vehicle,
      tripType: "Outstation",
      pickup: routeTitle.split("⇄")[0]?.trim() || "Start City",
      drop: routeTitle.split("⇄")[1]?.trim() || "End Destination",
      date: new Date().toISOString().split("T")[0],
      time: "08:00 AM",
      passenger: "1-4 Persons",
      name: "One-Way Route Customer",
      phone: "Required",
      email: "",
      specialRequest: `Interested in One-Way Outstation Special: ${routeTitle} at ₹${price}`,
    });
  };

  return (
    <section id="packages" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Popular One-Way Outstation Routes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Top Requested Outstation Taxi Deals
          </h2>
          <p className="text-slate-600 text-base font-semibold">
            Pre-booked fixed-fare one-way outstation cabs with doorstep pickup, expressway toll included, and zero return fare charges.
          </p>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route) => (
            <div
              key={route.id}
              className="bg-white rounded-[18px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Banner */}
              <div className="relative h-44 overflow-hidden bg-slate-900">
                <img
                  src={route.image}
                  alt={route.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5 bg-slate-900/90 text-cyan-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {route.tag}
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-[10px] shadow-md">
                  {route.vehicleType}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 mb-1">{route.title}</h3>
                  <p className="text-xs text-slate-500 font-semibold mb-3">{route.subtitle}</p>

                  <div className="space-y-1.5 text-xs text-slate-600 font-bold mb-4 bg-slate-50 p-3 rounded-[14px]">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-blue-600" /> Distance
                      </span>
                      <span className="font-bold text-slate-900">{route.distance}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-cyan-600" /> Duration
                      </span>
                      <span className="font-bold text-slate-900">{route.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-[11px] text-slate-600 mb-2">
                    {route.includes.map((inc, i) => (
                      <li key={i} className="flex items-center gap-1.5 font-semibold">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">All-Inclusive Fare</span>
                    <span className="text-xl font-black text-blue-600">₹{route.price}</span>
                  </div>

                  <button
                    onClick={() => handleBookRoutePackage(route.title, route.price, route.vehicleType)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 px-4 rounded-[14px] shadow-md shadow-orange-500/20 flex items-center gap-1.5 transition-all cursor-pointer focus:ring-2 focus:ring-orange-500"
                    aria-label={`Book ${route.title} on WhatsApp`}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                    <span>Book One-Way</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
