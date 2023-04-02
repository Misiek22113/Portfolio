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
      "text-color": "#F3F3F3",
      "background-color": "#191919",
      "font-color-basic": "#8E8E8E",
      "font-color-hoover": "#d37a3f",
      "border-color": "#e5a042",
      "icon-color": "#E4DDAD",
    },
    extend: {
      gridTemplateColumns: {
        navbar: "2fr 1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
};

//#2c2a31
//#e4ddad

//hover E86A34 EC7D35 E3A857

//229 119 53
//E3A857

//normal text F2E2C2
