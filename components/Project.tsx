"use client";

import type { ProjectsProps } from "@/lib/types";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group  mb-3 sm:mb-8 last:mb-0"
    >
      <section className="rounded-lg group-even:even:pl-8 bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]   hover:bg-gray-200 transition">
        <a href={url} target="_blank">
          <div className="sm:max-w-[50%] pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-8 flex flex-col h-full">
            <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-sm sm:text-md text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.5rem] sm:text-[0.6rem] uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={"Projet" + title}
            quality={95}
            className="absolute top-8 -right-60 md:-right-40 w-[28.25rem] rounded-lg shadow-2xl group-hover:-translate-x-3 
        group-hover:translate-y-3 
        group-hover:shadow-2xl 
        group-hover:-rotate-2   
        group-hover:scale-[1.04] 
        
        

        transition"
          />
        </a>
      </section>
    </motion.div>
  );
}
