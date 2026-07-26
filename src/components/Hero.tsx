"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Car, ChevronLeft, ChevronRight, ShieldCheck, Clock, Award } from "lucide-react";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";
import { AGENCY_CONFIG } from "@/config/config";

export default function Hero() {
  // All background images from public/backgound
  const heroImages = [
    "/backgound/89e3be1a-4e9e-4975-8775-d822f6735afb.jpg",
    "/backgound/9fe8433c-4377-4515-be99-1f01707caade.jpg",
    "/backgound/beab00df-fb72-427a-9afd-65e248ff6819.jpg",
    "/backgound/e2582cf7-56f0-4064-a753-2f12530970d6.jpg",
    "/backgound/e45d40e3-9e26-4ffe-947d-6ed20b267a8c.jpg",
    "/backgound/e8ec4f6a-470f-4a16-bc45-f65c42a130c4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play timer (slides every 2.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleScrollToFleet = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("fleet");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="py-6 lg:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* TOP SECTION: Seamless Full Banner (Zero Black Framing / No Black Bars) */}
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1] w-full rounded-[18px] overflow-hidden shadow-xl border border-slate-200 bg-white group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={heroImages[currentIndex]}
                alt={`${AGENCY_CONFIG.name} Banner ${currentIndex + 1}`}
                fill
                priority={currentIndex === 0}
                quality={95}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain object-center p-2 sm:p-4"
              />
            </motion.div>
          </AnimatePresence>

          {/* Slide Navigation Arrows */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md flex items-center justify-center border border-white/20 transition-all cursor-pointer hover:scale-105"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-slate-900/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? "w-6 bg-cyan-400" : "w-2 bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: Hero Content Rendered Cleanly Below The Image */}
        <div className="text-center max-w-4xl mx-auto space-y-5 py-2">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full shadow-xs">
            <Award className="w-4 h-4 text-blue-600" />
            <span>{AGENCY_CONFIG.name} — {AGENCY_CONFIG.tagline}</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
            Surat's Premier Outstation & Local Taxi Service <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              At Best Per-KM Rates
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg font-semibold leading-relaxed max-w-2xl mx-auto">
            Book Sedan, SUV & Innova Crysta cabs from Surat for one-way drops, round trips, and airport transfers with 24/7 doorstep pickup and zero hidden charges.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Verified Drivers
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs">
              <Clock className="w-4 h-4 text-blue-600" /> 24x7 WhatsApp Dispatch
            </span>
          </div>

          {/* CTA Action Buttons (Brand Logo Palette) */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => sendGeneralInquiryWhatsApp("Brand Banner Hero WhatsApp Booking")}
              className="btn-brand-whatsapp flex items-center gap-2.5 text-sm sm:text-base px-7 py-3.5 cursor-pointer active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>Book Taxi On WhatsApp</span>
            </button>

            <a
              href="#fleet"
              onClick={handleScrollToFleet}
              className="btn-brand-primary flex items-center gap-2.5 text-sm sm:text-base px-7 py-3.5 cursor-pointer active:scale-95"
            >
              <Car className="w-5 h-5" />
              <span>View Available Cabs</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
