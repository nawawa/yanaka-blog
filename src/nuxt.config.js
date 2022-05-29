import colors from 'vuetify/es5/util/colors'

export default {

  // 環境変数
  privateRuntimeConfig: {
    apiURL: process.env.API_URL,
    apiSecret: process.env.API_SECRET
  },
  publicRuntimeConfig: {
    apiURL: process.env.NODE_ENV !== 'production' ? process.env.API_URL : '',
    apiSecret: process.env.NODE_ENV !== 'production' ? process.env.API_SECRET : ''
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/articles/page/:p',
        component: resolve(__dirname, 'pages/articles/index.vue'),
        name: 'page',
      })
    },
  },

  generate: {
    fallback: true, // 不明なパスへのアクセス時もNuxtコンポーネントで解決
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - 谷中研究所のブログ',
    title: '谷中研究所のブログ',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
