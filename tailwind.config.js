module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '300px',
      md: '600px',
      lg: '900px',
      xl: '1500px',
    },
    fontSize: {
      h1: '32px',
      h2: '36px',
      h3: '22px',
      h4: '20px',
    },
    colors: {
      primary: '#104359',
      link: '#10AFA4',
    },
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideIn: 'slideIn 0.5s forwards',
        slideOut: 'slideOut 0.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 1, transform: 'translateX(0%)' },
        },
        slideOut: {
          '0%': { opacity: 1, transform: 'translateX(0%)' },
          '100%': { opacity: 0, transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
