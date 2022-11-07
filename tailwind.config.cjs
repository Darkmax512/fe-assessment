/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
      print: { raw: "print" },
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none: "none",
    },
    extend: {
      colors: {
        "primary-purple": "#A162F7",
        "primary-dark-1": "#242731",
        "primary-white-1": "#E0E4E7",
        "s-red": "#FF6370",
        "s-yellow": "#F6CC0D",
        "s-blue": "#2884FF",
        "s-green": "#70CF97",
        "s-orange": "#FF764C",
        "t-sec-1": "#E1DFA4",
        "t-sec-2": "#E3ECF1",
        "t-sec-3": "#F9F0F1",
        "gray-dark-1": "#1F2128",
        "gray-dark-2": "#5F6165",
        "gray-dark-3": "#72767C",
        "gray-dark-4": "#7C7C8D",
        "gray-dark-5": "#808191",
        "gray-dark-6": "#A4A5A6",
      },
    },
  },
  plugins: [],
};
