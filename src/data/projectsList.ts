export type ProjectCategory = 'ALL' | 'SAAS' | 'MOBILE' | 'EDITORIAL' | 'ECOMMERCE';

export interface ProjectListing {
  id: string;
  year: string;
  title: string;
  category: string;
  type: ProjectCategory;
  description: string;
  technologies: string[];
  bgImage: string;
  assets: string[];
  link: string;
}

export const projectsList: ProjectListing[] = [
  {
    id: "memoir",
    year: "2025",
    title: "MEMOIR",
    category: "A journal on design culture",
    type: "EDITORIAL",
    description: "A personal journal exploring the intersections of music, architecture, and design — the frequencies that shape how we build and feel.",
    technologies: ["ASTRO", "GSAP", "TYPESCRIPT", "TAILWIND"],
    bgImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
    assets: [
      "https://images.unsplash.com/photo-1493225457224-eda8e9b6a951?w=800&q=80",
      "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?w=800&q=80"
    ],
    link: "/projects/memoir"
  },
  {
    id: "dentos",
    year: "2024",
    title: "DENTOS",
    category: "Dental ERP system",
    type: "SAAS",
    description: "Modular practice management suite: digital odontogram, patient records, scheduling, billing, and staff time tracking — all in one unified interface.",
    technologies: ["REACT", "NEXT.JS", "MONGODB", "NODE.JS", "TYPESCRIPT"],
    bgImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80",
    assets: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    ],
    link: "/projects/dentos"
  },
  {
    id: "fashion",
    year: "2024",
    title: "FASHION",
    category: "E-Commerce platform",
    type: "ECOMMERCE",
    description: "The number one fashion platform in the region made with the best experts in the industry.",
    technologies: ["NEXT.JS", "TAILWIND", "STRIPE", "PRISMA"],
    bgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    assets: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80"
    ],
    link: "/projects/fashion"
  },
  {
    id: "gymfit",
    year: "2023",
    title: "GYMFIT",
    category: "Health & Fitness App",
    type: "MOBILE",
    description: "Take care of your health with a virtual gym and stay fit with tracking features just in your hand.",
    technologies: ["REACT NATIVE", "NODE.JS", "REDIS", "EXPRESS"],
    bgImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&q=80",
    assets: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
    ],
    link: "/projects/gymfit"
  },
  {
    id: "seyaq-admin",
    year: "2024",
    title: "SEYAQ CORE",
    category: "Internal Agency CRM",
    type: "SAAS",
    description: "The main nervous system of SEYAQ. A robust CRM handling lead flow, project tracking, and automated invoicing.",
    technologies: ["NEST.JS", "NEXT.JS", "POSTGRESQL", "DOCKER"],
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    assets: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    ],
    link: "/projects/seyaq-admin"
  },
  {
    id: "foodie",
    year: "2023",
    title: "FOOD ALCHEMY",
    category: "Restaurant Delivery App",
    type: "MOBILE",
    description: "Real-time delivery tracking, complex allergy filtering, and a sleek dark-mode UI for high-end dining.",
    technologies: ["FLUTTER", "FIREBASE", "STRIPE"],
    bgImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80",
    assets: [
      "https://images.unsplash.com/photo-1414235077428-338988a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
    ],
    link: "/projects/foodie"
  }
];
