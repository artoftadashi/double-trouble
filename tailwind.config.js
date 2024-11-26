/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
      animation: {
        marquee: "marquee 5s linear infinite alternate",
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
