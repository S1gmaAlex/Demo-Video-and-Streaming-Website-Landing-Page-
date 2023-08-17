/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				sans: ['Mulish', 'sans-serif']
			},
			colors: {
				primary: '#006AFF',
				black: '#141516',

			}
		}
	},

	plugins: []
};

module.exports = config;
