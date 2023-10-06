"use client";

import { Theme } from "@/lib/types";
import { useState } from "react";
import { BsSun } from "react-icons/bs";
const [theme, setTheme] = useState<Theme>("light");

const ThemeSwitch = () => {
    
  return (
    <button
      className={`fixed bottom-5 bg-opacity-80 transition-all right-5 w-[3rem] bg-white h-[3rem] flex items-center  backdrop-blur-[0.5rem] border border-white justify-center rounded-full border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105`}
    >
     <BsSun />
    </button>
  );
};

export default ThemeSwitch;
