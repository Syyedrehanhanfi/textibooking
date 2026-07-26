"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, User, Phone, Mail, Send, AlertCircle, Loader2 } from "lucide-react";
import { Vehicle } from "@/types/booking";
import { AGENCY_CONFIG } from "@/config/config";

interface VehicleBookingModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleBookingModal({ vehicle, isOpen, onClose }: VehicleBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup: "",
    drop: "",
    date: "",
    timeHour: "12",
    timeMinute: "30",
    timePeriod: "AM",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen || !vehicle) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Required Field Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.pickup.trim() || !formData.drop.trim() || !formData.date) {
      setErrorMessage("Please fill in all required fields marked with *");
      return;
    }

    setIsSubmitting(true);

    const formattedTime = `${formData.timeHour}:${formData.timeMinute} ${formData.timePeriod}`;

    setTimeout(() => {
      // Formatted WhatsApp booking message
      const messageLines = [
        `*Taxi Booking Request - ${AGENCY_CONFIG.name}*`,
        ``,
        `*Vehicle:* ${vehicle.name}`,
        `*Full Name:* ${formData.name}`,
        `*Mobile Number:* ${formData.phone}`,
        `*Email Address:* ${formData.email || "Not provided"}`,
        `*Pickup Location:* ${formData.pickup}`,
        `*Drop Location:* ${formData.drop}`,
        `*Journey Date:* ${formData.date}`,
        `*Pickup Time:* ${formattedTime}`,
      ];

      const fullText = messageLines.join("\n");
      const encodedText = encodeURIComponent(fullText);
      const waUrl = `https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodedText}`;

      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }

      setIsSubmitting(false);
      onClose();
    }, 500);
  };

  // Hours list 01 to 12
  const hoursList = Array.from({ length: 12 }, (_, i) => {
    const num = i + 1;
    return num < 10 ? `0${num}` : `${num}`;
  });

  // Minutes list
  const minutesList = ["00", "15", "30", "45"];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative bg-white rounded-[18px] max-w-[500px] w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 z-10 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header Title Bar */}
          <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
            <h2 id="modal-title" className="text-lg font-black tracking-tight">
              Book {vehicle.name}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Vehicle Info Summary Strip */}
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-12 rounded-[10px] bg-slate-900 overflow-hidden shrink-0 border border-slate-200">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 leading-tight">
                  {vehicle.name}
                </h3>
                <p className="text-xs font-bold text-slate-500">
                  {vehicle.name}
                </p>
              </div>
            </div>
          </div>

          {/* Scrollable Form Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 bg-white">
            
            {/* Validation error message alert */}
            {errorMessage && (
              <div className="p-3 rounded-[12px] bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form id="vehicle-booking-form" onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* Full Name* */}
              <div>
                <label htmlFor="modal-name" className="block text-xs font-bold text-slate-800 mb-1">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Mobile Number* */}
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-800 mb-1">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="modal-phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Email Address* */}
              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold text-slate-800 mb-1">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    id="modal-email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Pickup Location* */}
              <div>
                <label htmlFor="modal-pickup" className="block text-xs font-bold text-slate-800 mb-1">
                  Pickup Location<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-cyan-600 absolute left-3 top-3.5" />
                  <input
                    id="modal-pickup"
                    type="text"
                    name="pickup"
                    required
                    placeholder="Enter pickup address"
                    value={formData.pickup}
                    onChange={handleInputChange}
                    className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Drop Location* */}
              <div>
                <label htmlFor="modal-drop" className="block text-xs font-bold text-slate-800 mb-1">
                  Drop Location<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-blue-600 absolute left-3 top-3.5" />
                  <input
                    id="modal-drop"
                    type="text"
                    name="drop"
                    required
                    placeholder="Enter drop address"
                    value={formData.drop}
                    onChange={handleInputChange}
                    className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Journey Date* & Pickup Time* (Formatted as 12:30 AM) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="modal-date" className="block text-xs font-bold text-slate-800 mb-1">
                    Journey Date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-cyan-600 absolute left-3 top-3.5" />
                    <input
                      id="modal-date"
                      type="date"
                      name="date"
                      required
                      placeholder="dd-mm-yyyy"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/20 text-slate-900 font-medium pl-9 pr-3 rounded-[12px] text-sm transition-all"
                    />
                  </div>
                </div>

                {/* 12-Hour Pickup Time Selector (Default: 12:30 AM) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Pickup Time<span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    {/* Hour Select (01 to 12) */}
                    <div>
                      <select
                        name="timeHour"
                        value={formData.timeHour}
                        onChange={handleInputChange}
                        className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white text-slate-900 font-bold px-2 rounded-[12px] text-xs transition-all cursor-pointer text-center"
                      >
                        {hoursList.map((hr) => (
                          <option key={hr} value={hr}>
                            {hr}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Minute Select */}
                    <div>
                      <select
                        name="timeMinute"
                        value={formData.timeMinute}
                        onChange={handleInputChange}
                        className="w-full h-11 bg-slate-50 border border-slate-300 focus:border-cyan-500 focus:bg-white text-slate-900 font-bold px-2 rounded-[12px] text-xs transition-all cursor-pointer text-center"
                      >
                        {minutesList.map((min) => (
                          <option key={min} value={min}>
                            {min}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* AM / PM Select */}
                    <div>
                      <select
                        name="timePeriod"
                        value={formData.timePeriod}
                        onChange={handleInputChange}
                        className="w-full h-11 bg-cyan-50 border border-cyan-300 text-cyan-800 font-black px-2 rounded-[12px] text-xs transition-all cursor-pointer text-center"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>

          {/* Modal Footer with Full Width Confirm Booking Button */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              form="vehicle-booking-form"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-[12px] bg-gradient-to-r from-[#00c8ff] to-[#0099ff] hover:from-[#00b4ed] hover:to-[#0088ed] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer focus:ring-2 focus:ring-cyan-400 disabled:opacity-75"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 fill-white/20" />
                  <span>Confirm Booking</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
