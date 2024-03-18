/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    // theme colors.....
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      dark: "#000000",
      // custom colors.....
      orange: {
        400: "#fc8755",
        600: "#f4662b",
      },
      gray: "#e0e0e0",
    },
    // theme fonts........
    fontFamily: {
      title: ["Taviraj"],
      body: ["Lato"],
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("rippleui")],
};
