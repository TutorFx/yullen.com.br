import { fileURLToPath } from 'node:url'
import { appDescription, cms } from './app/constants'
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
  ],

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

  pwa,

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
