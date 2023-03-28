/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background-color": "#2c2a31",
      "font-color": "#e4ddad",
      "border-color": "#e5a042",
    },
    extend: {},
  },
  plugins: [],
};
