"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Fuel, Wind, Briefcase, Phone, MessageSquare, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FLEET_VEHICLES } from "@/data/fleetData";
import { Vehicle } from "@/types/booking";
import VehicleBookingModal from "@/components/VehicleBookingModal";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";
import { AGENCY_CONFIG } from "@/config/config";

export default function FleetSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  // Gallery Lightbox Modal State
  const [galleryVehicle, setGalleryVehicle] = useState<Vehicle | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const displayedVehicles = showAllVehicles ? FLEET_VEHICLES : FLEET_VEHICLES.slice(0, 6);

  const handleToggleVehicles = () => {
    if (showAllVehicles) {
      setShowAllVehicles(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setShowAllVehicles(true);
    }
  };

  const handleOpenBooking = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseBooking = () => {
    setSelectedVehicle(null);
  };

  const handleOpenGallery = (vehicle: Vehicle) => {
    setGalleryVehicle(vehicle);
    setGalleryIndex(0);
  };

  const handleCloseGallery = () => {
    setGalleryVehicle(null);
  };

  const currentGalleryImages = galleryVehicle?.galleryImages || (galleryVehicle ? [galleryVehicle.image] : []);

  const handleNextGalleryImage = () => {
    setGalleryIndex((prev) => (prev + 1) % currentGalleryImages.length);
  };

  const handlePrevGalleryImage = () => {
    setGalleryIndex((prev) => (prev - 1 + currentGalleryImages.length) % currentGalleryImages.length);
  };

  return (
    <section id="fleet" className="py-12 lg:py-16 bg-[#f8fafc] relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Centered Section Title */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] tracking-tight">
            Premium Fleet & Innova on Rent in Surat
          </h2>
          <p className="text-slate-500 text-sm font-medium mt-2">
            Browse our top-condition Sedans, Premium SUVs, and Innova Crysta cabs for outstation and local trips. Click on a vehicle image to view photos.
          </p>
        </div>

        {/* 3-Column Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {displayedVehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: (showAllVehicles && index >= 6 ? index - 6 : index) * 0.08 }}
              className="bg-white rounded-[16px] border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden relative group"
            >
              {/* Top Right Cyan Price Badge */}
              {vehicle.pricePerKmDisplay && (
                <div className="absolute top-3.5 right-3.5 bg-[#00c8ff] text-white text-xs font-black px-3 py-1 rounded-[6px] shadow-sm z-10">
                  {vehicle.pricePerKmDisplay}
                </div>
              )}

              {/* Clickable Vehicle Image Container */}
              <div
                onClick={() => handleOpenGallery(vehicle)}
                className="relative aspect-[16/9] w-full bg-white overflow-hidden p-2 cursor-pointer group/img"
              >
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} Taxi Cab in Surat`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />

                {/* View Photos Badge Overlay */}
                <div className="absolute bottom-3 left-3 bg-slate-900/80 hover:bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5 shadow-md border border-white/20 transition-all">
                  <Camera className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View {vehicle.galleryImages?.length || 1} Photos</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-white">
                
                {/* Name Row */}
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-black text-[#0f172a] leading-tight">
                    {vehicle.name}
                  </h3>
                </div>

                {/* 2-Column Icon Specs Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs font-bold text-slate-700 py-1">
                  
                  {/* Seats Spec */}
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{vehicle.seatsDisplay || `${vehicle.seats} Seats`}</span>
                  </div>

                  {/* Fuel Spec */}
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{vehicle.fuelType}</span>
                  </div>

                  {/* AC Spec */}
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>{vehicle.ac ? "AC" : "Non-AC"}</span>
                  </div>

                  {/* Luggage Spec */}
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{vehicle.luggageDisplay || `${vehicle.luggage} Luggage`}</span>
                  </div>

                </div>

                {/* Full Width Cyan/Blue Gradient Book Now Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleOpenBooking(vehicle)}
                    className="w-full bg-gradient-to-r from-[#00c8ff] to-[#0099ff] hover:from-[#00b4ed] hover:to-[#0088ed] text-white font-black text-sm py-3 rounded-[10px] shadow-sm transition-all cursor-pointer text-center focus:ring-2 focus:ring-cyan-400"
                    aria-label={`Book ${vehicle.name}`}
                  >
                    Book Now
                  </button>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        {FLEET_VEHICLES.length > 6 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleToggleVehicles}
              className="bg-white border border-slate-200 hover:border-blue-300 text-blue-600 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.15)] transition-all flex items-center gap-2 cursor-pointer"
            >
              {showAllVehicles ? (
                <span>Show Less ↑</span>
              ) : (
                <span>View All Fleet →</span>
              )}
            </motion.button>
          </div>
        )}

      </div>

      {/* Floating Action Buttons on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3">
        {/* Floating WhatsApp Green Icon */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => sendGeneralInquiryWhatsApp("Floating WhatsApp Click")}
          className="w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center cursor-pointer border-2 border-white"
          aria-label="WhatsApp Quick Connect"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
        </motion.button>

        {/* Floating Call Blue Icon */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${AGENCY_CONFIG.phoneNumber}`}
          className="w-13 h-13 rounded-full bg-[#2563EB] text-white shadow-xl flex items-center justify-center cursor-pointer border-2 border-white"
          aria-label={`Call ${AGENCY_CONFIG.phoneDisplay}`}
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>

      {/* Interactive Multi-Image Lightbox Gallery Modal */}
      <AnimatePresence>
        {galleryVehicle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseGallery}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-slate-900 rounded-[18px] max-w-4xl w-full p-4 sm:p-6 shadow-2xl border border-slate-800 z-10 flex flex-col gap-4 overflow-hidden"
            >
              {/* Gallery Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-white">
                <div>
                  <h3 className="text-lg font-black">{galleryVehicle.name} Photo Gallery</h3>
                  <p className="text-xs text-slate-400">Photo {galleryIndex + 1} of {currentGalleryImages.length}</p>
                </div>
                <button
                  onClick={handleCloseGallery}
                  className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
                  aria-label="Close Gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Photo View */}
              <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-slate-950 flex items-center justify-center group">
                <Image
                  src={currentGalleryImages[galleryIndex]}
                  alt={`${galleryVehicle.name} Cab Service in Surat - View ${galleryIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />

                {/* Left & Right Arrows */}
                {currentGalleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevGalleryImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={handleNextGalleryImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Gallery Thumbnails Strip & Action Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2.5 overflow-x-auto max-w-full pb-1">
                  {currentGalleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setGalleryIndex(idx)}
                      className={`relative w-20 h-14 rounded-[10px] overflow-hidden border-2 transition-all cursor-pointer ${
                        galleryIndex === idx
                          ? "border-cyan-400 ring-2 ring-cyan-400/30 scale-105"
                          : "border-slate-700 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    handleCloseGallery();
                    handleOpenBooking(galleryVehicle);
                  }}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#00c8ff] to-[#0099ff] hover:from-[#00b4ed] hover:to-[#0088ed] text-white font-black text-sm px-6 py-3 rounded-[12px] shadow-lg shrink-0 cursor-pointer"
                >
                  Book {galleryVehicle.name} Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dedicated Vehicle Booking Modal */}
      {selectedVehicle && (
        <VehicleBookingModal
          vehicle={selectedVehicle}
          isOpen={!!selectedVehicle}
          onClose={handleCloseBooking}
        />
      )}
    </section>
  );
}
