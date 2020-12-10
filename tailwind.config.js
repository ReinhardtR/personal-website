module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    colors: {
      first: "#6EE2F5",
      second: "#6454F0",
      blue: "#0D1117",
      gray: "#2c2c2e",
      white: "#ffffff",
    },
    fontFamily: {
      body: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
