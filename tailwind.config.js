/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "resume-tumbnail": "url('../public/images/Resume_thumbnail.jpg')",
      },
    },
  },
  plugins: [],
};
