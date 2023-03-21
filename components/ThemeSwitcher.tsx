"use client";

import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";

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
				"rounded-full p-2 bg-athens-gray-200 hover:bg-athens-gray-300 dark:bg-ebony-700 dark:hover:bg-ebony-800 cursor-pointer"
			}
			onClick={() =>
				resolvedTheme === "light" ? setTheme("dark") : setTheme("light")
			}>
			<div>
				{resolvedTheme === "dark" && <IoSunny size={20} />}
				{resolvedTheme === "light" && <IoMoon size={20} />}
			</div>
		</div>
	);
};

export default Avatar;
