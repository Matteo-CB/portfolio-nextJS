"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useRef, useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MessageSend from "./MessageSend";
export const hangleOverfow = (isHidden: boolean) => {
  if(isHidden) {
      document.body.style.overflow = "hidden";}else{
          document.body.style.overflow = "auto";
      }}
export default function Contact() {
  const [isSend, setIsSend] = useState(false);
  const { ref } = useSectionInView("Contact");
  const form: any = useRef();
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4ohn18e",
        "template_edimfa1",
        e.target,
        "skRifsIxEeTdBBSMR"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSend(true);
          hangleOverfow(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
    
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 0.6, delay: 0.1, bounce: 0.2 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
      className="scroll-mt-28 text-center mb-20 mt-10 sm:mb-28 sm:mt-1 w-[min(100%,38rem)]"
    >
      <SectionHeading>Contactez-moi</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Veuillez me contactez à cette adresse-ci{" "}
        <a href="mailto:matteochantebiyikli@gmail.com" className="underline">
          matteochantebiyikli@gmail.com
        </a>{" "}
        ou directement via ce formulaire
      </p>
      <form className="mt-10 flex flex-col" ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          maxLength={500}
          placeholder="Nom"
          className="px-4 h-14 rounded-lg borderBlack"
          required
        />
        <input
          name="email"
          type="email"
          maxLength={500}
          placeholder="Email"
          className="px-4 my-3 h-14 rounded-lg borderBlack"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="borderBlack resize-none h-52 my-3 rounded-lg p-4"
          required
          maxLength={500}
        />
        <button
          className="hover:bg-gray-950 hover:scale-110 group flex justify-center gap-2 items-center h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none   text-white transition-all"
          type="submit"
        >
          Envoyer{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1  group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
    {
      isSend && (
        <MessageSend hangleOverfow={hangleOverfow} isSend={isSend} setIsSend={setIsSend} />
      )
    }
    </>
  );
}
