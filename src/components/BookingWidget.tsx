"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  User,
  Car,
  Users,
  FileText,
  Send,
  Plane,
  Navigation,
  CheckCircle2,
  Building2,
} from "lucide-react";
import { BookingFormData, TripType, OutstationMode } from "@/types/booking";
import { FLEET_VEHICLES } from "@/data/fleetData";
import { sendBookingToWhatsApp } from "@/utils/whatsapp";

interface BookingWidgetProps {
  initialVehicle?: string;
}

export default function BookingWidget({ initialVehicle }: BookingWidgetProps) {
  const [tripType, setTripType] = useState<TripType>("Outstation");
  const [outstationMode, setOutstationMode] = useState<OutstationMode>("one-way");

  const [formData, setFormData] = useState<BookingFormData>({
    vehicle: initialVehicle || "Sedan (Swift Dzire / Etios)",
    tripType: "Outstation",
    outstationMode: "one-way",
    pickup: "",
    drop: "",
    date: "",
    time: "",
    passenger: "1-4 Persons",
    name: "",
    phone: "",
    email: "",
    specialRequest: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleTripTypeChange = (type: TripType) => {
    setTripType(type);
    setFormData((prev) => ({
      ...prev,
      tripType: type,
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendBookingToWhatsApp(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 8000);
  };

  return (
    <div id="booking" className="w-full">
      <div className="bg-white/95 rounded-[18px] p-6 sm:p-8 shadow-2xl shadow-slate-950/30 border border-slate-200 backdrop-blur-xl relative overflow-hidden text-slate-900">
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

        {/* Tab Selection */}
        <div className="flex bg-slate-100/90 p-1.5 rounded-[18px] mb-6 gap-1 border border-slate-200">
          <button
            type="button"
            onClick={() => handleTripTypeChange("Outstation")}
            className={`flex-1 py-2.5 px-3 rounded-[14px] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              tripType === "Outstation"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>Outstation</span>
          </button>

          <button
            type="button"
            onClick={() => handleTripTypeChange("Local")}
            className={`flex-1 py-2.5 px-3 rounded-[14px] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              tripType === "Local"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Local Rental</span>
          </button>

          <button
            type="button"
            onClick={() => handleTripTypeChange("Airport Transfer")}
            className={`flex-1 py-2.5 px-3 rounded-[14px] font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              tripType === "Airport Transfer"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Airport Drop</span>
          </button>
        </div>

        {/* Sub Option for Outstation */}
        {tripType === "Outstation" && (
          <div className="flex gap-4 mb-5 px-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-semibold text-slate-700">
              <input
                type="radio"
                name="outstationMode"
                value="one-way"
                checked={outstationMode === "one-way"}
                onChange={() => {
                  setOutstationMode("one-way");
                  setFormData((prev) => ({ ...prev, outstationMode: "one-way" }));
                }}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span>One Way Drop</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-xs sm:text-sm font-semibold text-slate-700">
              <input
                type="radio"
                name="outstationMode"
                value="round-trip"
                checked={outstationMode === "round-trip"}
                onChange={() => {
                  setOutstationMode("round-trip");
                  setFormData((prev) => ({ ...prev, outstationMode: "round-trip" }));
                }}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
              />
              <span>Round Trip Package</span>
            </label>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pickup Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Pickup Address / Hub
            </label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-blue-600 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="pickup"
                required
                placeholder="e.g. Mumbai Airport / Home Address"
                value={formData.pickup}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all"
              />
            </div>
          </div>

          {/* Drop Location */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              {tripType === "Local" ? "City Sightseeing / Package" : "Destination / Drop Address"}
            </label>
            <div className="relative">
              <Building2 className="w-5 h-5 text-cyan-600 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="drop"
                required
                placeholder={
                  tripType === "Local"
                    ? "e.g. 8 Hours / 80 KM City Package"
                    : "e.g. Pune Swargate / Hotel"
                }
                value={formData.drop}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all"
              />
            </div>
          </div>

          {/* Vehicle Selection & Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Select Vehicle
              </label>
              <div className="relative">
                <Car className="w-5 h-5 text-blue-600 absolute left-3.5 top-3.5" />
                <select
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-semibold pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all appearance-none"
                >
                  {FLEET_VEHICLES.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} (₹{v.ratePerKm}/km)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Passengers
              </label>
              <div className="relative">
                <Users className="w-5 h-5 text-blue-600 absolute left-3.5 top-3.5" />
                <select
                  name="passenger"
                  value={formData.passenger}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-semibold pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all appearance-none"
                >
                  <option value="1 Person">1 Person</option>
                  <option value="2-3 Persons">2-3 Persons</option>
                  <option value="4 Persons (Sedan Max)">4 Persons (Sedan Max)</option>
                  <option value="5-6 Persons (SUV)">5-6 Persons (SUV)</option>
                  <option value="7+ Group Travel">7+ Group Travel</option>
                </select>
              </div>
            </div>
          </div>

          {/* Date & Time Pickers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Pickup Date
              </label>
              <div className="relative">
                <Calendar className="w-5 h-5 text-blue-600 absolute left-3.5 top-3.5" />
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Pickup Time
              </label>
              <div className="relative">
                <Clock className="w-5 h-5 text-blue-600 absolute left-3.5 top-3.5" />
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium pl-11 pr-4 py-3 rounded-[14px] text-sm transition-all"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="pt-2 border-t border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <User className="w-4 h-4 text-blue-600" /> Passenger Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium px-3.5 py-2.5 rounded-[14px] text-sm transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium px-3.5 py-2.5 rounded-[14px] text-sm transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (Optional)"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium px-3.5 py-2.5 rounded-[14px] text-sm transition-all"
                />
              </div>
            </div>
          </div>

          {/* Special Request */}
          <div>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                name="specialRequest"
                placeholder="Special Request (e.g. Roof Carrier, Child Seat, Extra Luggage)"
                value={formData.specialRequest}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/20 text-slate-900 font-medium pl-10 pr-4 py-2.5 rounded-[14px] text-xs sm:text-sm transition-all"
              />
            </div>
          </div>

          {/* WhatsApp Direct Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-base py-4 rounded-[18px] shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2.5 transition-all transform active:scale-98 cursor-pointer mt-4"
          >
            <Send className="w-5 h-5 fill-white/20" />
            <span>BOOK TAXI ON WHATSAPP INSTANTLY</span>
          </button>
        </form>

        {/* Feedback Alert when user clicks Submit */}
        {submitted && (
          <div className="mt-4 p-4 rounded-[14px] bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm font-medium">
              <p className="font-bold text-emerald-950">WhatsApp Opened Automatically!</p>
              <p>Your formatted booking request has been generated and sent to our dispatch team on WhatsApp.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
