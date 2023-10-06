"use client";

import { Theme } from "@/lib/types";
import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitch = (): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className={`fixed bottom-5 bg-opacity-80 transition-all right-5 w-[3rem] bg-white h-[3rem] flex items-center  backdrop-blur-[0.5rem] border border-gray-950 dark:border-white justify-center rounded-full border-opacity-40 shadow-2xl hover:scale-[1.15] active:scale-105 dark:bg-gray-950`}
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
