import { RoutePackage } from "@/types/booking";

export const POPULAR_ROUTES: RoutePackage[] = [
  {
    id: "surat-mumbai",
    title: "Surat ⇄ Mumbai One-Way Taxi",
    subtitle: "Airport Drop & Mumbai City Transfer",
    from: "Surat City",
    to: "Mumbai Airport / City",
    distance: "280 KM",
    duration: "5.5 Hours",
    price: 3500,
    vehicleType: "Comfort Sedan",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
    includes: ["Expressway Toll Covered", "Doorstep Pickup", "No Advance Payment"]
  },
  {
    id: "surat-ahmedabad",
    title: "Surat ⇄ Ahmedabad Expressway",
    subtitle: "One-Way Drop & Airport Transfer",
    from: "Surat City",
    to: "Ahmedabad Airport / City",
    distance: "265 KM",
    duration: "4.5 Hours",
    price: 3200,
    vehicleType: "Sedan / SUV",
    tag: "Trending Route",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
    includes: ["Toll & State Taxes", "Experienced Driver", "Clean Sanitized Cab"]
  },
  {
    id: "surat-saputara",
    title: "Surat ⇄ Saputara Hill Taxi",
    subtitle: "Hill Station Weekend Transfer",
    from: "Surat City",
    to: "Saputara Hill Station",
    distance: "160 KM",
    duration: "3.5 Hours",
    price: 2800,
    vehicleType: "Comfort Sedan / Ertiga",
    tag: "Weekend Special",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    includes: ["Highway Toll Included", "Flexible Pickup Time", "Mountain Chauffeur"]
  },
  {
    id: "surat-statue-of-unity",
    title: "Surat ⇄ Statue of Unity",
    subtitle: "Kevadia Sightseeing & Drop",
    from: "Surat",
    to: "Kevadia",
    distance: "155 KM",
    duration: "3 Hours",
    price: 2500,
    vehicleType: "Sedan / Innova Crysta",
    tag: "Top Rated Route",
    image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=800&q=80",
    includes: ["Toll Charges Included", "Punctual Driver", "Instant Confirmation"]
  },
  {
    id: "surat-vadodara",
    title: "Surat ⇄ Vadodara Highway Cab",
    subtitle: "Expressway Transfer",
    from: "Surat City",
    to: "Vadodara City / Airport",
    distance: "150 KM",
    duration: "2.5 Hours",
    price: 2200,
    vehicleType: "Comfort Sedan",
    tag: "Business Route",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    includes: ["Toll Charges Included", "Fast Transfer", "Corporate Ready"]
  },
  {
    id: "surat-shirdi",
    title: "Surat ⇄ Shirdi Pilgrimage",
    subtitle: "Direct Temple Transfer",
    from: "Surat City",
    to: "Shirdi Sai Baba Temple",
    distance: "280 KM",
    duration: "5.5 Hours",
    price: 3800,
    vehicleType: "SUV (Ertiga / Innova)",
    tag: "Pilgrimage Route",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    includes: ["Interstate Permits", "Spacious Boot", "Family Friendly"]
  }
];
