/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        satoshiRegular: ["Satoshi-Regular", "sans-serif"],
        satoshiLight: ["Satoshi-Light", "sans-serif"],
        satoshiBold: ["Satoshi-Bold", "sans-serif"],
        satoshiMedium: ["Satoshi-Medium", "sans-serif"],
      },
      colors: {
        corHelixDark: "#060E2C",
        corHelixPrincipal: "#2147DE",
        corHelixLight: "#D6DBDF",
      },
      lineHeight: {
        full: "100%",
        fullDez: "110%",
        fullVinte: "120%",
      },
    },
  },
  plugins: [],
};
