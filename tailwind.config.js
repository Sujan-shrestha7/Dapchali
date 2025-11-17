/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,html}",
  ],
  theme: {
    extend:  {
  keyframes: {
    fadeIn: {
      "0%": { opacity: 0, transform: "translateY(10px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
  animation: {
    fadeIn: "fadeIn 0.25s ease-out",
  },
      fontFamily: {
        bitter: ["Bitter", "serif"],
      },
    },
  },
  plugins: [],
}