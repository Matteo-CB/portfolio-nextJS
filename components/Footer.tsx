'use client'

import React, { useState } from "react";
import Legal from "./Legal";
import { hangleOverfow } from "./Contact";

export default function Footer() {
  const [isLegalOpen, setIsLegalOpen] = useState<boolean>(false);
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <Legal isLegalOpen={isLegalOpen} setIsLegalOpen={setIsLegalOpen} />
      <small className="mb-2 block text-xs">
        &#10148; 2023 Matteo Chante-Biyikli.
      </small>
      <p className="test-xs">
        <span className="font-semibold">À propos de ce site:</span> Réalisé avec
        Next.js, TypeScript, React, Tailwind CSS, Framer Motion, EmailJS, et
        l'hébergement Vercel.
      </p>
      <p onClick={() => {
        setIsLegalOpen(true)
        hangleOverfow(true)
        }} className="underline cursor-pointer mt-2">
        Mentions légales
      </p>
    </footer>
  );
}
