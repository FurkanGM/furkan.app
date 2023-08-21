"use client";

import React from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className={
        "cursor-pointer rounded-full bg-athens-gray-200 p-2 hover:bg-athens-gray-300 dark:bg-ebony-700 dark:hover:bg-ebony-800"
      }
      onClick={() => (resolvedTheme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <div className="relative">
        <HiSun size={20} className="dark:hidden" />
        <HiMoon size={20} className="hidden dark:block" />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
