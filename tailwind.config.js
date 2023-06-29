/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "light-orange": "#FD7702",
        "dark-orange": "#FF5003",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
