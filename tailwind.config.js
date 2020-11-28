const {
  theme: { colors },
} = require('tailwindcss/defaultConfig')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          1: '#131417',
          2: '#212227',
          3: '#2B2C32',
          ...colors.gray,
        },
      },
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
  },
}
