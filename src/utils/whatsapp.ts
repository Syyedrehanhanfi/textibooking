import { BookingFormData } from "@/types/booking";
import { AGENCY_CONFIG } from "@/config/config";

export const AGENCY_WHATSAPP_NUMBER = AGENCY_CONFIG.whatsappNumber;
export const AGENCY_PHONE_DISPLAY = AGENCY_CONFIG.phoneDisplay;
export const AGENCY_EMAIL = AGENCY_CONFIG.email;

/**
 * Formats booking details into a structured WhatsApp message
 * and opens WhatsApp via wa.me link.
 */
export function sendBookingToWhatsApp(data: BookingFormData, whatsappNumber: string = AGENCY_CONFIG.whatsappNumber) {
  const tripTypeFormatted = 
    data.tripType.toLowerCase().includes("local") 
      ? "Local Rental (Hourly/Full Day)" 
      : data.tripType.toLowerCase().includes("outstation") 
        ? `Outstation (${data.outstationMode === "round-trip" ? "Round Trip" : "One Way"})`
        : "Airport Transfer";

  // Formatted exact structure as requested by user
  const messageLines = [
    `*Booking Details*`,
    ``,
    `*Vehicle:* ${data.vehicle || "Standard Taxi"}`,
    `*Trip Type:* ${tripTypeFormatted}`,
    `*Pickup:* ${data.pickup || "Not specified"}`,
    `*Drop:* ${data.drop || "Not specified"}`,
    `*Date:* ${data.date || "As soon as possible"}`,
    `*Time:* ${data.time || "Immediate"}`,
    `*Passenger:* ${data.passenger || "1 Person"}`,
    `*Name:* ${data.name || "Not provided"}`,
    `*Phone:* ${data.phone || "Not provided"}`,
    `*Email:* ${data.email || "Not provided"}`,
    `*Special Request:* ${data.specialRequest || "None"}`,
  ];

  const fullText = messageLines.join("\n");
  const encodedText = encodeURIComponent(fullText);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  // Open WhatsApp in a new window/tab or direct deep link on mobile
  if (typeof window !== "undefined") {
    window.open(waUrl, "_blank");
  }

  return waUrl;
}

/**
 * Quick query redirect to WhatsApp for fleet or general inquiries
 */
export function sendGeneralInquiryWhatsApp(topic: string, whatsappNumber: string = AGENCY_CONFIG.whatsappNumber) {
  const text = `Hello! I would like to inquire about ${topic} on ${AGENCY_CONFIG.name}. Please share rates and availability.`;
  const encodedText = encodeURIComponent(text);
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  if (typeof window !== "undefined") {
    window.open(waUrl, "_blank");
  }
}
