"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Calendar, CheckCircle2, PhoneCall, ShieldCheck, Star, Users, Clock4, MessageSquare, MapPin, X } from "lucide-react";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";
import { AGENCY_CONFIG } from "@/config/config";

const airports = [
  "Ahmedabad Airport",
  "Surat Airport",
  "Vadodara Airport",
  "Rajkot Airport",
  "Mumbai Airport",
  "Udaipur Airport",
  "Jaipur Airport",
];

const featuresList = [
  "Flight Tracking",
  "Meet & Greet",
  "24×7 Availability",
  "Professional Drivers",
  "Doorstep Pickup",
  "Clean & Sanitized Vehicles",
  "No Hidden Charges"
];

const serviceCards = [
  {
    title: "Airport Pickup",
    description: "Reliable airport pickups with flight tracking and meet & greet.",
    image: "/airport/V9qx1u98rbjUguNoRNDtsjR7Rhi2N_UuRxGO__5_ajwM93-ynkiYu40xSG-tVz0m1nzJrChrPvodvcgu29LvNFgGUqIeU-NwuDRJbklXH9m4W_t8wU7UOYlnUrry8BYRB_CaJUo3JFAN2L89tpaMHA9C8arlIkIdZd0PJTPbBnc.jpg",
    details: [
      "✈ Real-Time Flight Tracking",
      "🤝 Meet & Greet at Arrival Gate",
      "🚖 Professional & Verified Drivers",
      "🧳 Luggage Assistance",
      "⏰ On-Time Pickup Guarantee",
      "📍 Door-to-Door Drop Service",
      "❄️ Clean & Air-Conditioned Vehicles",
      "💰 Transparent Pricing with No Hidden Charges",
      "📞 24×7 Customer Support"
    ]
  },
  {
    title: "Airport Drop",
    description: "Timely drops to ensure you never miss your flight.",
    image: "/airport/tZSPJQb_rdli6V2pm8p7EPa-yvvTjP5P1IEkXskqG-r4-HoPrO-edFR-VeqjOZIJlsZgQVSnOUVenRssf9PVET8CPg4OwPONTDCpWCJyD407URfKtuakBYwHHX6CIATaWxie8xpkRJ5rCzlDhJzps_iYTtEquSN1sUE_wVlg_M8imtjBlvcZXpQr8y6O0fAH.jpg",
    details: [
      "🚖 Door-to-Airport Transfer",
      "⏰ On-Time Pickup from Your Location",
      "🛣️ Route & Traffic Monitoring",
      "👨‍✈️ Professional & Verified Drivers",
      "🧳 Luggage Assistance",
      "❄️ Clean & Air-Conditioned Vehicles",
      "💰 Transparent Pricing with No Hidden Charges",
      "📞 24×7 Customer Support"
    ]
  },
  {
    title: "Round Trip Airport Transfer",
    description: "Seamless two-way transfers for your complete journey.",
    image: "/airport/f_995v7I2IU_WULC5nx6bbyQiqDV4gAPnX_tHzexfjtVvaq5xfj36juh1gaftbR7tNqTRsNKaJeGO5S_43hZLHX_IhKkYlwGTelS11yVsjrA00aKEJRO6kRPhByso2Sk3PSQ1YdedVGJ-2U9JyJ06DUHGgvdUAMxPdgQp7M_DLg.jpg",
    details: [
      "✈ Airport Pickup & Return Drop",
      "🚖 Door-to-Door Transfer Service",
      "⏰ On-Time Pickup for Both Journeys",
      "👨‍✈️ Professional & Verified Drivers",
      "🧳 Luggage Assistance",
      "❄️ Clean & Air-Conditioned Vehicles",
      "💰 Fixed Round Trip Pricing",
      "📞 24×7 Customer Support"
    ]
  }
];

const trustFactors = [
  "Licensed Drivers",
  "Flight Tracking",
  "No Hidden Charges",
  "Instant Confirmation",
  "Sanitized Vehicles",
  "24×7 Customer Support"
];

const popularRoutes = [
  "Ahmedabad Airport ↔ Surat",
  "Ahmedabad Airport ↔ Vadodara",
  "Surat Airport ↔ Vapi",
  "Mumbai Airport ↔ Surat",
  "Udaipur Airport ↔ Nathdwara",
  "Jaipur Airport ↔ Ajmer"
];

export default function AirportServices() {
  const [selectedService, setSelectedService] = React.useState<typeof serviceCards[0] | null>(null);

  React.useEffect(() => {
    if (selectedService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedService]);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden" id="airport-services">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* 1. HERO SECTION (60/40) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: 60% Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl group">
              <Image 
                src="/airport/voqJ-x2VX5N7oJfFRLJtozBEBi2sBij9vYWfnx1Dn8mfqUp6GhhkIkBLfPgjbqGqq6Xehr3Dwe9vrPw_b6C8OyC_WKlfzTq4GLT7levZIIiT2f-949nSZiCqhKHSZmW2xC002gD719VU2o0ltNqnu2u-0fYkJ-ZWn7koAK7NiIioGh8PdF_3NZtBChchw006.jpg" 
                alt="Premium Airport Taxi Service"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: 40% Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                ✈ Airport Pickup & <br className="hidden sm:block" />
                <span className="text-blue-600">Drop Services</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Reliable 24×7 airport transfers with professional drivers.
              </p>
            </motion.div>

            {/* Feature Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              {featuresList.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 group cursor-default">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-orange-600 transition-transform drop-shadow-sm group-hover:drop-shadow-md" />
                  <span className="text-slate-700 font-bold text-sm group-hover:text-blue-700 transition-colors">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Airport Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              {airports.map((airport, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 text-[13px] font-bold px-3.5 py-2 rounded-[12px] shadow-sm hover:border-blue-300 hover:shadow-md transition-all cursor-default group">
                  <Plane className="w-4 h-4 text-blue-500 group-hover:text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
                  <span>{airport}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sendGeneralInquiryWhatsApp("Airport Cab Booking")}
                className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 px-8 py-4 rounded-[16px] font-bold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Airport Taxi</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${AGENCY_CONFIG.phoneNumber}`}
                className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-[16px] font-bold flex items-center justify-center gap-2 transition-colors w-full sm:w-auto"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* 2. PREMIUM SERVICE CARDS */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">Our Premium Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 group flex flex-col"
              >
                <div 
                  className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 cursor-pointer"
                  onClick={() => setSelectedService(card)}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 justify-center">
                    <span className="text-white font-bold text-[13px] bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-lg">Click for Details</span>
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-4 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-black text-slate-900">{card.title}</h4>
                    <p className="text-slate-600 text-sm mt-2">{card.description}</p>
                  </div>
                  <button
                    onClick={() => sendGeneralInquiryWhatsApp(`Booking for ${card.title}`)}
                    className="mt-6 w-full bg-slate-50 hover:bg-orange-500 text-blue-600 hover:text-white border border-slate-200 hover:border-orange-500 font-bold py-3.5 rounded-[12px] transition-all duration-200 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>



        {/* 4. STATISTICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5000+", label: "Airport Transfers", icon: Plane },
            { value: "24×7", label: "Service Available", icon: Clock4 },
            { value: "100%", label: "On-Time Pickup", icon: ShieldCheck },
            { value: "4.9★", label: "Customer Rating", icon: Star }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 sm:p-8 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 mx-auto bg-blue-50 rounded-[16px] flex items-center justify-center mb-5 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">{stat.value}</p>
              <p className="text-sm sm:text-base font-bold text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 5. POPULAR ROUTES */}
        <div className="space-y-10">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Popular Airport Routes</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularRoutes.map((route, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-slate-200 rounded-[16px] p-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-default group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-700 font-bold text-sm sm:text-base group-hover:text-blue-700 transition-colors">{route}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6. TRUST SECTION */}
        <div className="bg-slate-900 rounded-[32px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          {/* Decorative gradients */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">Why Choose Our Airport Taxi?</h3>
          </div>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 max-w-4xl mx-auto">
            {trustFactors.map((factor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-slate-300 font-bold text-sm sm:text-base group-hover:text-white transition-colors">{factor}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image Header */}
              <div className="relative h-48 sm:h-64 w-full shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedService.title}</h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 overflow-y-auto bg-slate-50 flex-1">
                <p className="text-slate-600 font-semibold mb-6 text-sm sm:text-base">{selectedService.description}</p>
                <div className="space-y-4">
                  {selectedService.details.map((detail, idx) => {
                    const parts = detail.split(" ");
                    const isEmoji = parts[0] && !/[a-zA-Z0-9]/.test(parts[0]);
                    const emoji = isEmoji ? parts[0] : <CheckCircle2 className="w-4 h-4 text-orange-500" />;
                    const text = isEmoji ? parts.slice(1).join(" ") : detail;
                    
                    return (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-sm">
                          {emoji}
                        </div>
                        <span className="text-slate-700 font-bold text-sm sm:text-[15px] pt-1.5 leading-snug">{text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-200 flex gap-4 shrink-0">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    sendGeneralInquiryWhatsApp(`I want to book: ${selectedService.title}`);
                  }}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/20 text-sm sm:text-base"
                >
                  Confirm Your Booking
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
