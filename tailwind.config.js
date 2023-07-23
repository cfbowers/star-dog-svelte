/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
};
