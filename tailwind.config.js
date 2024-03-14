/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      display: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        danger: "#E03137",
        primary: "#0CAF60",
        "gray-light": "#CBD5E0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
