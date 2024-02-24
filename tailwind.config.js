/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#597fd2",
        blue: "#84a1de",
        "light-blue": "#1786de3b",
      },
    },
  },
  plugins: [],
};
