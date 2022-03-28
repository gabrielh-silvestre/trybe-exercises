module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        background: '#FCFAE1',
        text: '#4C1B1B',
        details: 'rgb(194 65 12)',
        sections: '#BD8D46',
        tags: '#bd8d4685',
      },
    },
  },
  plugins: [],
};
