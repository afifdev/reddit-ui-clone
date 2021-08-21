module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        95: "95%",
      },
      spacing: {
        76: "19rem",
        512: "512px",
      },
      fontFamily: {
        ibm: ["IBM-Plex-Sans", "sans-serif"],
        noto: ["Noto-Sans", "sans-serif"],
      },
      colors: {
        "reddit-bg": "#DAE0E6",
        "reddit-fg": "#FFFFFF",
        "reddit-acc": "#0079D3",
        "reddit-orange": "#FF4500",
      },
      screens: {
        rxs: "418px",
        rsm: "508px",
        rmd: "728px",
        rlg: "948px",
        rxl: "960px",
        r2xl: "1020px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
