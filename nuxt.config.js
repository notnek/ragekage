const siteTitle = 'Rage Kage, a collection of animated gifs';
const siteDescription = 'A collection of animated gifs curated by Kenton Glass';

export default {
  mode: 'universal',
  target: 'static',
  components: true,
  loading: '~/components/LoadingIndicator.vue',
  generate: {
    fallback: true,
  },
  head: {
    title: siteTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      { hid: 'og:title', property: 'og:title', content: siteTitle },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: siteDescription,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'mask-icon', href: '/pinned-tab.svg', color: '#2B6CB0' },
    ],
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-ackee',
  ],
  modules: ['@nuxt/content'],
  ackee: {
    server: 'https://stats.ragekage.com',
    domainId: '5ffdac7c-ce85-47e0-a380-2167775783f4',
  },
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-import': {},
      },
    },
  },
};
