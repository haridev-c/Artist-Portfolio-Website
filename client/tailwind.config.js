/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#0d6efd",
        lightGrey: "#5d5d5d",
        footerBlack: "#212529",
        footerText: "#909294",
        headerBg: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
