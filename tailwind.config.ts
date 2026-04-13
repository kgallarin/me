/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: ['./resources/js/**/*.{js,vue}', './resources/**/*.blade.php', './resources/js/*.{js,vue}'],
  safelist: [
		{
			pattern: /text-(orange|green|yellow|teal|pink|red|purple|blue)-(400|500)/,
		}
  ],
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
        tertiary: 'var(--color-tertiary)',

        'yellow-primary': 'var(--color-yellow-primary)',

        'teal-primary': 'var(--color-teal-primary)',
        'teal-secondary': 'var(--color-teal-secondary)',

        'gray-primary': 'var(--color-gray-primary)',
        'gray-secondary': 'var(--color-gray-secondary)',
        'gray-lighter': 'var(--color-gray-lighter)',
      },

      boxShadow: {
        'custom-mid-inset': 'inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);',
      },

      fontFamily: {
        acumin: ['Acumin Pro Wide', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif', 'Helvetica Neue', 'Helvetica', 'Arial'],
      },
    },
  },
  plugins: [],
};

export default module.exports;
