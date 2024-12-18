// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  css: ['~/assets/css/main.css', '~/assets/css/animations.css'],
  modules: ["nuxt-viewport", '@nuxtjs/i18n', '@nuxt/eslint', '@pinia/nuxt', '@vueuse/nuxt'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap',
        }
      ]
    }
  },
  i18n: {
    defaultLocale: 'ee',
    locales: ['ee', 'ru', 'en'],
    strategy: 'prefix',
    vueI18n: './i18n.config.ts',
    fallbackLocale: 'ee',
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})