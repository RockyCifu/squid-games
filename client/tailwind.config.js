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
      light: "#F1F5F9",
      dark: "#373D3F",
      primary: "#2A496E",
      secondary: "#cadbfa",
    },
    extend: {
      gridTemplateColumns: {
        responsive: "repeat(auto-fill, minmax(375px, 1fr))",
      },
    },
  },
};
