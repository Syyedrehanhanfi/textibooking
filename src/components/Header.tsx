"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";
import { AGENCY_CONFIG } from "@/config/config";

interface HeaderProps {
  activeView?: string;
  setActiveView?: (view: string) => void;
}

export default function Header({ activeView = "home", setActiveView }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(activeView);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Our Cabs", href: "#fleet", id: "fleet" },
    { label: "Airport Transfer", href: "#airport", id: "airport" },
    { label: "Tour Packages", href: "#tours", id: "tours" },
    { label: "Gallery", href: "#gallery", id: "gallery" },
    { label: "Reviews", href: "#reviews", id: "reviews" },
    { label: "FAQ", href: "#faq", id: "faq" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    setActiveSection(activeView);
  }, [activeView]);

  // Scroll spy & shadow handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(targetId);

    if (setActiveView) {
      setActiveView(targetId);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const handleWhatsAppClick = () => {
    setMobileMenuOpen(false);
    sendGeneralInquiryWhatsApp("Taxi Booking Inquiry");
  };

  return (
    <header
      className={`sticky top-0 z-50 h-20 w-full bg-white/95 backdrop-blur-md transition-all duration-300 flex items-center ${
        isScrolled
          ? "shadow-md shadow-slate-200/80 border-b border-slate-200/60"
          : "border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">
        
        {/* Left: KHODAL TOURS Official Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl shrink-0"
          aria-label={`${AGENCY_CONFIG.name} Home`}
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src={AGENCY_CONFIG.logoPath}
              alt={AGENCY_CONFIG.name}
              fill
              sizes="(max-width: 640px) 64px, 80px"
              className="object-contain p-1"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5 leading-none">
              <span className="text-xl font-black tracking-tight text-slate-900">
                KHODAL
              </span>
              <span className="text-xl font-black tracking-tight text-blue-600">
                TOURS
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-wider font-extrabold text-cyan-600 mt-0.5 max-w-[210px] truncate">
              {AGENCY_CONFIG.tagline}
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[12px] xl:text-[13px] font-bold text-slate-700 relative z-10 mx-auto"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-1.5 xl:px-2.5 py-1.5 rounded-[10px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-nowrap ${
                  isActive ? "text-blue-600 font-black" : "hover:text-blue-600 text-slate-700"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-blue-50 rounded-[10px] -z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Side Brand CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`tel:${AGENCY_CONFIG.phoneNumber}`}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-[14px] shadow-sm transition-all cursor-pointer focus:ring-2 focus:ring-slate-900"
            aria-label={`Call Helpline ${AGENCY_CONFIG.phoneDisplay}`}
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call Now</span>
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleWhatsAppClick}
            className="btn-brand-whatsapp flex items-center gap-2 text-xs sm:text-sm px-4 py-2.5 cursor-pointer focus:ring-2 focus:ring-orange-500"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            <span>WhatsApp</span>
          </motion.button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4 overflow-hidden z-50"
          >
            <nav className="flex flex-col gap-1 font-bold text-slate-800 text-base">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`px-4 py-3 rounded-[14px] transition-colors flex items-center justify-between ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-black"
                        : "hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                  </a>
                );
              })}
            </nav>

            <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={`tel:${AGENCY_CONFIG.phoneNumber}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white font-bold text-sm py-3 rounded-[14px] shadow-sm"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Now</span>
              </a>

              <button
                onClick={handleWhatsAppClick}
                className="btn-brand-whatsapp flex items-center justify-center gap-2 text-sm py-3 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                <span>WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
