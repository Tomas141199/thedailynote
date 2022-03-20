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
        "primary-blue": "#090B0D",
        "light-blue": "#0597F2",
        "primary-red": "#F9250F",
        "light-gray": "#F2EEEB",
        "primary-gray": "#575654",
      },
      spacing: {
        128: "32rem",
        tiny: "0.11rem",
      },
    },
  },
  plugins: [],
};