module.exports = {
    content: [
      './src/**/*.{html,js,jsx,ts,tsx}', // Make sure this matches your file structure
    ],
    theme: {
        darkMode: 'class',
      extend: {},
    },
    plugins: [
      require('tailwindcss-animate'),
    ],
  };
  