const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dev-jobs-violet": "#5964E0",
        "dev-jobs-light-violet": "#939BF4",
        "dev-jobs-very-dark-blue": "#19202D",
        "dev-jobs-midnight": "#121721",
        "dev-jobs-white": "#FFFFFF",
        "dev-jobs-light-grey": "#F4F6F8",
        "dev-jobs-grey": "#9DAEC2",
        "dev-jobs-dark-grey": "#6E8098",
        "dev-jobs-dark-checkbox": "rgba(255, 255, 255, 0.1)",
        "dev-jobs-light-checkbox": "rgba(25, 32, 45, 0.1)",
        "dev-jobs-query-border": "rgba(110, 128, 152, 0.2)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
