/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['./**/*.html'],
  content: ['./public/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
        '15px': '15px',
        '23px': '23px',
        '7/5': '1.875rem',
      },
      borderRadius: {
        '23px': '23px',
      },
      transitionDuration: {
        400: '400ms',
      },
      colors: {
        primary: {
          100: '#1f2122',
          200: '#e75e8d',
        },
        secondary: '#27292a',
        gray: {
          66: '#666',
        },
      },
      backgroundImage: {
        'main-banner': "url('@/images/banner-bg.jpg')",
        'bg-auth': "url('@/images/bg-auth.jpg')",
      },
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      })
    },
  ],
}
