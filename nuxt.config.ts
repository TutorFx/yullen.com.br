import { fileURLToPath } from 'node:url'
import { pwa } from './config/pwa'
import { appDescription, cms } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
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
        iso: 'pt-BR',
        file: 'pt-BR.ts',
      },
    ],
    langDir: 'locales/',
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

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

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  alias: {
    '@dto': fileURLToPath(
      new URL('./_dto', import.meta.url),
    ),
    '@schemas': fileURLToPath(
      new URL('./_schemas', import.meta.url),
    ),
    '@entities': fileURLToPath(
      new URL('./_entities', import.meta.url),
    ),
  },
})
