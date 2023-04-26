/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b9ff66",
        dark: "#191a23",
        light: "#f3f3f3",
      },
      backgroundImage: {
        testimonialPattern: "url(../../public/assets/Union.svg)",
      },
    },
  },
  plugins: [],
};
