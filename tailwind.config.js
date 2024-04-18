/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: { "70/30": "70% 28%" },
      colors: {
        button: "#020058",
        redder: "#E90000",
      },
      boxShadow: {
        "3xl": "0 4px 3px rgb(0 0 0 / 0.07)",
      },
      screens: {
        phone: "390px",
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
