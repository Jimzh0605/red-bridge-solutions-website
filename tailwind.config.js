/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#800020',
        charcoal: '#333333',
        offwhite: '#F9F9F9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))',
          },
        },
      },
      animation: {
        scroll: 'scroll var(--duration) linear infinite',
      },
    },
  },
  plugins: [],
}
