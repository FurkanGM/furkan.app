"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

const Avatar = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { resolvedTheme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={
        "cursor-pointer rounded-full bg-athens-gray-200 p-2 hover:bg-athens-gray-300 dark:bg-ebony-700 dark:hover:bg-ebony-800"
      }
      onClick={() => (resolvedTheme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <div>
        {resolvedTheme === "dark" && <HiSun size={20} />}
        {resolvedTheme === "light" && <HiMoon size={20} />}
      </div>
    </div>
  );
};

export default Avatar;
