module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        tiny: ".6rem",
      },
      colors: {
        "opacity-blue": "#090b0da2 ",
        "primary-blue": "#090B0D",
        "light-blue": "#0597F2",
        "primary-red": "#F9250F",
        "light-gray": "#F2EEEB",
        "primary-gray": "#575654",
      },
      spacing: {
        link: "2.4rem",
        middle: "0.2rem",
        128: "32rem",
        tiny: "0.11rem",
        small: "0.16rem",
      },
    },
  },
  plugins: [],
};
