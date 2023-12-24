module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1440px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      // 'md': { 'max': '767px' },
      'sm': { 'max': '375px' },
    }
  },
  plugins: [],
}