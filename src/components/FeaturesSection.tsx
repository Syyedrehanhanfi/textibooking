"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Clock,
  DollarSign,
  UserCheck,
  Car,
  Headphones,
  Compass,
  Star,
  Users,
  MapPin,
  ShieldCheck
} from "lucide-react";
import { AGENCY_CONFIG } from "@/config/config";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";

export default function FeaturesSection() {
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Selected 5 premium images for the mobile carousel
  const carouselImages = [
    { src: "/about/main.jpg", label: "Tempo Traveller" },
    { src: "/about/122d4302-dbf5-47c5-a31f-7193abfb7193.jpg", label: "Premium SUV" },
    { src: "/about/894482e0-8f5a-44ff-b899-6e2d1c2d6a94.jpg", label: "Comfortable Rides" },
    { src: "/about/beab00df-fb72-427a-9afd-65e248ff6819.jpg", label: "24/7 Availability & Instant Booking" },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveCarouselIndex(index);
  };

  const bullets = [
    "Years of industry experience",
    "Professional & verified drivers",
    "Clean & sanitized premium vehicles",
    "24/7 dedicated customer support",
    "Safe & comfortable outstation travel",
    "Gujarat, Rajasthan & Maharashtra specialists"
  ];

  const stats = [
    { icon: Users, value: "25,000+", label: "Happy Customers", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: MapPin, value: "5000+", label: "Trips Completed", color: "text-emerald-600", bg: "bg-emerald-100" },
    { icon: Car, value: "50+", label: "Premium Vehicles", color: "text-orange-600", bg: "bg-orange-100" },
    { icon: Star, value: "4.9/5", label: "Customer Rating", color: "text-amber-500", bg: "bg-amber-100" },
  ];

  const whyChooseUsList = [
    {
      number: "01",
      title: "Punctual Cabs in Surat",
      desc: "Get on-time airport drops and late-night pickups. Our local Surat taxi service never keeps you waiting.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Lowest Per-KM Rates",
      desc: "Enjoy affordable outstation taxi fares from Surat with zero hidden charges. We offer transparent pricing for every cab booking.",
      icon: DollarSign,
    },
    {
      number: "03",
      title: "Expert Local Drivers",
      desc: "Travel safely with verified chauffeurs who know every route in Gujarat and Maharashtra for a seamless outstation cab experience.",
      icon: UserCheck,
    },
    {
      number: "04",
      title: "Sanitized Premium Fleet",
      desc: "Book a clean AC Sedan, SUV, or hire an Innova on rent in Surat, fully equipped with GPS for a comfortable journey.",
      icon: Car,
    },
    {
      number: "05",
      title: "Instant WhatsApp Booking",
      desc: "Skip the apps! Book your Surat cab in seconds via WhatsApp or call our 24/7 customer support for outstation taxi inquiries.",
      icon: Headphones,
    },
    {
      number: "06",
      title: "All-in-One Travel",
      desc: "The top choice for Surat local sightseeing, one-way outstation drops, airport transfers, and wedding car rentals.",
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* NEW REDESIGNED ABOUT US SECTION */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE (60% Desktop, Full Width Mobile) - Premium Image & Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-[55%] flex flex-col space-y-4"
          >
            {/* Main Featured Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <Image
                src={carouselImages[activeCarouselIndex].src}
                alt={`${carouselImages[activeCarouselIndex].label} Taxi in Surat`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 pointer-events-none text-white">
                <span className="bg-blue-600/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md mb-2 inline-block">Premium Fleet</span>
                <h3 className="text-xl sm:text-2xl font-black">{carouselImages[activeCarouselIndex].label}</h3>
              </div>
            </div>

            {/* Mobile/Tablet Horizontal Snap Carousel */}
            <div className="lg:hidden relative">
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-3 pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {carouselImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCarouselIndex(idx);
                      if (scrollRef.current) {
                        const width = scrollRef.current.clientWidth;
                        scrollRef.current.scrollTo({ left: idx * width, behavior: 'smooth' });
                      }
                    }}
                    className={`relative w-[280px] sm:w-[320px] aspect-[16/9] shrink-0 snap-center rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeCarouselIndex === idx ? 'border-blue-500 shadow-md scale-100' : 'border-transparent opacity-60 scale-95 hover:opacity-100'
                    }`}
                  >
                    <Image src={img.src} alt={`${img.label} Cab Service`} fill sizes="320px" className="object-cover" />
                  </button>
                ))}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-2">
                {carouselImages.map((_, idx) => (
                  <div key={idx} className={`w-2 h-2 rounded-full transition-all ${activeCarouselIndex === idx ? 'w-6 bg-blue-600' : 'bg-slate-300'}`} />
                ))}
              </div>
            </div>

            {/* Desktop Thumbnails (Optional, minimal look) */}
            <div className="hidden lg:grid grid-cols-5 gap-3 pt-2">
              {carouselImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCarouselIndex(idx)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeCarouselIndex === idx ? 'border-blue-500 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img.src} alt={`${img.label} Cab Service`} fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>

          </motion.div>

          {/* RIGHT SIDE (40% Desktop) - Content, Stats, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[45%] flex flex-col space-y-8"
          >
            {/* Header Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" /> About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Highly Reliable Taxi Service in Surat & Gujarat
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                {AGENCY_CONFIG.name} is Surat's top-rated travel agency dedicated to providing safe, comfortable, and affordable cab services. Whether you need a local Surat taxi, an airport drop, or an outstation tour package, our verified drivers ensure a seamless ride.
              </p>
            </div>

            {/* Trust Bullet Points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Trust Statistics Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900">{stat.value}</h4>
                      <p className="text-xs font-bold text-slate-500">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-black text-slate-900">Book Your Ride Today</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${AGENCY_CONFIG.phoneNumber}`}
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => sendGeneralInquiryWhatsApp("I want to book a ride.")}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Book Now</span>
                </button>
              </div>
            </div>

          </motion.div>

        </div>


        {/* SECTION 3: WHY CHOOSE US? (Kept as is) */}
        <div className="space-y-10 border-t border-slate-100 pt-16 lg:pt-24">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              Surat's Best Taxi Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Why Book With {AGENCY_CONFIG.name}?
            </h2>
            <p className="text-slate-600 text-sm font-semibold">
              Discover why thousands of passengers rely on {AGENCY_CONFIG.name} for the best outstation & local cab booking in Surat.
            </p>
          </div>

          {/* 6 Numbered Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsList.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.number}
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 rounded-[18px] p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all relative flex flex-col justify-between space-y-4 group"
                >
                  {/* Card Header & Big Number */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
