/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    fontSize: {
      '10xl': '27rem',
      '5xl': '5rem',
    },
    extend: {
      backgroundImage: {
        'imgCharacters': "url('../src/assets/images/characters.jpg')",
        'imgLogo': "url('../src/assets/images/logo.png')",
      },
    },
  },
  plugins: [],
};
