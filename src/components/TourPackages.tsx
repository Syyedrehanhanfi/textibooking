"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle2, Phone, MessageSquare, X, ChevronLeft, ChevronRight } from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/data/tourPackagesData";
import { AGENCY_CONFIG } from "@/config/config";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";

const TourCard = ({ pkg, index, onImageClick }: { pkg: TourPackage; index: number; onImageClick: (pkg: TourPackage) => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-[18px] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.15)] transition-shadow duration-300 border border-slate-100"
    >
      {/* Image Container with Zoom Effect */}
      <div 
        className="relative h-56 overflow-hidden cursor-pointer"
        onClick={() => onImageClick(pkg)}
      >
        <Image
          src={pkg.image}
          alt={`${pkg.title} Tour Package from Surat`}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />
        
        {/* Top Badges */}
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="backdrop-blur-md bg-white/20 border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {pkg.duration}
          </div>
        </div>


      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {pkg.title}
        </h3>

        <div className="flex-1 space-y-4">
          {/* Highlights */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Highlights</p>
            <ul className="flex flex-wrap gap-1.5">
              {pkg.highlights.map((highlight, idx) => (
                <li key={idx} className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-1 rounded-md flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-blue-500" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Actions */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <a
            href={`tel:${AGENCY_CONFIG.phoneNumber}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-[14px] transition-transform duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.95]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => sendGeneralInquiryWhatsApp(`I am interested in the ${pkg.title} (${pkg.duration}) tour package.`)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-[14px] transition-transform duration-200 shadow-sm shadow-orange-500/20 cursor-pointer hover:scale-[1.02] active:scale-[0.95]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function TourPackages() {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showAllPackages, setShowAllPackages] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const displayedPackages = showAllPackages ? TOUR_PACKAGES : TOUR_PACKAGES.slice(0, 4);

  const handleTogglePackages = () => {
    if (showAllPackages) {
      setShowAllPackages(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setShowAllPackages(true);
    }
  };

  return (
    <section className="py-20 bg-slate-50" id="tours" ref={sectionRef}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4"
          >
            <MapPin className="w-4 h-4" />
            <span>Premium Getaways</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-5"
          >
            Outstation Taxi <span className="text-blue-600">Tour Packages from Surat</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Book outstation cabs from Surat to explore Gujarat, Maharashtra, and India's top pilgrimage destinations with our expertly crafted tour packages.
          </motion.p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
          {displayedPackages.map((pkg, index) => (
            <TourCard 
              key={pkg.id} 
              pkg={pkg} 
              index={showAllPackages && index >= 4 ? index - 4 : index} 
              onImageClick={(pkg) => {
                setSelectedTour(pkg);
                setActiveImageIndex(0);
              }} 
            />
          ))}
        </div>

        {/* Toggle Button */}
        {TOUR_PACKAGES.length > 4 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTogglePackages}
              className="bg-white border border-slate-200 hover:border-blue-300 text-blue-600 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.15)] transition-all flex items-center gap-2 cursor-pointer"
            >
              {showAllPackages ? (
                <span>Show Less ↑</span>
              ) : (
                <span>View All Packages →</span>
              )}
            </motion.button>
          </div>
        )}

      </div>

      {/* Tour Details Modal */}
      {selectedTour && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedTour(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedTour(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="bg-white rounded-[20px] overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 sm:h-80 w-full group">
              <Image
                src={selectedTour.galleryImages ? selectedTour.galleryImages[activeImageIndex] : selectedTour.image}
                alt={`${selectedTour.title} Tour Package from Surat`}
                fill
                className="object-cover transition-opacity duration-500"
              />
              {selectedTour.galleryImages && selectedTour.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev === 0 ? selectedTour.galleryImages!.length - 1 : prev - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow transition-colors z-10 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-800" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev === selectedTour.galleryImages!.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow transition-colors z-10 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-800" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {selectedTour.galleryImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(i);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeImageIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{selectedTour.title}</h3>
              {selectedTour.description ? (
                <div className="text-slate-600 leading-relaxed whitespace-pre-wrap text-[15px] sm:text-base">
                  {selectedTour.description}
                </div>
              ) : (
                <div className="text-slate-600 leading-relaxed text-[15px] sm:text-base">
                  <p>Explore {selectedTour.title} on this {selectedTour.duration} journey with Khodal Tours.</p>
                  <p className="mt-4 font-semibold text-slate-800">Highlights include:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {selectedTour.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedTour(null);
                    sendGeneralInquiryWhatsApp(`I am interested in the ${selectedTour.title} (${selectedTour.duration}) tour package.`);
                  }}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold px-6 py-3.5 rounded-xl transition-transform duration-200 w-full cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
