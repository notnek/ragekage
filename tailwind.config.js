/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      cursor: {
        help: 'help',
      },
      inset: {
        '6': '1.5rem',
      },
      screens: {
        'dark-mode': {
          raw: '(prefers-color-scheme: dark)',
        },
      },
    },
  },
  variants: {
    borderRadius: ['responsive', 'after'],
    display: ['responsive', 'group-hover'],
    height: ['responsive', 'after'],
    width: ['responsive', 'after'],
  },
  plugins: [require('tailwindcss-pseudo')()],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
