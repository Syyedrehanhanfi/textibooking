import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khodal Tours | Surat's Premium Local & Outstation Taxi Service",
  description:
    "Book reliable local, outstation, and airport cabs from Surat with zero hidden charges. Direct instant booking via WhatsApp. Best taxi service in Surat.",
  keywords: [
    "surat taxi",
    "surat to mumbai cab",
    "outstation taxi surat",
    "airport drop taxi",
    "local cab rental",
    "innova crysta booking",
    "sedan cab service",
    "whatsapp taxi booking",
  ],
  authors: [{ name: "Khodal Tours Surat" }],
  openGraph: {
    title: "Khodal Tours | Surat's Premium Taxi Service",
    description:
      "Instant WhatsApp cab booking in Surat for city rentals, airport transfers, and outstation trips. Transparent per-KM rates and verified chauffeurs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
