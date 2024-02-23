/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#63B396",
          secondary: "#63B396",
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 30px 50px -10px rgba(0, 0, 0, 0.4)",
      },
    },
  },

  plugins: [require("daisyui")],
};
