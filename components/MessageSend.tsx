'use client'

import React from "react";
import { RiCloseFill } from "react-icons/ri";

export default function MessageSend({ isSend, setIsSend, hangleOverfow }: any) {


  return (
    <>
      {isSend && (
        <>
          <div className="bg-black opacity-50 h-[200vh] w-full fixed -translate-y-[25%] z-[454656564564564]"></div>
          <div className="z-[454656564564565886468] flex items-center justify-center fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-gray-200 h-[200px] p-[40px] rounded gradient3">
            <RiCloseFill
            onClick={() => {
                setIsSend(false);
                hangleOverfow(false);
            }}
              className="cursor-pointer text-md mr-5 absolute top-2 -right-4"
            />
            <p>Votre Message a bien été envoyé !</p>
          </div>
        </>
      )}
    </>
  );
}
