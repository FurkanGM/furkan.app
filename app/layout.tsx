import "./globals.css";

import { Poppins } from "next/font/google";
import React from "react";
import { HiEye, HiOutlineEnvelope } from "react-icons/hi2";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/providers/ThemeProvider";
import Header from "@/components/Header";

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
        <ThemeProvider>
          <header>
            <div className="container">
              <div className="mx-auto w-full max-w-2xl">
                <Header />
                <div className="mt-4 flex gap-3 p-3">
                  <a
                    href="/assets/docs/resume.pdf"
                    className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-primary-500 p-3 font-medium text-white hover:bg-primary-600"
                    download="Furkan Gezek - Resume.pdf"
                    aria-label="Furkan Gezek resume pdf"
                  >
                    <span>Preview CV</span>
                    <HiEye className="ml-2" size="20" />
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
