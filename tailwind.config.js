/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "850px",
        // => @media (min-width: 640px) { ... },
      },
      backgroundColor: {
        "custom-purple": "rgba(133, 76, 230, 0.082)",
      },
      textColor: {
        "custom-purple2": "rgba(133, 76, 230)",
      },
    },
  },
  plugins: [],
};
