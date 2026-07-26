"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FareEstimator from "@/components/FareEstimator";
import PopularRoutes from "@/components/PopularRoutes";
import FleetSection from "@/components/FleetSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import GallerySection from "@/components/GallerySection";
import TourPackages from "@/components/TourPackages";
import AirportServices from "@/components/AirportServices";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileQuickDock from "@/components/MobileQuickDock";

export default function Home() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white pb-16 sm:pb-0">
      {/* Sticky 80px Navigation Header with Tab State */}
      <Header activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content Area - Renders Exclusively Selected View */}
      <main className="flex-1">
        {/* HOME VIEW */}
        {activeView === "home" && (
          <>
            <Hero />
            <FeaturesSection />
            <AirportServices />
            <FleetSection />
            <TourPackages />
            <GallerySection />
            <Testimonials />
          </>
        )}

        {/* ABOUT VIEW - Renders EXCLUSIVELY About Us Section */}
        {activeView === "about" && (
          <div className="py-4 animate-fade-in">
            <FeaturesSection />
          </div>
        )}

        {/* CAB SERVICES VIEW */}
        {activeView === "services" && (
          <div className="py-4 animate-fade-in">
            <FareEstimator />
            <PopularRoutes />
            <AirportServices />
          </div>
        )}

        {/* AIRPORT SERVICES VIEW */}
        {activeView === "airport" && (
          <div className="py-4 animate-fade-in">
            <AirportServices />
          </div>
        )}

        {/* OUR CABS / FLEET VIEW */}
        {activeView === "fleet" && (
          <div className="py-4 animate-fade-in">
            <FleetSection />
          </div>
        )}

        {/* GALLERY VIEW */}
        {activeView === "gallery" && (
          <div className="py-4 animate-fade-in">
            <GallerySection />
          </div>
        )}

        {/* REVIEWS VIEW */}
        {activeView === "reviews" && (
          <div className="py-4 animate-fade-in">
            <Testimonials />
          </div>
        )}

        {/* TOURS VIEW */}
        {activeView === "tours" && (
          <div className="py-4 animate-fade-in">
            <TourPackages />
          </div>
        )}

        {/* FAQ VIEW */}
        {activeView === "faq" && (
          <div className="py-4 animate-fade-in">
            <FAQSection />
          </div>
        )}

        {/* CONTACT VIEW */}
        {activeView === "contact" && (
          <div className="py-4 animate-fade-in">
            <ContactSection />
          </div>
        )}
      </main>

      {/* SEO Footer */}
      <Footer />

      {/* Mobile Floating Action Bar */}
      <MobileQuickDock />
    </div>
  );
}
