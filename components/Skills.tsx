"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-15 max-w-[53rem] scroll-mt-28 text-center sm:mb-20"
    >
      <SectionHeading>Mes Compétences</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 sm:text-md md:text-lg text-sm text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            custom={index}
            key={index}
            className="bg-white border border-black/[0.1] py-1 md:py-3 rounded-xl px-3 md:px-5  dark:bg-white/10 dark:text-white/80"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
