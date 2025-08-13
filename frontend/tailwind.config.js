/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0b0f1a",
        panel: "#121826",
      },
    },
  },
  plugins: [],
};
