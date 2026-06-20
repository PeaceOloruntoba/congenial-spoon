/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutral-50': '#fafaf9',
        'neutral-100': '#f5f5f4',
        'neutral-200': '#e7e5e4',
        'neutral-800': '#292524',
        'neutral-900': '#1c1917',
        'accent-700': '#b45309',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
