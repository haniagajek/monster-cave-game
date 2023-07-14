/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.1s ease-out .1s infinite alternate both",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, 3px) " },
          "50%": { transform: "translate(3px, 6px) " },
          "75%": { transform: "translate(2px, 3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
    },
    animation: {
      fall: "fall 1.1s  ease-in-out both",
    },
    keyframes: {
      fall: {
        "0%": { transform: "scale(5)" },
        "100%": { transform: "scale(1)" },
      },
    },
  },
  plugins: [],
};

//  chce dodac animacje spadania do guzika ale idk jak to ta fall btw
