/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: '#D24836',
        tertiary: '#FF1D1D',
      },
    }, 
    boxShadow: {

    },
    screens: {},
    backgroundImage: {
      "hero":"url('/src/assets/img/MLCS-10.jpg')",
      "details":"url('/src/assets/img/MLCS-135.jpg')",
      "success":"url('/src/assets/img/MLCS-30.jpg')",
      "admin": "url('/src/assets/img/MLCS-10.jpg')"
    }
  },
  plugins: [],
}

