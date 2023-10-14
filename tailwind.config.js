/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0E74BE",
        "secondary-color": "#FEC00F",
        "accent-color": "#004080",
        "background-color": "#EEEEEE",
        "text-color": "#161303",
      },
      fontFamily: {
        "header-font": ["Poppins", "sans-serif"],
        "body-font": ["Open Sans", "serif"],
      },
    },
  },
  plugins: [],
};
