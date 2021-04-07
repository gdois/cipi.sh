module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/container/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: "#2330E1",
      purple: "#4550E6",
      white: "#FFFFFF",
      black: "#252930",
      gray: "#828d9f",
      grayWhite: "#F5F6FE",
      grayBlack: "#4C5462",
    },
    container: {
      padding: "12rem",
    },
    extend: {
      inset: {
        "3/6": "80%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
