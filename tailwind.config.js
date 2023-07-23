/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "first-blue": "#003366",
        "light-blue": "#003F7D",
        "dark-blue": "#002347",
        "first-orange": "#FD7702",
        "light-orange": "#FBB244",
        "dark-orange": "#FF5003",
        "bg-light": "#FFF9E8",
        "bg-semilight": "#FFE0A2",
        "bg-second": "#fdd89a",
      },
      backgroundImage: {
        "header-img": "url('../public/bg2.svg')",
        blob: "url('../public/blob.svg')",
        wave: "url('../public/wave.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
