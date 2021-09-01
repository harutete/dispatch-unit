module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        member: {
          '01': '#ef858c',
          '02': '#6b69af',
          '03': '#48baa0',
          '04': '#e7325c',
          '05': '#aacd06',
          '06': '#50d2d0',
          '07': '#f5a21d',
          '08': '#f7c8dc',
          '09': '#7dcef4',
          '10': '#ffea21',
          '11': '#8bc777',
          '12': '#d3aaf0',
          '13': '#be8915',
          '14': '#797b78',
          '15': '#e95189',
          '16': '#752a1b',
          '17': '#beb892',
          '18': '#fa5225',
          '19': '#023894',
          '20': '#3eb134',
          '21': '#1f286f',
          '22': '#d70c25',
          '23': '#920783',
          '24': '#014d33'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}