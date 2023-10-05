import EcommercecommentImg from "@/public/images/projects/ecommerce-c1.png";
import paysdevImg from "@/public/images/projects/cover-rest.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Page Ecommerce",
    description:
      "Une page de site de e-commerce de sneakers, avec les fonctionnalités d'ajout et retrait du panier et présentation des images.",
    tags: ["React", "Redux-Toolkit", "Sass/Scss", "JavaScript"],
    imageUrl: EcommercecommentImg,
    url: "https://e-commerce-rl07hymo5-matteo-cb.vercel.app/",
    code: "https://github.com/Matteo-CB/e-commerce",
  },
  {
    title: "App Pays",
    description:
      "Application affichant les données des pays du monde, possibilité de rechercher un pays, de voir les détails et un mode sombre.",
    tags: ["React", "API", "Sass", "Redux-Toolkit"],
    imageUrl: paysdevImg,
    url: "https://app-countries-rho.vercel.app",
    code: "https://github.com/Matteo-CB/app-countries",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "Sass/Scss",
  "npm",
  "pnpm",
  "Postman",
  "Agile",
  "Kanban",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Redux-Toolkit",
  "Express",
  "PHP",
  // "MySQL",
  "Python",
  "Framer Motion",
] as const;
