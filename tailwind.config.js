/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jilt",
  theme: {
    extend: {
      screens: {
        'lg': '1024px',
        'sm': '640px',
        'md': '768px',
        'xl': '1280px',
      },
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
      "hero":"url('/src/assets/img/slide3.jpg')",
      "details":"url('/src/assets/img/MLCS-135.jpg')",
      "success":"url('/src/assets/img/MLCS-30.jpg')",
      "admin": "url('/src/assets/img/slide1.jpg')"
    }
  },
  plugins: [],
}

