module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'ibm': ['IBM-Plex-Sans', 'sans-serif'],
        'noto': ['Noto-Sans', 'sans-serif']
      },
      colors: {
        'reddit-bg': '#DAE0E6',
        'reddit-fg': '#FFFFFF',
        'reddit-acc': '#0079D3',
        'reddit-orange': '#FF4500'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
