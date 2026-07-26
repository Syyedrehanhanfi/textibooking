export type TripType = "Airport Transfer" | "Local" | "Outstation";
export type OutstationMode = "one-way" | "round-trip";

export interface BookingFormData {
  vehicle: string;
  tripType: string;
  outstationMode?: OutstationMode;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  passenger: string;
  name: string;
  phone: string;
  email: string;
  specialRequest: string;
}

export interface Vehicle {
  id: string;
  name: string;
  category: "Sedan" | "SUV" | "MUV" | "Luxury" | "Traveller" | "Van";
  categoryBadge: string;
  pricePerKmDisplay: string;
  ratePerKm: number;
  baseFare: number;
  image: string;
  galleryImages?: string[];
  seats: number | string;
  seatsDisplay?: string;
  fuelType: string;
  ac: boolean;
  luggage: number | string;
  luggageDisplay?: string;
  transmission: string;
  driverIncluded: boolean;
  features: string[];
  popularFor: string;
}

export interface RoutePackage {
  id: string;
  title: string;
  subtitle: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  price: number;
  vehicleType: string;
  tag: string;
  image: string;
  includes: string[];
}
