import colors from 'vuetify/es5/util/colors'

export default {

  axios: {
    baseURL: process.env.API_URL,
  },

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

  microcms: {
    options: {
      serviceDomain: process.env.SERVICE_DOMAIN,
      apiKey: process.env.API_SECRET,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
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
    { src: '~/assets/scss/common.scss' },
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
    'nuxt-microcms-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      light: true,
      themes: {
        light: {
          font: '#473838',
          background: `#EEEEEE`,
          primary: `#7399C5`,
          accent: `#4E4747`,
          secondary: `#EBDABF`,
          info: `#BDE4DB`,
          warning: `#EBEAC3`,
          error: `#EACDC3`,
          success: `#C0ECCA`
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
