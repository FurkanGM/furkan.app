'use client'

import './globals.css'
import { Poppins } from 'next/font/google'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import Avatar from '@/components/Avatar'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { HiArrowDown, HiOutlineEnvelope } from 'react-icons/hi2'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: 'normal',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-athens-gray-100 dark:bg-ebony-900 text-neutrals-900 dark:text-white py-[60px] ${poppins.className}`}
      >
        <ThemeProvider attribute="class" enableColorScheme={false}>
          <header>
            <div className="container">
              <div className="max-w-2xl w-full mx-auto">
                <div className="flex flex-wrap md:flex-nowrap items-center gap-6 p-3">
                  <div className="flex-shrink-0 relative aspect-square w-[5.625rem] rounded-full overflow-hidden m-3 ring-4 ring-offset-8 ring-offset-athens-gray-100 dark:ring-offset-ebony-900 ring-primary">
                    <Avatar />
                  </div>
                  <div className="w-full flex flex-col">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex-shrink-0 flex flex-col">
                        <div className="flex items-center font-semibold text-3xl">
                          <span>Furkan GEZEK</span>
                        </div>
                        <div className="font-normal text-neutrals-700 dark:text-neutrals-20">
                          Fullstack Developer
                        </div>
                      </div>
                      <div className="mr-auto w-full flex justify-end">
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
                <div className="mt-4 p-3 flex gap-3">
                  <a
                    href="/assets/docs/resume.pdf"
                    className="w-full rounded-lg p-3 bg-primary-500 hover:bg-primary-600 font-medium text-white flex items-center justify-center cursor-pointer"
                    download="Furkan Gezek - Resume.pdf"
                    aria-label="Furkan Gezek resume pdf"
                  >
                    <span>Download CV</span>
                    <HiArrowDown className="ml-2" size="20" />
                  </a>
                  <a
                    href="mailto:contact@furkan.app"
                    className="rounded-lg py-3 px-6 bg-white hover:bg-athens-gray-50 dark:bg-neutrals-700 dark:hover:bg-neutrals-600 font-medium text-primary-500 flex items-center justify-center cursor-pointer"
                    aria-label="Furkan Gezek personal email address"
                  >
                    <HiOutlineEnvelope size="20" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/furkan-gezek/"
                    className="rounded-lg py-3 px-6 bg-white hover:bg-athens-gray-50 dark:bg-neutrals-700 dark:hover:bg-neutrals-600 font-medium text-primary-500 flex items-center justify-center cursor-pointer"
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
              <div className="max-w-2xl w-full mx-auto p-3">{children}</div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
