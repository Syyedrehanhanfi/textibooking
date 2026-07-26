export interface Driver {
  id: string;
  name: string;
  experienceYears: number;
  rating: number;
  tripsCompleted: number;
  image: string;
  badge: string;
  languages: string[];
  specialty: string;
}

export const VERIFIED_DRIVERS: Driver[] = [
  {
    id: "driver-1",
    name: "Ramesh Verma",
    experienceYears: 12,
    rating: 4.95,
    tripsCompleted: 3400,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    badge: "Master Chauffeur",
    languages: ["English", "Hindi", "Marathi"],
    specialty: "Expressway Long Distance Specialist",
  },
  {
    id: "driver-2",
    name: "Sandeep Kumar",
    experienceYears: 9,
    rating: 4.92,
    tripsCompleted: 2800,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    badge: "5-Star Rated",
    languages: ["English", "Hindi"],
    specialty: "24/7 Airport Transfer & City Sightseeing",
  },
  {
    id: "driver-3",
    name: "Amitabh Joshi",
    experienceYears: 15,
    rating: 4.98,
    tripsCompleted: 4900,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    badge: "VIP Executive Driver",
    languages: ["English", "Hindi", "Gujarati"],
    specialty: "Luxury Mercedes & Executive Fleet Specialist",
  },
];
