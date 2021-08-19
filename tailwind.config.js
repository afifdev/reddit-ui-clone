module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        'ibm': ['IBM-Plex-Sans', 'sans-serif'],
        'noto': ['Noto-Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
