/** @format */

"use client";
import { useDarkMode } from "@/src/context/DarkModeContext";

export default function ThemeToggle() {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<button
			onClick={toggleDarkMode}
			className='bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-md'>
			{darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
		</button>
	);
}
