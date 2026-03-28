/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./resources/js/**/*.{js,vue}', './resources/**/*.blade.php', './resources/js/*.{js,vue}'],
  theme: {
    extend: {
      screens: {
        '2xs': '320px',
        xs: '414px',
        sm: '595px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        'yellow-primary': 'var(--color-yellow-primary)',

        'teal-primary': 'var(--color-teal-primary)',
        'teal-secondary': 'var(--color-teal-secondary)',

        'gray-primary': 'var(--color-gray-primary)',
        'gray-secondary': 'var(--color-gray-secondary)',
        'gray-lighter': 'var(--color-gray-lighter)',
      },

      fontFamily: {
        acumin: ['Acumin Pro Wide', 'sans-serif'],
        'proxima-bold': ['Proxima Nova Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default module.exports;
