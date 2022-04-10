module.exports = {
  purge: {
    content: [
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.html",
      "./src/**/*.pug",
      "./src/**/*.md",
    ],
    safelist: [
      "body",
      "html",
      "img",
      "a",
      "ol",
      "ul",
      "g-image",
      "g-image--lazy",
      "g-image--loaded",
    ],
  },
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        // ...
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
