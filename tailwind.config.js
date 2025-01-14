/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgreen: "#1BBB6B",
        custompurple: "#7934d1",
        customblue: "#012445"
      },

      fontSize: {
        sectionheader: "1.48rem" 
      }
    },
  },
  plugins: [],
}
