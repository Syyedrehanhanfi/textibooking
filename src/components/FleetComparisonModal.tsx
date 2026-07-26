"use client";

import React, { useState } from "react";
import { FLEET_VEHICLES } from "@/data/fleetData";
import { X, Check, ArrowRightLeft, Users, Briefcase, Wind, MessageSquare } from "lucide-react";
import { sendBookingToWhatsApp } from "@/utils/whatsapp";

interface FleetComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FleetComparisonModal({ isOpen, onClose }: FleetComparisonModalProps) {
  const [vehicle1Id, setVehicle1Id] = useState<string>("sedan");
  const [vehicle2Id, setVehicle2Id] = useState<string>("innova-crysta");

  if (!isOpen) return null;

  const v1 = FLEET_VEHICLES.find((v) => v.id === vehicle1Id) || FLEET_VEHICLES[1];
  const v2 = FLEET_VEHICLES.find((v) => v.id === vehicle2Id) || FLEET_VEHICLES[3];

  const handleBookVehicle = (vehicleName: string) => {
    onClose();
    sendBookingToWhatsApp({
      vehicle: vehicleName,
      tripType: "outstation",
      pickup: "City Pickup",
      drop: "Destination",
      date: new Date().toISOString().split("T")[0],
      time: "10:00 AM",
      passenger: "1-4 Persons",
      name: "Comparison Modal Customer",
      phone: "Required",
      email: "",
      specialRequest: `Selected ${vehicleName} after side-by-side comparison`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
      <div className="bg-white rounded-[18px] max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative p-6 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-[14px] bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Compare Taxi Models</h3>
              <p className="text-xs text-slate-500 font-medium">Side-by-side specs, rates, and capacity comparison</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Selectors */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Vehicle 1
            </label>
            <select
              value={vehicle1Id}
              onChange={(e) => setVehicle1Id(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 font-bold text-slate-900 text-sm p-3 rounded-[14px]"
            >
              {FLEET_VEHICLES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Vehicle 2
            </label>
            <select
              value={vehicle2Id}
              onChange={(e) => setVehicle2Id(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 font-bold text-slate-900 text-sm p-3 rounded-[14px]"
            >
              {FLEET_VEHICLES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 gap-6 pt-2">
          
          {/* Vehicle 1 Details */}
          <div className="bg-slate-50 p-5 rounded-[18px] border border-slate-200 space-y-4">
            <img src={v1.image} alt={v1.name} className="w-full h-40 object-cover rounded-[14px]" />
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-100 px-2.5 py-0.5 rounded-md">
                {v1.categoryBadge}
              </span>
              <h4 className="text-base font-extrabold text-slate-900 mt-1">{v1.name}</h4>
              <p className="text-2xl font-black text-blue-600 mt-1">₹{v1.ratePerKm} <span className="text-xs text-slate-500 font-medium">/ KM</span></p>
            </div>

            <div className="space-y-2 text-xs text-slate-700 font-semibold border-t border-slate-200/80 pt-3">
              <div className="flex justify-between">
                <span>Base Pickup Fare:</span>
                <span className="font-bold text-slate-900">₹{v1.baseFare}</span>
              </div>
              <div className="flex justify-between">
                <span>Seating Capacity:</span>
                <span className="font-bold text-slate-900">{v1.seats} Persons</span>
              </div>
              <div className="flex justify-between">
                <span>Luggage Capacity:</span>
                <span className="font-bold text-slate-900">{v1.luggage} Standard Bags</span>
              </div>
              <div className="flex justify-between">
                <span>Air Conditioning:</span>
                <span className="font-bold text-emerald-600">Included</span>
              </div>
            </div>

            <button
              onClick={() => handleBookVehicle(v1.name)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-[14px] flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>Book {v1.name.split("(")[0]}</span>
            </button>
          </div>

          {/* Vehicle 2 Details */}
          <div className="bg-slate-50 p-5 rounded-[18px] border border-slate-200 space-y-4">
            <img src={v2.image} alt={v2.name} className="w-full h-40 object-cover rounded-[14px]" />
            <div>
              <span className="text-[10px] font-bold text-cyan-700 uppercase bg-cyan-100 px-2.5 py-0.5 rounded-md">
                {v2.categoryBadge}
              </span>
              <h4 className="text-base font-extrabold text-slate-900 mt-1">{v2.name}</h4>
              <p className="text-2xl font-black text-cyan-600 mt-1">₹{v2.ratePerKm} <span className="text-xs text-slate-500 font-medium">/ KM</span></p>
            </div>

            <div className="space-y-2 text-xs text-slate-700 font-semibold border-t border-slate-200/80 pt-3">
              <div className="flex justify-between">
                <span>Base Pickup Fare:</span>
                <span className="font-bold text-slate-900">₹{v2.baseFare}</span>
              </div>
              <div className="flex justify-between">
                <span>Seating Capacity:</span>
                <span className="font-bold text-slate-900">{v2.seats} Persons</span>
              </div>
              <div className="flex justify-between">
                <span>Luggage Capacity:</span>
                <span className="font-bold text-slate-900">{v2.luggage} Standard Bags</span>
              </div>
              <div className="flex justify-between">
                <span>Air Conditioning:</span>
                <span className="font-bold text-emerald-600">Included</span>
              </div>
            </div>

            <button
              onClick={() => handleBookVehicle(v2.name)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs py-3 rounded-[14px] flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>Book {v2.name.split("(")[0]}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
