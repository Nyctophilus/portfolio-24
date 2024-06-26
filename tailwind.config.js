/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bubbles: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        bubbles: "bubbles 4s ease infinite",
      },
    },
  },
  plugins: [],
};
