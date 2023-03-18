/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/public/**/*.html",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      transitionDelay: {
        50: "50ms",
      },
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    colors: {
      primary: "#4F14EE",
      "primary-light": "#dcd0fc",
      "primary-alt": "#9B89B3",
      "surface-light": "#f8f9fa",
      green: "#0E8F17",
      white: "#FFF",
      red: "#dc2626",
      "grey-light": "#e5e7eb",
      "grey-medium": "#d1d5db",
      "grey-dark": "#6b7280",
    },
  },
};
