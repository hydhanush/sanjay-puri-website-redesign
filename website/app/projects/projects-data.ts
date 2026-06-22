export type Category = "Residential" | "Cultural" | "Commercial" | "Hospitality";

export type Project = {
  name: string;
  category: Category;
  location: string;
  slug: string;
  image: string;
  tall?: true; // portrait-oriented images; default is landscape 3/2
};

export const projects: Project[] = [
  {
    name: "18 Screens",
    category: "Residential",
    location: "India",
    slug: "18-screens",
    image: "/assets/Webp Project Images/18 Screens, Residential.webp",
  },
  {
    name: "Aria Hotel",
    category: "Hospitality",
    location: "India",
    slug: "aria-hotel",
    image: "/assets/Webp Project Images/Aria Hotel, Hospitality.webp",
  },
  {
    name: "Interstellar Offices",
    category: "Commercial",
    location: "India",
    slug: "interstellar-offices",
    image: "/assets/Webp Project Images/Interstellar Offices, Offices.webp",
    tall: true,
  },
  {
    name: "Magnus Office",
    category: "Commercial",
    location: "Jaipur",
    slug: "magnus-office",
    image: "/assets/Webp Project Images/Magnus Office Jaipur.webp",
    tall: true,
  },
  {
    name: "Mirai House of Arches",
    category: "Residential",
    location: "Bhilwara",
    slug: "mirai-house-of-arches",
    image: "/assets/Webp Project Images/Mirai House of Arches Bhilwara, India.webp",
  },
  {
    name: "Narsighar",
    category: "Cultural",
    location: "Nokha",
    slug: "narsighar",
    image: "/assets/Webp Project Images/Narsighar, Nokha.webp",
  },
  {
    name: "Nokha Village Community Centre",
    category: "Cultural",
    location: "Nokha",
    slug: "nokha-village-community-centre",
    image: "/assets/Webp Project Images/Nokha Village Community Centre, Public.webp",
  },
  {
    name: "Prestige University",
    category: "Cultural",
    location: "India",
    slug: "prestige-university",
    image: "/assets/Webp Project Images/Prestige University, Educational.webp",
  },
  {
    name: "Studios 90",
    category: "Residential",
    location: "India",
    slug: "studios-90",
    image: "/assets/Webp Project Images/STUDIOS 90, Residential.webp",
    tall: true,
  },
  {
    name: "Screen 504",
    category: "Residential",
    location: "Udaipur",
    slug: "screen-504",
    image: "/assets/Webp Project Images/Screen 504, Udaipur.webp",
  },
  {
    name: "The Courtyard Office",
    category: "Commercial",
    location: "India",
    slug: "the-courtyard-office",
    image: "/assets/Webp Project Images/The Courtyard Office, Offices.webp",
  },
  {
    name: "The Rajasthan School",
    category: "Cultural",
    location: "Rajasthan",
    slug: "the-rajasthan-school",
    image: "/assets/Webp Project Images/The Rajasthan School, Educational.webp",
  },
  {
    name: "The Street",
    category: "Cultural",
    location: "Mathura",
    slug: "the-street",
    image: "/assets/Webp Project Images/The Street, Mathura.webp",
  },
  {
    name: "Zen Spaces",
    category: "Commercial",
    location: "Jaipur",
    slug: "zen-spaces",
    image: "/assets/Webp Project Images/Zen Spaces, Jaipur.webp",
  },
  {
    name: "The Courtyard House",
    category: "Residential",
    location: "Nokha, Rajasthan",
    slug: "the-courtyard-house",
    image: "/assets/Courtyard House/hero.png",
  },
];
