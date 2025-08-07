/** @format */

// tailwind.config.js

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "#1a202c",
				secondary: "#4a5568",
				accent: "#f97316",
				background: "#f9fafb",
				card: "#ffffff",
				muted: "#e2e8f0",

				dark: {
					bg: "#1a202c",
					card: "#2d3748",
					text: "#e2e8f0",
					muted: "#4a5568",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
