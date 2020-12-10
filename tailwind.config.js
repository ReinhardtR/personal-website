module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        first: "#6EE2F5",
        second: "#6454F0",
        darkBlue: "#0D1117",
        darkGray: "#2c2c2e",
        GitHub: "#161B22",
        Projects: "#00FF5B",
      },
      backgroundImage: (theme) => ({
        "main-gradient": "linear-gradient(#6EE2F5, #6454F0)",
      }),
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
