import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { appDescription, cms, graphqlRoot, site } from './app/constants'
import { pwa } from './app/config/pwa'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/eslint',
    'nuxt-directus',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/i18n',
    //'@vite-pwa/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/mdc',
    '@nuxtjs/seo'
  ],

  apollo: {
    clients: {
      default: {
        httpEndpoint: `${cms}${graphqlRoot}`,
      },
    },
  },

  googleFonts: {
    families: {
      'DM Mono': true,
    },
  },

  runtimeConfig: {
    public: {
      directus: {
        url: cms,
      },
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: [
      {
        code: 'pt-BR',
        name: 'Português',
        file: 'pt-BR.ts',
      },
    ],
    langDir: 'locales/',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  //pwa,

  image: {
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    image: {
      directus: {
        // This URL needs to include the final `assets/` directory
        baseURL: `${cms}assets/`,
      }
    }
  },

  site: {
    url: site,
  },

  routeRules: {
    '/': { swr: true, prerender: true },
  },

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  alias: {
    '@dto': fileURLToPath(
      new URL('./app/_dto', import.meta.url),
    ),
    '@schemas': fileURLToPath(
      new URL('./app/_schemas', import.meta.url),
    ),
    '@entities': fileURLToPath(
      new URL('./app/_entities', import.meta.url),
    ),
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-09-27',
})
