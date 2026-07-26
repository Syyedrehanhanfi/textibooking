"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, CheckCircle2, X, PenLine } from "lucide-react";
import { sendGeneralInquiryWhatsApp } from "@/utils/whatsapp";

const INITIAL_REVIEWS = [
  {
    name: "Amit Patel",
    role: "Family Outing",
    route: "Surat ⇄ Statue of Unity",
    comment:
      "Booked an Innova Crysta for a family trip to Kevadia. The cab arrived 15 minutes before time, crystal clean, and the driver was extremely polite. Khodal Tours made our weekend trip perfect. WhatsApp booking was very smooth!",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    name: "Rohan Desai",
    role: "Corporate Traveler",
    route: "Surat ⇄ Ahmedabad Airport",
    comment:
      "Khodal Tours has become my go-to for airport transfers. Never faced any delays or surge charges like app aggregators. Transparent fare estimates and instant WhatsApp confirmation. Highly recommended for business travel.",
    rating: 5,
    date: "1 month ago",
  },
  {
    name: "Neha Shah",
    role: "Pilgrimage Trip",
    route: "Surat ⇄ Somnath & Dwarka",
    comment:
      "Superb service! The Ertiga was super clean, AC worked perfectly throughout the 3-day trip, and there were no hidden toll or driver extra demands at the end. Best travel agency in Surat!",
    rating: 5,
    date: "3 weeks ago",
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", route: "", comment: "", rating: 5 });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    // Add to local state so user sees it instantly
    setReviews([{
      name: newReview.name,
      role: "Verified Customer",
      route: newReview.route || "Local Travel",
      comment: newReview.comment,
      rating: newReview.rating,
      date: "Just now"
    }, ...reviews]);

    // Send to WhatsApp for business owner to receive
    const msg = `*New Customer Review!*\n\n*Name:* ${newReview.name}\n*Route:* ${newReview.route}\n*Rating:* ${newReview.rating} Stars\n*Comment:* ${newReview.comment}`;
    sendGeneralInquiryWhatsApp(msg);

    setIsModalOpen(false);
    setNewReview({ name: "", route: "", comment: "", rating: 5 });
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-100/70 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
              Verified Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              What Our Riders Say
            </h2>
            <p className="text-slate-600 text-base font-medium">
              Over 15,000 satisfied passengers rely on our travel agency for safe, comfortable outstation and city cab rides.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            <PenLine className="w-4 h-4 text-cyan-400" />
            <span>Write a Review</span>
          </motion.button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((rev, idx) => ( // only show latest 3 to maintain UI consistency
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-7 rounded-[18px] border border-slate-200 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm italic font-medium leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <p className="text-xs text-blue-600 font-semibold">{rev.route}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">{rev.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-lg rounded-[24px] shadow-2xl p-6 sm:p-8 overflow-hidden z-10"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="mb-6">
                <h3 className="text-2xl font-black text-slate-900">Write a Review</h3>
                <p className="text-sm text-slate-500 mt-1">Share your travel experience with us.</p>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    placeholder="e.g. Amit Patel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium text-slate-900"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Route / Trip Name</label>
                  <input
                    type="text"
                    value={newReview.route}
                    onChange={(e) => setNewReview({...newReview, route: e.target.value})}
                    placeholder="e.g. Surat to Ahmedabad"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="cursor-pointer p-1"
                      >
                        <Star className={`w-8 h-8 transition-colors ${newReview.rating >= star ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200 hover:text-amber-200'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Your Review *</label>
                  <textarea
                    required
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    placeholder="Tell us about your experience..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium text-slate-900 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors mt-2 cursor-pointer flex items-center justify-center gap-2"
                >
                  <PenLine className="w-5 h-5" />
                  <span>Submit Review</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
