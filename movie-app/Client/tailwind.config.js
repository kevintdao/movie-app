/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops)",
      },
    },
  },
  plugins: [],
};
