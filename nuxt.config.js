export default {
  target: 'static',
  ssr: false,
  srcDir: 'src',
  generate: {
    fallback: true,
    interval: 2000,
  },
  loading: {
    color: 'white',
    height: '1px',
  },
  head: {
    title: 'ASDASDASD',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  css: ['@/assets/css/font-family.css'],
  plugins: [],
  components: true,
  modules: ['@nuxtjs/svg', '@nuxtjs/axios'],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/pwa', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
  },
}
