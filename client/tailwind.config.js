/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0d6efd",
        lightGrey: "#5d5d5d",
      },
    },
  },
  plugins: [],
};
