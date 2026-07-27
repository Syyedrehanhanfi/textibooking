import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickDock from "@/components/MobileQuickDock";
import { AGENCY_CONFIG } from "@/config/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.khodaltourscab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Khodal Tours | Best Taxi Service in Surat | Outstation Cabs",
  description:
    "Book reliable local, outstation, and airport cabs from Surat with Khodal Tours. Transparent per-KM rates, Innova, Sedan & SUVs. 24x7 WhatsApp instant booking.",
  keywords: [
    "taxi service in surat",
    "surat taxi",
    "cab booking surat",
    "surat to mumbai cab",
    "outstation taxi surat",
    "airport drop taxi surat",
    "local cab rental surat",
    "innova crysta booking surat",
    "sedan cab service",
    "whatsapp taxi booking",
  ],
  authors: [{ name: "Khodal Tours Surat" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Khodal Tours | Best Taxi Service in Surat",
    description:
      "Instant WhatsApp cab booking in Surat for city rentals, airport transfers, and outstation trips. Transparent per-KM rates and verified chauffeurs.",
    type: "website",
    url: siteUrl,
    siteName: "Khodal Tours Surat",
    images: [
      {
        url: "/about/main.jpg",
        width: 1200,
        height: 630,
        alt: "Khodal Tours Premium Cabs in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khodal Tours | Best Taxi Service in Surat",
    description: "Instant WhatsApp cab booking in Surat for city rentals, airport transfers, and outstation trips.",
    images: ["/about/main.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "TaxiService"],
      "name": AGENCY_CONFIG.name,
      "image": `${siteUrl}${AGENCY_CONFIG.logoPath}`,
      "@id": siteUrl,
      "url": siteUrl,
      "telephone": AGENCY_CONFIG.phoneNumber,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "153, 3rd Floor, Samla Ground, Laskana, Varachha",
        "addressLocality": "Surat",
        "postalCode": "395006",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.2408,
        "longitude": 72.9348
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$",
      "areaServed": AGENCY_CONFIG.topCities.map(city => ({
        "@type": city === "Rajasthan (All)" ? "State" : "City",
        "name": city.replace(" (All)", "")
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": AGENCY_CONFIG.name,
      "url": siteUrl,
      "logo": `${siteUrl}${AGENCY_CONFIG.logoPath}`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": AGENCY_CONFIG.phoneNumber,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi", "gu"]
      }
    }
  ];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen flex flex-col selection:bg-blue-600 selection:text-white pb-16 md:pb-0">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileQuickDock />
        </div>
      </body>
    </html>
  );
}
