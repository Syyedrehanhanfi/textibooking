"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  "304eec4b-73bb-4e97-818e-78c340c8e7d2.jpg",
  "31eae0bd-c8fd-494a-bdf8-d155ce6147e9.jpg",
  "37890aa1-02b5-4122-8a31-aa2d1b6b67ce.jpg",
  "72c446c4-9a5c-4e91-91f0-11cb72b36392.jpg",
  "872059dd-307e-41c8-9a3e-674f3e5a3d55.jpg",
  "894482e0-8f5a-44ff-b899-6e2d1c2d6a94.jpg",
  "WhatsApp Image 2026-07-16 at 11.15.53 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.15.54 PM (4).jpeg",
  "WhatsApp Image 2026-07-16 at 11.15.54 PM (5).jpeg",
  "WhatsApp Image 2026-07-16 at 11.15.55 PM (6).jpeg",
  "WhatsApp Image 2026-07-16 at 11.15.55 PM (7).jpeg",
  "WhatsApp Image 2026-07-16 at 11.15.55 PM (8).jpeg",
  "WhatsApp Image 2026-07-16 at 11.18.25 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.18.26 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.18.26 PM (2).jpeg",
  "WhatsApp Image 2026-07-16 at 11.18.26 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.06 PM (2).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.10 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.19 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.34 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.44 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.46 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.21.56 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.26 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.40 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.44 PM (2).jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.47 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.56 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.57 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.22.59 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.01 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.09 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.11 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.20 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.29 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.54 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.55 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.23.57 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.24.01 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.24.08 PM (1).jpeg",
  "WhatsApp Image 2026-07-16 at 11.24.17 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.24.22 PM.jpeg",
  "WhatsApp Image 2026-07-16 at 11.24.28 PM (1).jpeg",
  "a7a70a3e-8e36-442b-ac97-c77345065680.jpg",
  "beab00df-fb72-427a-9afd-65e248ff6819.jpg",
  "c391229a-d9c2-416c-b7d4-7d6f45931d84.jpg",
  "d22a5a7c-d0b0-4031-9c5e-c64d0a43ce26.jpg",
  "da6f010f-8078-493e-bd5f-993ad92a9d23.jpg",
  "fd431764-9981-4b81-8d09-e2b27cd4ec09.jpg",
  "fe48eea9-a537-4255-8eb0-b7909abf8e2d.jpg"
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllImages, setShowAllImages] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const displayedImages = showAllImages ? galleryImages : galleryImages.slice(0, 8);

  const handleToggleGallery = () => {
    if (showAllImages) {
      setShowAllImages(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setShowAllImages(true);
    }
  };

  return (
    <section className="py-16 bg-white" id="gallery" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our <span className="text-blue-600">Gallery</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look at our fleet and some memorable moments from our trips.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 transition-all duration-500 ease-in-out">
          {displayedImages.map((img, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (showAllImages && index >= 8 ? (index % 8) : index) * 0.05 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={`/gallery/${img}`}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        {galleryImages.length > 8 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleToggleGallery}
              className="bg-white border border-slate-200 hover:border-blue-300 text-blue-600 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,0.05)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.15)] transition-all flex items-center gap-2 cursor-pointer"
            >
              {showAllImages ? (
                <span>Show Less ↑</span>
              ) : (
                <span>View All Gallery →</span>
              )}
            </motion.button>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-slate-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img
            src={`/gallery/${selectedImage}`}
            alt="Selected Gallery Image"
            className="max-w-full max-h-[90vh] object-contain rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
