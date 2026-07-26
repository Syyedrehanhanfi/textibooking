export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  price: number;
  vehicle?: string;
  highlights: string[];
  image: string;
  galleryImages?: string[];
  description?: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "saputara-waghai-gira",
    title: "Saputara • Waghai Garden • Gira Waterfall",
    duration: "1 Day",
    price: 5500,
    vehicle: "Dzire / Ertiga",
    highlights: ["Hill Station", "Waterfall", "Family Tour"],
    image: "/package/saputara.jpg",
    description: "Escape to the lush green hills of Saputara, Gujarat's only hill station. This family-friendly tour includes a visit to the beautiful Waghai Botanical Garden and the breathtaking Gira Waterfall, offering a perfect blend of nature, tranquility, and scenic beauty."
  },
  {
    id: "daman",
    title: "Daman",
    duration: "1 Day",
    price: 5000,
    vehicle: "Dzire",
    highlights: ["Beach", "Fort", "Weekend Trip"],
    image: "/package/daman.jpg",
    description: "Enjoy a perfect weekend getaway to Daman, known for its pristine beaches, Portuguese colonial architecture, and historic forts. Relax by the Arabian Sea, explore the ancient St. Jerome Fort, and indulge in the vibrant coastal atmosphere."
  },
  {
    id: "statue-of-unity",
    title: "Statue of Unity",
    duration: "1 Day",
    price: 5500,
    highlights: ["World's Tallest Statue", "Valley of Flowers", "Jungle Safari"],
    image: "/package/statue-of-unity.jpg",
    description: "Witness the grandeur of the world's tallest statue, the Statue of Unity, dedicated to Sardar Vallabhbhai Patel. This comprehensive tour also covers the vibrant Valley of Flowers and an exciting Jungle Safari, making it an unforgettable experience for all ages."
  },
  {
    id: "pavagadh-dakor-ambaji",
    title: "Pavagadh • Dakor • Ambaji",
    duration: "1 Day",
    price: 9000,
    highlights: ["Temple Tour", "Ropeway", "Family Trip"],
    image: "/package/pavagadh.jpg",
    description: "Embark on a divine journey covering Gujarat's most revered temples. Experience the spiritual aura of the Kalika Mata Temple at Pavagadh via the scenic ropeway, seek blessings at the famous Ranchhodraiji Temple in Dakor, and visit the sacred Ambaji Temple."
  },
  {
    id: "khodal-dham-virpur",
    title: "Khodal Dham • Virpur",
    duration: "1 Day",
    price: 14000,
    highlights: ["Spiritual Tour", "Temple Visit"],
    image: "/package/khodal-dham.jpg",
    description: "🛕 Khodal Dham (Kagvad)\nKhodal Dham is a magnificent temple dedicated to Goddess Khodiyar, known for its stunning architecture, serene atmosphere, and beautifully maintained surroundings. It is one of the most popular pilgrimage sites in Gujarat, attracting thousands of devotees every year."
  },
  {
    id: "mahabaleshwar-lonavala-khandala",
    title: "Mahabaleshwar • Lonavala • Khandala",
    duration: "3 Days 2 Nights",
    price: 20000,
    highlights: ["Hill Station", "Nature", "Sightseeing"],
    image: "/package/mahabaleshwar.jpg",
    description: "Discover the magic of Maharashtra's most famous hill stations. From the misty viewpoints of Mahabaleshwar to the lush green valleys of Lonavala and Khandala, this 3-day tour offers spectacular scenery, pleasant weather, and extensive sightseeing."
  },
  {
    id: "matheran",
    title: "Matheran",
    duration: "2 Days 1 Night",
    price: 14000,
    highlights: ["Toy Train", "Nature"],
    image: "/package/matheran.jpg",
    description: "Step into a world without cars in Matheran, Asia's only automobile-free hill station. Enjoy a nostalgic ride on the famous Toy Train, explore dense forests, and take in panoramic views from numerous scenic points on this refreshing eco-friendly retreat."
  },
  {
    id: "shirdi-shingnapur-trimbakeshwar",
    title: "Shirdi • Shani Shingnapur • Trimbakeshwar • Nashik",
    duration: "3 Days 2 Nights",
    price: 15000,
    highlights: ["Sai Baba Temple", "Jyotirlinga"],
    image: "/package/shirdi.jpg",
    description: "A profoundly spiritual 3-day pilgrimage covering Maharashtra's holiest sites. Seek blessings at the Sai Baba Temple in Shirdi, visit the unique village of Shani Shingnapur, and worship at the Trimbakeshwar Jyotirlinga before exploring the ancient city of Nashik."
  },
  {
    id: "ujjain-omkareshwar",
    title: "Ujjain • Omkareshwar",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Mahakal", "Jyotirlinga"],
    image: "/package/ujjain.jpg",
    description: "Experience the divine energy of Madhya Pradesh with visits to two of the most powerful Jyotirlingas. Attend the mesmerizing Bhasma Aarti at the Mahakaleshwar Temple in Ujjain and seek blessings at the sacred island of Omkareshwar on the Narmada River."
  },
  {
    id: "mathura-vrindavan-agra",
    title: "Mathura • Vrindavan • Agra",
    duration: "2 Days 1 Night",
    price: 16000,
    highlights: ["Krishna Temple", "Taj Mahal"],
    image: "/package/mathura.jpg",
    description: "Immerse yourself in the divine love of Lord Krishna as you explore the sacred temples of Mathura and Vrindavan. The tour concludes with a visit to the magnificent Taj Mahal in Agra, offering a perfect mix of spirituality and world heritage."
  },
  {
    id: "dwarka-nageshwar-bet-dwarka",
    title: "Dwarka • Nageshwar • Bet Dwarka",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Temple", "Island Ferry"],
    image: "/package/dwarka-nageshwar.jpg",
    description: "Journey to the legendary kingdom of Lord Krishna. Visit the magnificent Dwarkadhish Temple, take a scenic island ferry to Bet Dwarka, and seek blessings at the Nageshwar Jyotirlinga on this deeply enriching spiritual coastal tour."
  },
  {
    id: "somnath-dwarka-nageshwar",
    title: "Somnath • Dwarka • Bet Dwarka • Nageshwar",
    duration: "3 Days 2 Nights",
    price: 20000,
    highlights: ["Jyotirlinga", "Pilgrimage"],
    image: "/package/somnath.jpg",
    description: "The ultimate Saurashtra pilgrimage. Begin at the majestic Somnath Temple (the first Jyotirlinga) by the Arabian Sea, followed by the sacred city of Dwarka, the island temple of Bet Dwarka, and the Nageshwar Jyotirlinga, for a complete spiritual awakening."
  },
  {
    id: "narmada-bhomeshwar",
    title: "Narmada Jyotirlinga • Bhomeshwar Jyotirlinga",
    duration: "3 Days 1 Night",
    price: 14000,
    highlights: ["Temple Tour", "Religious Trip"],
    image: "/package/narmada.jpg",
    description: "A serene religious trip dedicated to Lord Shiva. Visit the revered Narmada Jyotirlinga and Bhomeshwar Jyotirlinga, participating in peaceful temple tours and experiencing the deep spiritual traditions along these sacred destinations."
  },
  {
    id: "udaipur-mount-abu",
    title: "Udaipur • Mount Abu",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["City of Lakes", "Nakki Lake", "Guru Shikhar"],
    image: "/package/udaipur (1).jpg",
    galleryImages: [
      "/package/udaipur (1).jpg",
      "/package/udaipur (2).jpg",
      "/package/udaipur (3).jpg"
    ],
    description: "Overview\nExperience the perfect blend of heritage and nature with Udaipur and Mount Abu. Visit beautiful lakes, royal palaces, lush hills, famous temples, and enjoy the pleasant weather of Rajasthan's only hill station.\n\nPlaces Covered\n• City Palace\n• Lake Pichola\n• Fateh Sagar Lake\n• Saheliyon Ki Bari\n• Jagdish Temple\n• Nakki Lake\n• Guru Shikhar\n• Dilwara Jain Temples\n• Sunset Point\n\nPackage Includes\n• AC Taxi\n• Professional Driver\n• Toll Tax\n• Parking\n• Fuel Charges\n\nBest Time\nOctober – March"
  },
  {
    id: "nathdwara-eklingji-haldighati",
    title: "Nathdwara • Eklingji • Haldighati",
    duration: "1 Day",
    price: 5000,
    highlights: ["Shrinathji Temple", "Eklingji Temple", "Maharana Pratap Museum"],
    image: "/package/Nathdwara.jpg",
    galleryImages: [
      "/package/Nathdwara.jpg",
      "/package/Nathdwara (1).jpg",
      "/package/Nathdwara (2).jpg"
    ],
    description: "Overview\nPerfect spiritual and historical tour covering Rajasthan's famous temples and Haldighati battlefield.\n\nPlaces Covered\n• Shrinathji Temple\n• Eklingji Temple\n• Haldighati Museum\n• Chetak Samadhi\n• Rakt Talai"
  },
  {
    id: "jaipur",
    title: "Jaipur",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Pink City", "Amber Fort", "Hawa Mahal"],
    image: "/package/jaipur (1).jpg",
    galleryImages: [
      "/package/jaipur (1).jpg",
      "/package/jaipur (2).jpg",
      "/package/jaipur (3).jpg"
    ],
    description: "Overview\nExplore Rajasthan's capital city with its magnificent forts, royal palaces, and vibrant markets.\n\nPlaces Covered\n• Amber Fort\n• Jal Mahal\n• Hawa Mahal\n• City Palace\n• Jantar Mantar\n• Albert Hall\n• Bapu Bazaar"
  },
  {
    id: "jaipur-ajmer-pushkar",
    title: "Jaipur • Ajmer • Pushkar",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Ajmer Sharif", "Pushkar Lake", "Brahma Temple"],
    image: "/package/ajmer (1).jpg",
    galleryImages: [
      "/package/ajmer (1).jpg",
      "/package/ajmer (2).jpg",
      "/package/ajmer (3).jpg"
    ],
    description: "Overview\nOne of Rajasthan's most popular religious tours combining Hindu and Muslim pilgrimage sites.\n\nPlaces Covered\n• Ajmer Sharif Dargah\n• Ana Sagar Lake\n• Pushkar Lake\n• Brahma Temple\n• Savitri Temple"
  },
  {
    id: "jodhpur",
    title: "Jodhpur",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Blue City", "Mehrangarh Fort", "Jaswant Thada"],
    image: "/package/jodhpur (1).jpg",
    galleryImages: [
      "/package/jodhpur (1).jpg",
      "/package/jodhpur (2).jpg",
      "/package/jodhpur (3).jpg"
    ],
    description: "Overview\nExperience the royal charm of Jodhpur with its historic forts and blue-painted old city.\n\nPlaces Covered\n• Mehrangarh Fort\n• Jaswant Thada\n• Umaid Bhawan Palace\n• Clock Tower\n• Mandore Garden"
  },
  {
    id: "mumbai-lonavala-khandala",
    title: "Mumbai • Lonavala • Khandala",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Hill Station", "Bhushi Dam", "Tiger Point"],
    image: "/package/mumbai (1).jpg",
    galleryImages: [
      "/package/mumbai (1).jpg",
      "/package/mumbai (2).jpg",
      "/package/mumbai (3).jpg",
      "/package/mumbai (4).jpg"
    ],
    description: "Overview\nA refreshing hill station getaway from Mumbai with waterfalls, valleys, and breathtaking viewpoints.\n\nPlaces Covered\n• Bhushi Dam\n• Tiger Point\n• Rajmachi Point\n• Lion's Point\n• Karla Caves\n• Wax Museum"
  },
  {
    id: "mumbai-goa",
    title: "Mumbai • Goa",
    duration: "4 Days 3 Nights",
    price: 25000,
    highlights: ["Beaches", "Water Sports", "Nightlife"],
    image: "/package/goa (1).jpg",
    galleryImages: [
      "/package/goa (1).jpg",
      "/package/goa (2).jpg",
      "/package/goa (3).jpg",
      "/package/goa (4).jpg"
    ],
    description: "Overview\nThe perfect holiday package covering Goa's famous beaches, churches, forts, and nightlife.\n\nPlaces Covered\n• Baga Beach\n• Calangute Beach\n• Candolim Beach\n• Fort Aguada\n• Basilica of Bom Jesus\n• Cruise Dinner\n• Water Sports"
  },
  {
    id: "mumbai-nashik-trimbakeshwar",
    title: "Mumbai • Nashik • Trimbakeshwar",
    duration: "2 Days 1 Night",
    price: 15000,
    highlights: ["Jyotirlinga", "Vineyards", "Godavari River"],
    image: "/package/Nashik  (1).jpg",
    galleryImages: [
      "/package/Nashik  (1).jpg",
      "/package/Nashik  (2).jpg",
      "/package/Nashik  (3).jpg",
      "/package/Nashik  (4).jpg"
    ],
    description: "Overview\nA perfect blend of spirituality and nature featuring the famous Trimbakeshwar Jyotirlinga.\n\nPlaces Covered\n• Trimbakeshwar Temple\n• Godavari Ghat\n• Panchavati\n• Sula Vineyards\n• Ram Kund"
  }
];
