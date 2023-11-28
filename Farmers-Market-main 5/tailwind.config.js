/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}', // Path to all your components
	],
	theme: {
		extend: {
			colors: {
				'market-green': '#4CAF50', // custom color for your Farmers Market brand
			},
		},
	},
	plugins: [],
};
