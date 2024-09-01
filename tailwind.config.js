/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        hauora: ['Hauora', 'sans-serif'], // Add your custom font
      },

      colors: {
        'primary': '#f6f6f6',
        'secondary': '#f79705',
        'accent': '#2a2b2d',
      },
      gridTemplateColumns: {
        "main-xl": "290px 900px 96px",
        "main-lg": "280px 870px 96px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}