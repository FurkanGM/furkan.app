"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	style: "normal"
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="tr">
			<body
				className={`bg-athens-gray-100 dark:bg-ebony-900 text-neutrals-900 dark:text-white pt-[60px] ${poppins.className}`}>
				<ThemeProvider attribute={"class"} enableColorScheme={false}>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
