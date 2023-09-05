/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "850px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};