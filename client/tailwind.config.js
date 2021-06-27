module.exports = {
  theme: {
    extend: {
      screens: {
        xxs: "380px",
        xs: "476px",
      },
      colors: {
        primary: "#E3F2FF",
        secondary: "#28527A",
        tertiary: "#5288BC",
        lightGray: "#F2F2F2",
        darkGray: "#9699A3",
        backdrop: "#000000BB",
        redAlert: "#EF5874",
      },
      minWidth: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "18": "4.5rem",
        "20": "5rem",
        "22": "5.5rem",
        "24": "6rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem",
        "32": "8rem",
        "64": "16rem",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2x1": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      minHeight: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "14": "3.5rem",
        "16": "4rem",
        "18": "4.5rem",
        "20": "5rem",
        "22": "5.5rem",
        "24": "6rem",
        "26": "6.5rem",
        "28": "7rem",
        "30": "7.5rem",
        "32": "8rem",
        "64": "16rem",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2x1": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      padding: ["first"],
    },
  },
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
