/* eslint-disable global-require */
module.exports = {
  plugins: [require("@tailwindcss/forms")],
  theme: {
    fontSize: {
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "2rem"],
      xl2: ["1.875rem", "2.25rem"],
      xl3: ["3rem", "3.5rem"],
    },
    fontFamily: {
      body: ["Montserrat"],
    },
    colors: {
      light: "#def0f8",
      dark: "#040b10",
      primary: "#2d6c9f",
      secondary: "#102e42",
      accent: "#cadbfa",
      white: "#fff",
      black: "#000",
      alert: "#FFbb00",
    },
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(375px, 1fr))",
      },
    },
  },
};
