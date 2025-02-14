// tailwind.config.js | template code from nextui site
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // default path nton nton...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}",
  ],

  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};