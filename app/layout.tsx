"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import { ThemeProvider } from "next-themes";
import Avatar from "@/components/Avatar";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { HiArrowDown, HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  style: "normal",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-athens-gray-100 py-[60px] text-neutrals-900 dark:bg-ebony-900 dark:text-white ${poppins.className}`}
      >
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <header>
            <div className="container">
              <div className="mx-auto w-full max-w-2xl">
                <div className="flex flex-wrap items-center gap-6 p-3 md:flex-nowrap">
                  <div className="relative m-3 aspect-square w-[5.625rem] flex-shrink-0 overflow-hidden rounded-full ring-4 ring-primary ring-offset-8 ring-offset-athens-gray-100 dark:ring-offset-ebony-900">
                    <Avatar />
                  </div>
                  <div className="flex w-full flex-col">
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-shrink-0 flex-col">
                        <div className="flex items-center text-3xl font-semibold">
                          <span>Furkan GEZEK</span>
                        </div>
                        <div className="font-normal text-neutrals-700 dark:text-neutrals-20">
                          Fullstack Developer
                        </div>
                      </div>
                      <div className="mr-auto flex w-full justify-end">
                        <ThemeSwitcher />
                      </div>
                    </div>
                    <div className="mt-2">
                      <a
                        href="https://github.com/FurkanGM"
                        target="_blank"
                        aria-label="Furkan Gezek Github account"
                      >
                        <AiOutlineGithub size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-3 p-3">
                  <a
                    href="/assets/docs/resume.pdf"
                    className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary-500 p-3 font-medium text-white hover:bg-primary-600"
                    download="Furkan Gezek - Resume.pdf"
                    aria-label="Furkan Gezek resume pdf"
                  >
                    <span>Download CV</span>
                    <HiArrowDown className="ml-2" size="20" />
                  </a>
                  <a
                    href="mailto:contact@furkan.app"
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary-500 hover:bg-athens-gray-50 dark:bg-neutrals-700 dark:hover:bg-neutrals-600"
                    aria-label="Furkan Gezek personal email address"
                  >
                    <HiOutlineEnvelope size="20" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/furkan-gezek/"
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-primary-500 hover:bg-athens-gray-50 dark:bg-neutrals-700 dark:hover:bg-neutrals-600"
                    target="_blank"
                    aria-label="Furkan Gezek Linkedin account"
                  >
                    <AiOutlineLinkedin size="20" />
                  </a>
                </div>
              </div>
            </div>
          </header>

          <main>
            <div className="container">
              <div className="mx-auto w-full max-w-2xl p-3">{children}</div>
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
