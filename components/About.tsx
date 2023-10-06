"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Je suis un développeur spécialisé en{" "}
        <span className="font-medium">Frontend avec React (Next.js)</span>,
        j'aime découvrir de nouvelles technologies et réaliser des projets qui
        me font découvrir de{" "}
        <span className="font-medium">
          {" "}
          nouveaux problèmes et m'augmentent en expérience.
        </span>
        {/* J'ai obtenu un diplôme d'intégrateur web <span className="italic underline">RNCP niveau 5 équivalent bac+2</span> */}
      </p>
      <p>
        Je sais aussi utiliser d'autres technologies et outils de frontend comme{" "}
        <span className="font-medium">
          Sass et Tailwind css mais aussi TypeScript
        </span>
        , je possède en plus des notions et de l'expérience dans différents
        projets en <span className="font-medium">backend avec Node.js</span>{" "}
        <span className="italic">(CRUD, Authentification)</span> ce qui me
        facilite le travail avec le backend. Pour finir j'ai appris lors de ma
        formation la gestion de projet en méthode agile. Et à part le code
        j'aime aussi{" "}
        <span className="font-medium">
          la pâtisserie et apprendre des langues.
        </span>
      </p>
      
    </motion.section>
  );
}
