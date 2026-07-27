"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";
import { AGENCY_CONFIG } from "@/config/config";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info with Official KHODAL TOURS Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden shrink-0">
                <Image
                  src={AGENCY_CONFIG.logoPath}
                  alt={AGENCY_CONFIG.name}
                  fill
                  sizes="(max-width: 640px) 64px, 80px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 leading-none">
                  <span className="text-xl font-black text-white">KHODAL</span>
                  <span className="text-xl font-black text-blue-500">TOURS</span>
                </div>
                <p className="text-[9px] uppercase tracking-wider text-cyan-400 font-extrabold mt-1">
                  {AGENCY_CONFIG.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Khodal Tours is Surat's premier local & outstation taxi booking agency. Providing reliable, sanitized, and affordable Surat cabs with transparent per-KM rates and 24/7 WhatsApp dispatch. Book the best taxi service in Surat today.
            </p>

            <button
              onClick={() => sendGeneralInquiryWhatsApp("Footer Inquiry")}
              className="btn-brand-whatsapp inline-flex items-center gap-2 font-bold text-xs px-4 py-2.5 cursor-pointer focus:ring-2 focus:ring-orange-500"
              aria-label="Connect with agency on WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              <span>Connect on WhatsApp</span>
            </button>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-cyan-400 transition-colors">Our Cabs</Link>
              </li>
              <li>
                <Link href="/#airport" className="hover:text-cyan-400 transition-colors">Airport Transfer</Link>
              </li>
              <li>
                <Link href="/#tours" className="hover:text-cyan-400 transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-cyan-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-cyan-400 transition-colors">Reviews</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-cyan-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Operating Cities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operating Cities</h4>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400 font-semibold">
              {AGENCY_CONFIG.topCities.map((city, idx) => (
                <span key={idx} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300">
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Agency Helpline & Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Agency Helpline</h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={`tel:${AGENCY_CONFIG.phoneNumber}`}
                className="flex items-center gap-2.5 font-bold hover:text-cyan-400 transition-colors"
                aria-label={`Call ${AGENCY_CONFIG.phoneDisplay}`}
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{AGENCY_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="flex items-center gap-2.5 font-semibold text-slate-400 hover:text-white transition-colors"
                aria-label={`Email ${AGENCY_CONFIG.email}`}
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{AGENCY_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{AGENCY_CONFIG.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] text-slate-500 font-medium block mb-1.5">ACCEPTED PAYMENTS</span>
              <div className="flex flex-wrap gap-2 text-[10px] font-extrabold text-slate-300">
                <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">UPI</span>
                <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">GPay</span>
                <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">PhonePe</span>
                <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">Cards</span>
                <span className="bg-slate-900 border border-slate-800 px-2 py-1 rounded-md">Cash</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} {AGENCY_CONFIG.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
