"use client";

import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { hangleOverfow } from "./Contact";

export default function Legal({ isLegalOpen, setIsLegalOpen }: any) {
  return (
    <>
      {isLegalOpen && (
        <>
          <div className="bg-black opacity-50 h-[200vh] w-full fixed -translate-y-[25%] z-[454656564564564]"></div>
          <div className="z-[454656564564565886468] max-h-[90vh] overflow-y-auto flex flex-col items-center justify-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[90%] md:w-[60%] bg-gray-200 p-[40px] rounded">
            <RiCloseFill
              onClick={() => {
                setIsLegalOpen(false);
                hangleOverfow(false);
              }}
              className="cursor-pointer text-md sm:text-lg mr-5 absolute top-2 -right-4"
            />
            <h3 className="font-semibold text-md sm:text-lg mb-1 sm:mb-2">Mentions légales</h3>
            <h4 className="text-xs sm:text-md mb-1 sm:mb-2">ARTICLE 1 - L'EDITEUR</h4>
            <p className="text-[0.6rem] sm:text-xs mb-1 sm:mb-2">
              L'édition du Site est assurée par Matteo Chante-Biyikli Numéro de
              téléphone 0641378441, Adresse e-mail
              :matteochantebiyikli@gmail.com. Le Directeur de la publication est
              Matteo Chanté-Biyikli{" "}
            </p>
            <h4 className="text-xs sm:text-md mb-1 sm:mb-2">ARTICLE 2 - L'HEBERGEUR</h4>
            <p className="text-[0.6rem] sm:text-xs mb-1 sm:mb-2">
              L'hébergeur du Site est la société Vercel, dont le siège social
              est situé au 340 S Lemon Ave #4133 Walnut, CA 91789.
            </p >
            <h4 className="text-xs sm:text-md mb-1 sm:mb-2">ARTICLE 3 - ACCES AU SITE</h4>
            <p className="text-[0.6rem] sm:text-xs mb-1 sm:mb-2">
              Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
              force majeure, interruption programmée ou non et pouvant découlant
              d’une nécessité de maintenance. En cas de modification,
              interruption ou suspension du Site, l'Editeur ne saurait être tenu
              responsable.
            </p>
            <h4 className="text-xs sm:text-md mb-1 sm:mb-2">ARTICLE 4 - COLLECTE DES DONNEES</h4>
            <p className="text-[0.6rem] sm:text-xs">
              Votre nom et votre adresse mail peuvent être collectés en me
              contactant via le formulaire de contact. {" "}
              Si vous ne souhaitez pas que vos données soient collectées, merci de ne pas utiliser le formulaire de contact. {" "}
              Si vous souhaitez que vos données soient supprimées, merci de me contacter via le formulaire de contact.
            </p>
          </div>
        </>
      )}
    </>
  );
}
