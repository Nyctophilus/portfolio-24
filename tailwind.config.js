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
        beat: {
          "0%": {
            "box-shadow": "0 0 0 0 #3b82f6",
            transform: "scale(1)",
          },
          "50%": {
            "box-shadow": "0 0 0 7px rgba(59, 130, 246, 0)",
            transform: "scale(1.05)",
          },
          "100%": {
            "box-shadow": "0 0 0 0 rgba(59, 130, 246, 0)",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        bubbles: "bubbles 4s ease infinite",
        beat: "beat 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
