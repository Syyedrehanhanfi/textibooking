"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { AGENCY_CONFIG } from "@/config/config";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello ${AGENCY_CONFIG.name}! My name is ${formData.name} (${formData.phone}). Subject: ${formData.subject}. Message: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${AGENCY_CONFIG.whatsappNumber}?text=${encodedText}`, "_blank");
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Contact Information
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Get In Touch With Our Travel Desk
          </h2>
          <p className="text-slate-600 text-base font-semibold">
            Have questions about outstation rates or custom tour packages? Our 24/7 helpline is available on phone and WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Quick Inquiry */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Box */}
            <div className="bg-slate-50 p-6 rounded-[18px] border border-slate-200 shadow-sm space-y-5">
              <h3 className="text-lg font-black text-slate-900">Agency Head Office</h3>

              <div className="space-y-4 text-xs sm:text-sm font-semibold text-slate-700">
                <a
                  href={`tel:${AGENCY_CONFIG.phoneNumber}`}
                  className="flex items-center gap-3.5 p-3 rounded-[12px] bg-white border border-slate-200/80 hover:border-blue-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Helpline Phone</span>
                    <span className="text-sm font-black text-slate-900">{AGENCY_CONFIG.phoneDisplay}</span>
                  </div>
                </a>

                <button
                  onClick={() => sendGeneralInquiryWhatsApp("Direct Contact")}
                  className="w-full flex items-center gap-3.5 p-3 rounded-[12px] bg-white border border-slate-200/80 hover:border-emerald-500 transition-colors cursor-pointer text-left"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">WhatsApp Line</span>
                    <span className="text-sm font-black text-emerald-600">Chat on WhatsApp</span>
                  </div>
                </button>

                <a
                  href={`mailto:${AGENCY_CONFIG.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-[12px] bg-white border border-slate-200/80 hover:border-blue-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Email Address</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900">{AGENCY_CONFIG.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-[12px] bg-white border border-slate-200/80">
                  <div className="w-10 h-10 rounded-[10px] bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Office Address</span>
                    <span className="text-xs font-bold text-slate-900">{AGENCY_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-[12px] bg-white border border-slate-200/80">
                  <div className="w-10 h-10 rounded-[10px] bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-bold block">Dispatch Hours</span>
                    <span className="text-xs font-bold text-slate-900">{AGENCY_CONFIG.operatingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-slate-50 p-6 rounded-[18px] border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-black text-slate-900">Quick Message</h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm px-3.5 rounded-[12px] font-medium"
                />

                <input
                  type="tel"
                  required
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm px-3.5 rounded-[12px] font-medium"
                />

                <textarea
                  rows={3}
                  required
                  placeholder="Your Inquiry Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-300 focus:border-blue-600 text-slate-900 text-sm p-3 rounded-[12px] font-medium"
                />

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-3 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="p-3 rounded-[12px] bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Opened WhatsApp with your message!</span>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Google Map Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-slate-50 rounded-[18px] border border-slate-200 overflow-hidden shadow-sm h-[580px] relative">
              <iframe
                title="Agency Office Google Map Location"
                src="https://maps.google.com/maps?q=153,+3rd+Floor,+Samla+Ground,+Laskana,+Varachha,+Surat+-+395006&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
