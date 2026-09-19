/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
      colors: {
        ink: "#17211d",
        moss: "#355e4c",
        lime: "#c9f269",
        cream: "#f5f4ef",
      },
      boxShadow: { soft: "0 16px 40px rgba(25, 45, 36, .10)" },
    },
  },
  plugins: [],
};
