"use client";

import React, { useState } from "react";
import { Calculator, Navigation, ShieldCheck, Sun, Moon, MessageSquare } from "lucide-react";
import { FLEET_VEHICLES } from "@/data/fleetData";
import { sendBookingToWhatsApp } from "@/utils/whatsapp";

export default function FareEstimator() {
  const [distanceKm, setDistanceKm] = useState<number>(120);
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>("sedan");
  const [isNightTime, setIsNightTime] = useState<boolean>(false);
  const [includeTollEstimate, setIncludeTollEstimate] = useState<boolean>(true);

  const currentVehicle = FLEET_VEHICLES.find((v) => v.id === selectedVehicleId) || FLEET_VEHICLES[1];

  // Calculation Logic
  const kmCharge = Math.max(distanceKm, 50) * currentVehicle.ratePerKm;
  const baseFare = currentVehicle.baseFare;
  const standardDriverAllowance = distanceKm > 200 ? 400 : 250;
  const nightAllowance = isNightTime ? 300 : 0;
  const tollEstimate = includeTollEstimate ? Math.round(distanceKm * 1.5) : 0;

  const estimatedTotal = baseFare + kmCharge + standardDriverAllowance + nightAllowance + tollEstimate;

  const handleWhatsAppQuote = () => {
    sendBookingToWhatsApp({
      vehicle: currentVehicle.name,
      tripType: "outstation",
      pickup: "Estimated Trip Location",
      drop: `${distanceKm} KM Journey (${isNightTime ? "Night Travel" : "Day Travel"})`,
      date: new Date().toISOString().split("T")[0],
      time: isNightTime ? "11:00 PM (Night)" : "10:00 AM (Day)",
      passenger: "1-4 Persons",
      name: "Tariff Calculator Customer",
      phone: "Required",
      email: "",
      specialRequest: `Fare Estimate Quote for ${distanceKm} KM in ${currentVehicle.name}. Total: ₹${estimatedTotal} (${isNightTime ? "Night Allowance Included" : "Day Travel"})`,
    });
  };

  return (
    <section id="tariff" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header text */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" /> Instant Fare Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Transparent Pricing With <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                Zero Hidden Charges
              </span>
            </h2>
            <p className="text-slate-400 font-medium text-base leading-relaxed">
              Use our live fare calculator to estimate your trip cost. Enter your approximate total distance below. For exact point-to-point distances, please refer to Google Maps.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Night Allowances & Driver Charges Transparently Calculated</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>GST & Highway Toll Receipts Provided</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-300 font-semibold">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>Free cancellation up to 2 hours before pickup</span>
              </div>
            </div>
          </div>

          {/* Interactive Calculator Card */}
          <div className="lg:col-span-7">
            <div className="glass-dark rounded-[18px] p-6 sm:p-8 border border-slate-700/80 shadow-2xl space-y-6">
              
              {/* Vehicle Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  1. Select Vehicle Class
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {FLEET_VEHICLES.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`p-3 rounded-[14px] text-left border transition-all cursor-pointer ${
                        selectedVehicleId === v.id
                          ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30"
                          : "bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600"
                      }`}
                    >
                      <p className="text-xs font-bold truncate">{v.name.split("(")[0]}</p>
                      <p className="text-[11px] opacity-80 mt-0.5">₹{v.ratePerKm}/KM</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Day / Night Travel Toggle & Toll Option */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex bg-slate-800 p-1 rounded-[14px] border border-slate-700">
                  <button
                    type="button"
                    onClick={() => setIsNightTime(false)}
                    className={`flex-1 py-2 text-xs font-bold rounded-[10px] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      !isNightTime ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-400" /> Day Travel (6am-10pm)
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsNightTime(true)}
                    className={`flex-1 py-2 text-xs font-bold rounded-[10px] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      isNightTime ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-cyan-300" /> Night Travel (+₹300)
                  </button>
                </div>

                <label className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded-[14px] border border-slate-700 cursor-pointer text-xs font-semibold text-slate-300">
                  <input
                    type="checkbox"
                    checked={includeTollEstimate}
                    onChange={(e) => setIncludeTollEstimate(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded-md focus:ring-blue-500"
                  />
                  <span>Include Highway Toll Estimate</span>
                </label>
              </div>

              {/* Distance Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Navigation className="w-4 h-4 text-cyan-400" /> 2. Estimated Trip Distance
                  </label>
                  <span className="text-lg font-black text-cyan-400">{distanceKm} KM</span>
                </div>

                <input
                  type="range"
                  min={10}
                  max={500}
                  step={5}
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-medium">
                  <span>10 KM (Short City Ride)</span>
                  <span>250 KM (Outstation)</span>
                  <span>500 KM (Long Distance)</span>
                </div>
              </div>

              {/* Price Breakdown Box */}
              <div className="bg-slate-950/80 rounded-[18px] p-5 border border-slate-800 space-y-2.5">
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Base Pickup Fare</span>
                  <span>₹{baseFare}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Distance Charge ({distanceKm} KM × ₹{currentVehicle.ratePerKm})</span>
                  <span>₹{kmCharge}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Standard Driver Allowance</span>
                  <span>₹{standardDriverAllowance}</span>
                </div>
                {isNightTime && (
                  <div className="flex justify-between text-xs text-indigo-300 font-semibold">
                    <span>Night Shift Driver Allowance</span>
                    <span>+₹{nightAllowance}</span>
                  </div>
                )}
                {includeTollEstimate && (
                  <div className="flex justify-between text-xs text-slate-400 font-medium">
                    <span>Estimated Expressway Tolls</span>
                    <span>₹{tollEstimate}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-slate-800 flex justify-between items-end">
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase">Estimated Total Fare</span>
                    <span className="text-[10px] text-cyan-400 font-semibold">*Zero hidden charges guaranteed</span>
                  </div>
                  <span className="text-3xl font-black text-cyan-400">₹{estimatedTotal}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <button
                onClick={handleWhatsAppQuote}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm sm:text-base py-3.5 rounded-[18px] shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                <span>Lock This Fare & Book on WhatsApp</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
