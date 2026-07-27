import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { SEO_ROUTES } from '@/data/seoRoutesData';
import { Clock, MapPin, ShieldCheck, CheckCircle2, Star, MessageSquare } from 'lucide-react';
import { AGENCY_CONFIG } from '@/config/config';

// 1. generateStaticParams
export async function generateStaticParams() {
  return SEO_ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

// 2. generateMetadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const route = SEO_ROUTES.find((r) => r.slug === resolvedParams.slug);
  
  if (!route) return {};

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: `/${route.slug}`,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: `https://www.khodaltourscab.com/${route.slug}`,
      siteName: AGENCY_CONFIG.name,
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function RoutePage({ params }: { params: { slug: string } }) {
  const resolvedParams = await Promise.resolve(params);
  const route = SEO_ROUTES.find((r) => r.slug === resolvedParams.slug);
  
  if (!route) {
    notFound();
  }

  // Generate Schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Taxi Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": AGENCY_CONFIG.name
    },
    "areaServed": {
      "@type": "City",
      "name": "Surat"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Taxi Routes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": route.h1
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.khodaltourscab.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": route.h1,
        "item": `https://www.khodaltourscab.com/${route.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-0">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Breadcrumbs (Visual) */}
      <div className="bg-white border-b border-slate-200 py-3 mt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex text-xs font-semibold text-slate-500">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{route.h1}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 w-full flex-grow space-y-12">
        
        {/* HERO SECTION */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100">
            <ShieldCheck className="w-4 h-4" /> Verified Outstation Cabs
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {route.h1}
          </h1>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 pt-4">
            <div className="flex flex-col items-center gap-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-32">
              <MapPin className="w-6 h-6 text-orange-500" />
              <span className="text-xs text-slate-500 font-bold uppercase mt-1">Distance</span>
              <span className="text-sm font-black text-slate-900">{route.distance}</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-32">
              <Clock className="w-6 h-6 text-blue-500" />
              <span className="text-xs text-slate-500 font-bold uppercase mt-1">Est. Time</span>
              <span className="text-sm font-black text-slate-900">{route.duration}</span>
            </div>
            <div className="flex flex-col items-center gap-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 w-32">
              <Star className="w-6 h-6 text-amber-500" />
              <span className="text-xs text-slate-500 font-bold uppercase mt-1">Availability</span>
              <span className="text-sm font-black text-slate-900">24x7</span>
            </div>
          </div>

          <div className="pt-6">
            <a
              href={`https://wa.me/${AGENCY_CONFIG.phoneNumber.replace(/[^0-9]/g, '')}?text=Hi, I want to book a ${route.h1}. Please share details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* LONG FORM CONTENT */}
        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-600 space-y-10">
          {route.content.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">{section.heading}</h2>
              <p className="text-slate-600 font-medium leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>

        {/* VEHICLE TYPES */}
        <div className="bg-slate-100 rounded-3xl p-8 sm:p-10 border border-slate-200">
          <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Available Vehicles for this Route</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {route.vehicles.map((v, i) => (
              <div key={i} className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow-sm font-bold text-slate-800 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                {v}
              </div>
            ))}
          </div>
        </div>

        {/* FAQS */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-medium">Common queries about the {route.h1}</p>
          </div>
          <div className="space-y-4">
            {route.faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-black text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </article>

    </main>
  );
}
