module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans' : ['Roboto', 'Arial', 'sans-serif'],
      'patrick': ['Patrick hand', 'Arial', 'sans-serif']
     },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
