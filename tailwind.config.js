module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        first: "#6EE2F5",
        second: "#6454F0",
        darkBlue: "#161B22",
        darkGray: "#2c2c2e",
      },
      backgroundImage: (theme) => ({
        "main-gradient": "linear-gradient(to bottom right, #6EE2F5, #6454F0)",
        "snake-gradient": "linear-gradient(to bottom right, #81FBB8, #28C76F)",
        "sorting-gradient":
          "linear-gradient(to bottom right, #ABDCFF, #0396FF)",
        "pathfinding-gradient":
          "linear-gradient(to bottom right, #E2B0FF, #9F44D3)",
        "weather-gradient":
          "linear-gradient(to bottom right, #FCCF31, #F55555)",
        "netflix-gradient":
          "linear-gradient(to bottom right, #b31717, #ff2e1f)",
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
