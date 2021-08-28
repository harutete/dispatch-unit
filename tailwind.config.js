module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        member01: '#ef858c',
        member02: '#6b69af',
        member03: '#48baa0',
        member04: '#e7325c',
        member05: '#aacd06',
        member06: '#50d2d0',
        member07: '#f5a21d',
        member08: '#f7c8dc',
        member09: '#7dcef4',
        member10: '#ffea21',
        member11: '#8bc777',
        member12: '#d3aaf0',
        member13: '#be8915',
        member14: '#797b78',
        member15: '#e95189',
        member16: '#752a1b',
        member17: '#beb892',
        member18: '#fa5225',
        member19: '#023894',
        member20: '#3eb134',
        member21: '#1f286f',
        member22: '#d70c25',
        member23: '#920783',
        member24: '#014d33'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}