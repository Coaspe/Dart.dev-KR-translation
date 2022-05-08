module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header: "50px",
      },
      colors: {
        header: "#1c2834",
        selectedText: "#1389FD",
        selectedTextHover: "#7bacef",
        primaryTitleTextColor: "#4A4A4A",
        textGreen: "#247777",
        textPurple: "#7500A0",
        preBG: "#f5f5f5",
      },
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        noto: ["Nanum Myeongjo"],
        roboto: "Roboto",
      },
      screens: {
        rightSide: "1200px",
      },
    },
  },
  plugins: [],
};
