/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			'backdrop-color':'rgba(255 255 255 0.5)'
		},
	},
	plugins: [],
}
