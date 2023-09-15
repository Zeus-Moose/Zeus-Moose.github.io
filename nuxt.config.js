export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  experimental: {
    payloadExtraction: false
  },
  generate:{
      nojekyll: true,
  },
  app: {
    head: {
      title: 'Zeus Moose',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon/favicon.svg' },
        { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/assets/zm.webmanifest' }
      ]
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/zm.scss',
  ],


  // Import SASS variables if needed
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       sass: {
  //         additionalData: '@import "@/assets/scss/init.scss"',
  //       },
  //     },
  //   },
  // },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/zm.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      anchorLinks: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    
  },
})
