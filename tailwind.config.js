module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  theme: {
    screens: {
      s: '320px',
      sm: '480px',
      md: '768px',
      lg: '1200px',
      xl: '1460px',
      xxl: '1920px'
    },
    colors: {
      black: '#101116',
      gray: '#1F222B',
      'gray-light': '#888B9A',
      red: '#D64D5B',
      yellow: '#ED983B',
      green: '#64A354',
      blue: '#5176CF',
      white: '#FFFFFF'
    },
    backgroundColor: theme => ({
      ...theme('colors')
    }),
    fontFamily: {
      noto: ['Noto Sans SC', 'sans-serif'],
      roboto: ['Roboto Condensed', 'sans-serif']
    },
    extend: {}
  },
  corePlugins: {
    container: false
  },
  variants: {
    extend: {}
  },
  plugins: []
}
