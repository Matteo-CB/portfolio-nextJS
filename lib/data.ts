import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Debut dans la programmation",
    location: "France",
    description:
      "J'ai commencé la programmation seul en apprenant les langages du web en Première, mais aussi au lycée avec ma spécialité Numérique et Sciences Informatiques ou j'ai approfondi mes connaissances en Python et JavaScript, HTML, CSS avec différents projets",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Diplôme Intégrateur Web",
    location: "France",
    description:
      "J'ai obtenu un titre RNCP équivalent au Bac+2 avec Openclassrooms, dans cette formation, j'ai approfondi mes connaissances en Développement web avec React, j'y ai aussi obtenu des compétences en optimisation de référencement et gestion de projet avec la méthode agile",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Création d'une' Agence web",
    location: "France",
    description:
      "J'ai appris aussi le développement backend et Next js, ces compétences mon permis d'ouvrir ma propre Agence web en collaboration avec un ami étudiant en information",
    icon: React.createElement(FaReact),
    date: "2023 - maintenant",
  },
] as const;

export const projectsData = [
  {
    title: "Page Ecommerce sneakers",
    description:
      "Une page de site de e-commerce de sneakers, avec les fonctionnalités d'ajout et retrait du panier et présentation des images du produit. Développé avec React et utilisant des outils tels que Redux-Toolkit.",
    tags: ["React", "Redux-Toolkit", "Sass/Scss", "JavaScript", "Responsive"],
    imageUrl: EcommercecommentImg,
    url: "https://e-commerce-rl07hymo5-matteo-cb.vercel.app/",
    code: 'https://github.com/Matteo-CB/e-commerce'
  },
  {
    title: "App Pays - API Rest Countries",
    description:
      "Application affichant les données des pays du monde avec la possibilité d'en rechercher un ou de filtrer, les données peuvent être affiché avec plus de détails en cliquant et il y a un mode sombre.",
    tags: ["React", "JavaScript", "API", "Sass/Scss", "Redux-Toolkit"],
    imageUrl: paysdevImg,
    url: "https://app-countries-rho.vercel.app",
    code: 'https://github.com/Matteo-CB/app-countries'
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
  'Sass/Scss',
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
  "MySQL",
  "Python",
  "Framer Motion",
] as const;