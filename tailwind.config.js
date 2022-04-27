module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '300px',
      md: '600px',
      lg: '900px',
      xl: '2000px',
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
