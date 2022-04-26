module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#232473",
          600: "#4144C5",
          500: "#5E60CE",
          300: "#B7B7E9",
          200: "#CFCFF0",
          100: "#DFDFF5",
          50: "#EFEFFA",
          25: "#F7F7FD",
        },
        gray: {
          700: "#344054",
          500: "#667085",
          25: "#FCFCFD",
        },
        red: {
          600: "#D92D20",
          50: "#FEE4E2",
        },
      },
    },
  },
  plugins: [],
};
