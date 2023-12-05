import keepPreset from "keep-react/src/keep-preset.js";
/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        primaryColor1: "#228ff6",
        primaryColor2: "#a9cd63",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif",
      },
    },
  },
  plugins: [],
};
