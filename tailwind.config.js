/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./dist/index.html"],
	theme: {
		extend: {
			container: {
				center: "true",
			},
			colors: {
				"custom-white": "#F7F7F7",
				"custom-blue": "#0147FF",
			},
			fontFamily: {
				"roboto-condensed": ["Roboto Condensed", "sans-serif"],
				"roboto-flex": ["Roboto Flex", "sans-serif"],
				"bebas-neue": ["Bebas Neue", "sans-serif"],
			},
		},
	},
	plugins: [],
};
