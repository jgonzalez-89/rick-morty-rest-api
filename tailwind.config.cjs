/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        'imgCharacters': "url('../public/images/characters.jpg')",
        'imgPlanets': "url('../public/images/planets.jpg')",
        'imgEpisodes': "url('../public/images/episodes.jpg')",
        'imgLogo': "url('../public/images/logo.png')",
      },
    },
  },
  plugins: [],
};
