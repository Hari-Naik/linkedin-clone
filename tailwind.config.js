/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				Photo: {
					700: "#7085f9",
				},
				Video: {
					700: "#5f9B41"
				},
				Event: {
					700: "#c37D16"
				},
				article: {
					700: "#E16745",
				}

			},
		},
	},
	plugins: [
		require('tailwind-scrollbar-hide')
	],
}

