/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        one: '#DBF7E4',
        two: '#779587',
        three: '#FFE8CE',
        four: '#848F82',
        five: '#30715B',
        six: '#67747B',
        seven: '#FDF5E4',
        eight: '#70787A',
        nine: '#7EB588',
      },
    },
  },
  plugins: [],
};
