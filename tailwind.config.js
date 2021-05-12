module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        poroporo: {
          light: '#f0eef5',
          DEFAULT: '#44247c'
        },
        butter: '#ffde02',
        grass: '#30af00'
      }
    },
    variants: {
      extend: {}
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  }
}
