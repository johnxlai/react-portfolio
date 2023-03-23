/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3f5c64',
        secondary: '#001519',
      },
    },
  },
  plugins: [
    // {
    //   'postcss-import': {},
    //   'tailwindcss/nesting': {},
    //   tailwindcss: {},
    //   autoprefixer: {},
    // },
  ],
};
