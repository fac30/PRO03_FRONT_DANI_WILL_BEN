/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'home-background': '#0F1A2E',
        'button-colour': '#FDC206',
        'background-gradient': '#3054AE',
      },
      fontFamily:{
        custom:["Pacifico", "sans-serif"],
      },
    },
  },
  plugins: [],
};

