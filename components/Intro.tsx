"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSection";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-28 mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Logo}
              alt="Logo DLK"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.15rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-2xl absolute bottom-0 right-0"
          >
            ☕
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl md:text-2xl font-medium leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Bonjour, je m'appelle Matteo.</span> Je suis
        un <span className="font-bold">développeur frontend, </span>
        {/*with <span className="font-bold">8 years</span> of experience.  */}
        J'aime concevoir des{" "}
        <span className="italic">sites & applications web</span>. Je suis
        spécialisé en <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white sm:px-7 sm:py-3 py-2 px-5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 text-sm sm:text-md md:text-lg hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          Contactez-moi{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          href="./CV.pdf"
          download={true}
          className="cursor-pointer group transition active:scale-105 text-sm sm:text-md px-5 bg-white sm:px-7 sm:py-3 py-2 flex items-center gap-2 rounded-full md:text-lg hover:scale-110 borderBlack dark:bg-white/10"
        >
          Télécharger le CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="cursor-pointer transition active:scale-105 hover:scale-110 bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>

        <a
          href="https://github.com/Matteo-CB"
          target="_blank"
          className="cursor-pointer transition hover:scale-110 text-gray-700 bg-white p-4 flex active:scale-105 items-center gap-2 text-[1.35rem] rounded-full borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
