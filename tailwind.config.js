/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        morph: {
          "0%, 100%": {
            opacity: 0.9,
            borderRadius: "40% 60% 70% 30% / 40% 40% 60% 50%"
          },
          "34%": {
            opacity: 0.6,
            borderRadius: "70% 30% 50% 50% / 30% 30% 70% 70%"
          },
          "67%": {
            opacity: 1,
            borderRadius: "100% 60% 60% 100% / 100% 100% 60% 60%"
          }
        }
      },
      animation: {
        morph: "morph 4s linear infinite"
      }
    }
  },
  plugins: []
};
