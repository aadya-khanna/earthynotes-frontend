/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        olive: "#7D8566",
        "olive-dark": "#6a7256",
        lace: "#FEF1E1",
        "lace-warm": "#f9e6d0",
        evergreen: "#203127",
        "evergreen-soft": "#2c4234",
        rust: "#994633",
        "rust-dark": "#7d3826",
      },
      fontFamily: {
        display: ['"Pilcrow Rounded"', "serif"],
        body: ['"Hind"', "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};
