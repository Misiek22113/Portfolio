/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-hanken-grotesk)", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    colors: {
      "background-color": "#2c2a31",
      "font-color": "#e4ddad",
      "border-color": "#e5a042",
    },
    extend: {
      gridTemplateColumns: {
        navbar: "2fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};
