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
    id: "khatwa",
    year: "2026",
    title: "KHATWA",
    category: "OPERATIONAL ERP / CORPORATE WEBSITE",
    type: "SAAS",
    description: "A complete digital transformation for an educational consultancy. I engineered a high-converting web presence paired with a custom role-based ERP to automate complex student workflows and scale their operations.",
    technologies: ["NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS"],
    bgImage: "/khatwa-study.png",
    assets: [
      "/khatwa-design.png",
      "/khatwa-design2.png",
      "/khatwa-design3.png",
      "/khatwa-system.png",
      "/khatwa-system2.png",
      "/khatwa-system3.png",
      "/khatwa-system4.png",
      "/khatwa-system5.png",
      "/kahtwa-system6.png"
    ],
    link: "/projects/khatwa"
  }
];
