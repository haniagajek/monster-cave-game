/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 1.2s ease-out .10s infinite alternate both",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(5px, 5px) rotate(5deg)" },
          "50%": { transform: "translate(0, 0) rotate(0eg)" },
          "75%": { transform: "translate(-5px, 5px) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
      },
    },
    animation: {
      fall: "fall 2s ease 0s 1 normal forwards ",
    },
    keyframes: {
      fall: {
        "0%": { transform: "translateY(-45px)" },
        "40%": { transform: "translateY(-24px)" },
        "65%": { transform: "translateY(-12px)" },
        "82%": { transform: "translateY(-6px)" },
        "93%": { transform: "translateY(-4px)" },
        "25%": { transform: "translateY(0px)" },
        "55%": { transform: "translateY(5px)" },
        "75%": { transform: "translateY(0px)" },
        "87%": { transform: "translateY(3px)" },
        "100%": { transform: "translateY(0px)" },
      },
    },
  },
  plugins: [],
};

//  chce dodac animacje spadania do guzika ale idk jak to ta fall btw
