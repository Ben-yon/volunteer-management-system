/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: '#D24836',
      },
    }, 
    boxShadow: {

    },
    screens: {},
    backgroundImage: {
      "hero":"url('/src/assets/img/MLCS-10.jpg')",
    }
  },
  plugins: [],
}

